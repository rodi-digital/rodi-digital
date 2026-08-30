"use client";

import { useInView, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HeroMurmuration = dynamic(
  () => import("@/components/ui/hero-murmuration").then((m) => m.HeroMurmuration),
  { ssr: false, loading: () => null }
);

/**
 * Full-bleed backdrop for the homepage hero: a live starling flock.
 *
 * This replaced a generated photograph of a murmuration. The photograph was a
 * picture of emergence; this is emergence actually running — thousands of
 * simple parts producing one coherent form, which is the same thing the studio
 * builds.
 *
 * three.js is ~229 KB gzipped, and the hero is above the fold, so importing it
 * during hydration would put it in direct competition with becoming
 * interactive. Waiting for idle means the headline paints and the page responds
 * first; the flock fades in a moment later over the paper background, which is
 * what the scrim shows anyway.
 */
export function HeroBackground() {
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [ready, setReady] = useState(false);

  // Deferred past first paint so three.js does not compete with hydration,
  // but only just past it. An idle callback with a 1.5s timeout plus a 1s
  // fade meant the flock could take ~2.5s to appear, which reads as the page
  // being slow rather than as a considered entrance.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: ready ? 1 : 0 }}
      >
        {ready && <HeroMurmuration reduced={reduced} active={inView} />}
      </div>

      {/* Keeps the headline readable: opaque paper on the left, clear by the
          time it reaches the right-hand columns where the flock sits. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_0%,hsl(var(--background)/0.9)_22%,hsl(var(--background)/0.5)_46%,transparent_72%)]" />
      {/* Fades into the marquee strip that follows the hero. */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,hsl(var(--background)),transparent)]" />
      {/* The global .grain-layer is fixed at z-1 and sits below `main`, so the
          canvas would otherwise be the one ungrained surface on the page. */}
      <div className="hero-bg-grain" />
    </div>
  );
}
