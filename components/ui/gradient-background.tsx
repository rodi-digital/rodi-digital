"use client";

import type React from "react";
import { useEffect, useState, useRef } from "react";

interface GradientBackgroundProps {
  children: React.ReactNode;
}

interface Gradient {
  x: string;
  y: string;
  width: string;
  height: string;
  opacity: number;
  borderRadius: string;
}

export function GradientBackground({
  children,
}: Readonly<GradientBackgroundProps>) {
  const [gradients, setGradients] = useState<Gradient[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateGradients = () => {
      if (!containerRef.current) return;

      const height = containerRef.current.scrollHeight;
      const viewportHeight = window.innerHeight;
      const numberOfScreens = Math.ceil(height / viewportHeight);

      const gradientsPerScreen = 2;
      const totalGradients = Math.max(
        3,
        Math.min(12, numberOfScreens * gradientsPerScreen)
      );

      if (gradients.length === totalGradients) return;

      const newGradients: Gradient[] = [];
      const colors = [
        "rgba(112, 86, 245, 0.50)",
        "rgba(112, 86, 245, 0.25)",
        "rgba(112, 86, 245, 0.75)",
        "rgba(112, 86, 245, 0.40)",
        "rgba(112, 86, 245, 0.60)",
      ];

      for (let i = 0; i < totalGradients; i++) {
        const isLeft = i % 2 === 0;
        const screenSection = Math.floor(i / gradientsPerScreen);
        const baseY =
          screenSection * viewportHeight +
          (viewportHeight * (i % gradientsPerScreen)) / gradientsPerScreen;

        const baseSize = 35 + Math.random() * 30;
        const widthMultiplier = 0.7 + Math.random() * 0.6;
        const heightMultiplier = 0.7 + Math.random() * 0.6;

        const topLeft = 20 + Math.random() * 40;
        const topRight = 20 + Math.random() * 40;
        const bottomRight = 20 + Math.random() * 40;
        const bottomLeft = 20 + Math.random() * 40;

        newGradients.push({
          x: isLeft ? `${Math.random() * 20}%` : `${80 + Math.random() * 20}%`,
          y: `${baseY + Math.random() * viewportHeight * 0.3}px`,
          width: `${baseSize * widthMultiplier}vw`,
          height: `${baseSize * heightMultiplier}vw`,
          opacity: colors[i % colors.length].match(/0\.\d+/)?.[0]
            ? parseFloat(colors[i % colors.length].match(/0\.\d+/)![0])
            : 0.5,
          borderRadius: `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`,
        });
      }

      setGradients(newGradients);
    };

    updateGradients();

    let resizeTimeout: NodeJS.Timeout;
    const debouncedUpdate = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateGradients, 300);
    };

    window.addEventListener("resize", debouncedUpdate);

    return () => {
      window.removeEventListener("resize", debouncedUpdate);
      clearTimeout(resizeTimeout);
    };
  }, [gradients.length]);

  return (
    <div ref={containerRef} className={`relative w-full min-h-screen`}>
      <div
        className={`absolute inset-0 -z-10 overflow-hidden ${
          isVisible ? "opacity-70 md:opacity-35" : "opacity-0"
        }`}
        style={{
          filter: "blur(120px)",
          willChange: "filter",
          pointerEvents: "none",
          transition: "opacity 3000ms ease-in-out",
        }}
      >
        {gradients.map((gradient, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: gradient.x,
              top: gradient.y,
              width: gradient.width,
              height: gradient.height,
              borderRadius: gradient.borderRadius,
              backgroundColor: `rgba(112, 86, 245, ${gradient.opacity})`,
            }}
          />
        ))}
      </div>
      {/* Content above gradients */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
