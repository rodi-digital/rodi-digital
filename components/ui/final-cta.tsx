"use client";

import { motion } from "framer-motion";
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
  // Split title for line break
  const words = title.split(" ");
  const midpoint = Math.ceil(words.length / 2);
  const firstLine = words.slice(0, midpoint).join(" ");
  const secondLine = words.slice(midpoint).join(" ");

  return (
    <section className="py-32 border-t border-gray-100">
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <h2 className="text-5xl font-light text-black mb-8 tracking-tight">
          {firstLine}
          <br />
          {secondLine}
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
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
