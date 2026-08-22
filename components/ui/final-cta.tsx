"use client";

import * as motion from "motion/react-client";
import { fadeInUp, defaultViewport } from "@/lib/scroll-animations";
import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

export function FinalCTA({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: FinalCTAProps) {
  return (
    <section className="py-32 md:py-48 border-t border-border relative overflow-hidden">
      <div className="aurora" aria-hidden />
      <motion.div
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <div className="eyebrow mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-primary" />
          § Let&apos;s Build
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tight leading-[0.95] mb-10">
          {title.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="italic text-primary">
            {title.split(" ").slice(-2).join(" ")}
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed font-display">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href={primaryCTA.href} className="w-full sm:w-auto">
            {primaryCTA.text}
          </Button>
          <Button
            href={secondaryCTA.href}
            variant="outline"
            className="w-full sm:w-auto"
          >
            {secondaryCTA.text}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
