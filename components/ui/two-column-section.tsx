"use client";

import { ReactNode } from "react";
import * as motion from "motion/react-client";
import { fadeInUp, defaultViewport } from "@/lib/scroll-animations";
import { Button } from "@/components/ui/button";

interface TwoColumnSectionProps {
  title: string;
  content: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  children?: ReactNode;
}

export function TwoColumnSection({
  title,
  content,
  primaryCTA,
  secondaryCTA,
  children,
}: TwoColumnSectionProps) {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-5"
          >
            <div className="eyebrow mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              § Approach
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-tight leading-[0.95]">
              {title}
            </h2>
          </motion.div>
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-display">
              {content}
            </p>
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {primaryCTA && (
                  <Button href={primaryCTA.href} className="w-full sm:w-auto">
                    {primaryCTA.text}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    href={secondaryCTA.href}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    {secondaryCTA.text}
                  </Button>
                )}
              </div>
            )}
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
