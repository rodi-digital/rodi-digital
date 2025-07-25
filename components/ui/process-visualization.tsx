"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type ProcessStep = {
  title: string;
  description: string;
};

type ProcessVisualizationProps = {
  steps: ProcessStep[];
};

export const ProcessVisualization = ({ steps }: ProcessVisualizationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      steps.forEach((_, index) => {
        tl.to(`.step-${index}`,
          {
            opacity: 1,
            y: 0,
            scale: 1.1,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.to(`.dot-${index}`, { backgroundColor: "#3b82f6", scale: 1.5 });
            },
            onReverseComplete: () => {
              gsap.to(`.dot-${index}`, { backgroundColor: "#e5e7eb", scale: 1 });
            }
          },
          index
        );

        if (index > 0) {
          tl.to(`.step-${index - 1}`, { opacity: 0.5, scale: 1, ease: "power2.inOut" }, index);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [steps]);

  return (
    <div ref={containerRef} className="relative py-16 px-4 w-full max-w-3xl mx-auto">
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2" />
      <div className="space-y-24">
        {steps.map((step, index) => (
          <div key={index} className={`relative flex items-center step-${index} opacity-50`}>
            <div className={`absolute left-1/2 w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 dot-${index}`} />
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left ml-auto"}`}>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};