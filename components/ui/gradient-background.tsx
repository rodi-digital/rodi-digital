"use client";

import type React from "react";

interface GradientBackgroundProps {
  children: React.ReactNode;
}

export function GradientBackground({ children }: Readonly<GradientBackgroundProps>) {
  return (
    <div className="relative min-h-screen">
      <div className="aurora" aria-hidden />
      <div className="grid-layer" aria-hidden />
      <div className="grain-layer" aria-hidden />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
