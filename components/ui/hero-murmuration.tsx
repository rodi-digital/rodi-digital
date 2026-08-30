"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { Color } from "three";
import type { ShaderMaterial } from "three";

// The brand indigo, shared with illustration-scene.tsx.
const INDIGO = "#4730C6";

/** mulberry32 — deterministic, so the flock starts identically every load. */
function prng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const VERTEX = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  attribute float aSeed;
  varying float vFade;

  void main() {
    // The swirl is evaluated from each bird's rest position rather than
    // integrated frame to frame, so the flock can never drift apart or
    // collapse, and the whole thing costs one uniform update per frame.
    vec3 p = position;
    float t = uTime;
    float s = aSeed;

    vec3 q = p * 1.15 + vec3(t * 0.06, t * 0.04, t * 0.05);
    vec3 swirl = vec3(
      sin(q.y * 1.3 + s) * cos(q.z * 0.9 + t * 0.21),
      sin(q.z * 1.1)     * cos(q.x * 1.2 + s),
      sin(q.x * 1.0 + s) * cos(q.y * 1.4 + t * 0.26)
    );

    p += swirl * vec3(0.42, 0.24, 0.34);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    // uSize is in pixels at one unit of depth. The usual 300.0/-mv.z
    // snippet assumes a scene scale this one does not have, and produced
    // ~146px birds that stacked into a solid blot.
    gl_PointSize = (uSize * uPixelRatio) / -mv.z;
    // Birds further back sit back visually as well as spatially.
    vFade = clamp(1.0 - (-mv.z - 4.0) / 8.0, 0.25, 1.0);
  }
`;

const FRAGMENT = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;

  void main() {
    // Round the square point sprite off, or the flock reads as pixel confetti.
    vec2 d = gl_PointCoord - vec2(0.5);
    float mask = 1.0 - smoothstep(0.35, 0.5, length(d));
    if (mask < 0.01) discard;
    gl_FragColor = vec4(uColor, uOpacity * vFade * mask);
  }
`;

/**
 * A live starling flock.
 *
 * Motion runs entirely in the vertex shader. The first version advected every
 * bird on the CPU, which meant ~25,000 trig calls and a 50 KB re-upload of the
 * position buffer on every single frame — invisible on a fast desktop, but real
 * work on a phone. Now the CPU sets one float per frame.
 */
function Flock({ reduced, count }: { reduced: boolean; count: number }) {
  const material = useRef<ShaderMaterial>(null);
  const { viewport } = useThree();

  const { positions, seeds } = useMemo(() => {
    const rand = prng(20260829);
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Denser at the core, sparse at the edges — a flock, not a box of dust.
      const r = Math.pow(rand(), 0.6);
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      positions[i * 3] = r * 1.55 * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * 0.78 * Math.cos(phi);
      positions[i * 3 + 2] = r * 1.15 * Math.sin(phi) * Math.sin(theta);
      seeds[i] = rand() * 6.283;
    }
    return { positions, seeds };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: 13 },
      uPixelRatio: { value: 1 },
      uColor: { value: new Color(INDIGO) },
      // Thousands of overlapping sprites accumulate alpha fast; anything
      // higher reads as a stain rather than as individual birds.
      uOpacity: { value: 0.22 },
    }),
    []
  );

  useFrame((state) => {
    if (!material.current) return;
    material.current.uniforms.uPixelRatio.value = state.gl.getPixelRatio();
    if (reduced) return;
    material.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  // Right of centre on landscape so the headline keeps the left; low and
  // centred on portrait, where the hero is 100svh and there is no left column.
  const portrait = viewport.width < viewport.height;
  const position: [number, number, number] = portrait
    ? [0, -viewport.height * 0.2, 0]
    : // Held 1.7 units in from the right edge rather than at a fraction of the
      // width, so the flock stays clear of the headline at any aspect ratio.
      [viewport.width * 0.5 - 1.7, 0.1, 0];

  return (
    <points position={position} scale={portrait ? 0.9 : 1}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSeed" args={[seeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={VERTEX}
        fragmentShader={FRAGMENT}
        transparent
        depthWrite={false}
      />
    </points>
  );
}

/** Subtle pointer parallax, matching the feel of the old hero scene. */
function Rig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 0.5 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 0.3 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/**
 * R3F renders nothing until it has measured a non-zero container. Inside this
 * full-bleed hero the first measurement lands before layout settles, so the
 * canvas stays empty and sits at its intrinsic 300x150 — no children ever
 * mount, which is why the fix cannot live inside the Canvas.
 *
 * react-use-measure, which R3F measures with, listens for window resize, so
 * observing the wrapper and re-broadcasting is enough to make it re-measure.
 */
function useForceMeasure() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nudge = () => window.dispatchEvent(new Event("resize"));
    nudge();
    const observer = new ResizeObserver(nudge);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export function HeroMurmuration({
  reduced,
  active,
}: {
  reduced: boolean;
  active: boolean;
}) {
  const ref = useForceMeasure();

  // Fewer birds on small or low-powered devices. Measured once: the flock is
  // decorative, so re-tuning it on rotate is not worth a re-render.
  const count = useMemo(() => {
    if (typeof window === "undefined") return 2400;
    const small = window.innerWidth < 768;
    const weak = (navigator.hardwareConcurrency ?? 8) <= 4;
    return small || weak ? 1800 : 4200;
  }, []);

  return (
    <div ref={ref} className="absolute inset-0">
      <Canvas
        className="hero-canvas"
        // Stop rendering entirely once the hero scrolls away. Without this the
        // canvas keeps redrawing a full-screen, alpha-blended particle field
        // for the whole session, which is most of the cost on this page.
        frameloop={active ? "always" : "never"}
        // A transparent full-screen point field is fill-rate bound, and every
        // step of DPR is a squared cost. 1.25 is the point where the birds
        // still read cleanly on a retina panel.
        dpr={[1, 1.25]}
        camera={{ position: [0, 0, 7], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        {!reduced && active && <Rig />}
        <Flock reduced={reduced} count={count} />
      </Canvas>
    </div>
  );
}
