"use client";

import { useInView, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import type { IllustrationVariant } from "@/components/ui/illustration-scene";

export type { IllustrationVariant };

// three.js is heavy and these are decorative, so the scene is only fetched
// once an illustration is actually near the viewport.
const IllustrationScene = dynamic(
  () => import("@/components/ui/illustration-scene").then((m) => m.IllustrationScene),
  { ssr: false, loading: () => null }
);

/**
 * Line illustrations built from one idea: order emerging from a simple field.
 *
 * The hero is a murmuration — many simple agents producing one coherent form —
 * and these carry that vocabulary through the rest of the site rather than
 * borrowing an isometric-wireframe style from elsewhere.
 *
 * They replace five PNGs that totalled 7.5 MB, which `next.config.mjs`'s
 * `images.unoptimized` was serving at full weight.
 */
export function EmergenceIllustration({
  variant,
  className,
}: {
  variant: IllustrationVariant;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  // `once: false` so a canvas that scrolls away stops rendering.
  const inView = useInView(ref, { margin: "200px 0px 200px 0px" });

  return (
    <div ref={ref} className={className} aria-hidden>
      {inView && (
        <IllustrationScene variant={variant} active={inView} reduced={reduced} />
      )}
    </div>
  );
}
