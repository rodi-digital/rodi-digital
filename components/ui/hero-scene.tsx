"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, ContactShadows } from "@react-three/drei";
import { useEffect, useRef } from "react";
import type { Group } from "three";

const PURPLE = "#4730C6";
const PURPLE_SOFT = "#7c6cf0";

function Rig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 1.4 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.9 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Shape({
  position,
  floatSpeed = 1,
  floatIntensity = 1.2,
  rotate = 0.1,
  children,
}: {
  position: [number, number, number];
  floatSpeed?: number;
  floatIntensity?: number;
  rotate?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * rotate;
      ref.current.rotation.x = state.clock.elapsedTime * rotate * 0.4;
    }
  });
  return (
    <Float speed={floatSpeed} rotationIntensity={0.5} floatIntensity={floatIntensity}>
      <group ref={ref} position={position}>{children}</group>
    </Float>
  );
}

export function HeroScene() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const dispatch = () => window.dispatchEvent(new Event("resize"));
    const timers = [0, 60, 160, 350, 700].map((ms) => window.setTimeout(dispatch, ms));
    const ro = new ResizeObserver(() => dispatch());
    const attach = () => {
      const canvas = el.querySelector("canvas");
      if (canvas) ro.observe(canvas);
      else requestAnimationFrame(attach);
    };
    const raf = requestAnimationFrame(attach);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return (
    <div ref={wrapRef} className="hero-canvas">
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 6], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", background: "transparent" }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <Rig />

        {/* AI — wireframe icosahedron with a faint ghost shell */}
        <Shape position={[-1.1, 0.4, 0]} rotate={0.12} floatSpeed={1.3} floatIntensity={1.3}>
          <mesh>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial color={PURPLE} wireframe />
          </mesh>
          <mesh>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial color={PURPLE} transparent opacity={0.05} />
          </mesh>
        </Shape>

        {/* Mobile — wireframe torus knot */}
        <Shape position={[1.4, -0.3, -0.3]} rotate={0.18} floatSpeed={1.05} floatIntensity={1.1}>
          <mesh>
            <torusKnotGeometry args={[0.5, 0.18, 128, 16]} />
            <meshBasicMaterial color={PURPLE_SOFT} wireframe />
          </mesh>
        </Shape>

        {/* Web — wireframe rounded panel */}
        <Shape position={[0.5, 1.3, 0.2]} rotate={0.08} floatSpeed={0.9} floatIntensity={1.5}>
          <mesh>
            <boxGeometry args={[1.5, 0.95, 0.9]} />
            <meshBasicMaterial color={PURPLE} wireframe />
          </mesh>
          <mesh>
            <boxGeometry args={[1.5, 0.95, 0.9]} />
            <meshBasicMaterial color={PURPLE} transparent opacity={0.04} />
          </mesh>
        </Shape>

        <Sparkles count={36} scale={6} size={2.2} speed={0.25} color={PURPLE_SOFT} opacity={0.45} />
        <ContactShadows position={[0, -2, 0]} opacity={0.12} scale={11} blur={3} far={4} color={PURPLE} />
      </Canvas>
    </div>
  );
}
