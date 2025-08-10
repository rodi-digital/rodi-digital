"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { H2 } from "./heading";

gsap.registerPlugin(ScrollTrigger);

export interface ProcessStep {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      steps.forEach((_, index) => {
        const trigger = ScrollTrigger.create({
          trigger: `.step-${index}`,
          start: "top center+=50",
          end: "bottom center+=50",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });

        triggers.push(trigger);
      });
    }, containerRef);
    return () => {
      triggers.forEach((t) => t.kill());
      ctx.revert();
    };
  }, [steps]);

  return (
    <div
      ref={containerRef}
      className="relative py-10 px-5 w-full max-w-xl mx-auto"
    >
      {/* Vertical timeline line */}
      <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
      <div className="flex flex-col gap-24">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={clsx(
                `relative flex items-start step-${index} transition-all duration-300`,
                isActive ? "opacity-100" : "opacity-30"
              )}
            >
              {/* Step dot and connector */}
              <div className="flex flex-col items-center z-10">
                <div
                  className={clsx(
                    `dot-${index} w-5 h-5 rounded-full mt-4 flex items-center justify-center transition-all duration-300`,
                    isActive ? " bg-purple-800" : " bg-gray-700"
                  )}
                />
              </div>
              {/* Step content */}
              <div className="ml-6">
                <H2
                  className={clsx(
                    "!text-xl font-semibold transition-colors duration-300 mb-2",
                    isActive ? "text-purple-800" : "text-gray-300"
                  )}
                >
                  {step.title}
                </H2>
                <p className="text-gray-700 text-base mt-1">
                  {step.description}
                </p>
                {step.linkText && step.linkHref && (
                  <a
                    href={step.linkHref}
                    className="text-blue-400 hover:underline text-base font-medium mt-1 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {step.linkText}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
