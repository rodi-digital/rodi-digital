"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { BoxGeometry, EdgesGeometry } from "three";
import type { BufferAttribute, Group, Points as ThreePoints } from "three";
import {
  convergeGeometry,
  emergenceCloud,
  frameLoops,
  gridBlocks,
  gridLines,
  signalCloud,
  signalCurve,
  type PointCloud,
  type Vec3,
} from "@/lib/illustration-geometry";

export type IllustrationVariant =
  | "emergence"
  | "frames"
  | "grid"
  | "signal"
  | "converge";

// A concrete colour rather than the --primary custom property: the renderer
// needs a value, and the brand indigo is fixed. Shared with the hero flock.
const INDIGO = "#4730C6";

/** Eased 0 → 1 progress, driven by whether the illustration is on screen. */
function useProgress(active: boolean, reduced: boolean) {
  const ref = useRef(reduced && active ? 1 : 0);
  useFrame((_, delta) => {
    if (!active) return;
    if (reduced) {
      ref.current = 1;
      return;
    }
    // Critically damped approach — settles without overshoot.
    ref.current = Math.min(1, ref.current + delta * (1 - ref.current) * 2.4 + delta * 0.12);
  });
  return ref;
}

/** Points that lerp from their scattered start to their resolved end. */
function ResolvingPoints({
  cloud,
  active,
  reduced,
  size = 0.028,
}: {
  cloud: PointCloud;
  active: boolean;
  reduced: boolean;
  size?: number;
}) {
  const ref = useRef<ThreePoints>(null);
  const progress = useProgress(active, reduced);
  const positions = useMemo(() => new Float32Array(cloud.start), [cloud]);

  useFrame(() => {
    const geo = ref.current?.geometry;
    if (!geo) return;
    const attr = geo.getAttribute("position") as BufferAttribute;
    const t = progress.current;
    for (let i = 0; i < positions.length; i++) {
      attr.array[i] = cloud.start[i] + (cloud.end[i] - cloud.start[i]) * t;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={INDIGO}
        size={size}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

/** Slow drift, so the depth is legible without demanding attention. */
function Drift({ children, speed = 0.12 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = Math.sin(t * speed) * 0.45;
    ref.current.rotation.x = Math.sin(t * speed * 0.7) * 0.16;
  });
  return <group ref={ref}>{children}</group>;
}

function Hairline({ points, opacity = 0.35 }: { points: Vec3[]; opacity?: number }) {
  return (
    <Line
      points={points}
      color={INDIGO}
      lineWidth={1}
      transparent
      opacity={opacity}
      depthWrite={false}
    />
  );
}

/**
 * Box outlines drawn as edges rather than `wireframe`, which triangulates each
 * face and leaves diagonals crossing every panel.
 */
function BlockEdges({ size, position }: { size: Vec3; position: Vec3 }) {
  const geometry = useMemo(() => new EdgesGeometry(new BoxGeometry(...size)), [size]);
  return (
    <lineSegments position={position} geometry={geometry}>
      <lineBasicMaterial color={INDIGO} transparent opacity={0.5} />
    </lineSegments>
  );
}

function Scene({
  variant,
  active,
  reduced,
}: {
  variant: IllustrationVariant;
  active: boolean;
  reduced: boolean;
}) {
  const converge = useMemo(() => (variant === "converge" ? convergeGeometry() : null), [variant]);

  switch (variant) {
    case "emergence":
      return (
        <Drift>
          <ResolvingPoints cloud={emergenceCloud()} active={active} reduced={reduced} />
        </Drift>
      );

    case "frames":
      return (
        <Drift speed={0.09}>
          {frameLoops().map((loop, i) => (
            <Hairline key={i} points={loop} opacity={0.5 - i * 0.06} />
          ))}
        </Drift>
      );

    case "grid":
      return (
        <Drift speed={0.08}>
          <group rotation={[0.1, 0, 0]}>
            {gridLines().map((line, i) => (
              <Hairline key={i} points={line} opacity={0.22} />
            ))}
            {gridBlocks().map((b, i) => (
              <BlockEdges key={i} size={b.size} position={b.position} />
            ))}
          </group>
        </Drift>
      );

    case "signal":
      return (
        <Drift speed={0.07}>
          <ResolvingPoints cloud={signalCloud()} active={active} reduced={reduced} size={0.05} />
          <Hairline points={signalCurve()} opacity={0.55} />
        </Drift>
      );

    case "converge": {
      const g = converge!;
      const linkPoints = g.links.map(([a, b]): Vec3[] => [
        [g.cloud.end[a * 3], g.cloud.end[a * 3 + 1], g.cloud.end[a * 3 + 2]],
        [g.cloud.end[b * 3], g.cloud.end[b * 3 + 1], g.cloud.end[b * 3 + 2]],
      ]);
      return (
        <Drift speed={0.1}>
          <ResolvingPoints cloud={g.cloud} active={active} reduced={reduced} size={0.07} />
          {linkPoints.map((pts, i) => (
            <Hairline key={i} points={pts} opacity={0.3} />
          ))}
        </Drift>
      );
    }
  }
}

/**
 * One WebGL canvas per illustration.
 *
 * drei's `<View>` would share a single context across all of them, but there
 * are at most three on any page here, and a per-instance canvas keeps each
 * illustration self-contained — no global mount point in the layout, and no
 * three.js on pages that have no illustration at all. `frameloop` is driven by
 * visibility so offscreen canvases stop rendering entirely.
 */
export function IllustrationScene({
  variant,
  active,
  reduced,
}: {
  variant: IllustrationVariant;
  active: boolean;
  reduced: boolean;
}) {
  return (
    <Canvas
      frameloop={active ? "always" : "demand"}
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 5], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
    >
      <Scene variant={variant} active={active} reduced={reduced} />
    </Canvas>
  );
}
