'use client';

import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import { fadeInUp, fadeIn } from "@/lib/scroll-animations";

interface HomeHeroProps {
  title: string;
  subtitle: string[];
  ctaText: string;
  ctaHref: string;
}

export function HomeHero({ title, subtitle, ctaText, ctaHref }: HomeHeroProps) {
  // Split title into words and insert line break
  const words = title.split(" ");
  const midpoint = Math.ceil(words.length / 2);
  const firstLine = words.slice(0, midpoint).join(" ");
  const secondLine = words.slice(midpoint).join(" ");

  return (
    <section className="pt-32 pb-24 min-h-[100vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex-grow">
        <div className="max-w-5xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-6xl lg:text-8xl font-light tracking-tight text-black mb-12 leading-[0.85]"
          >
            {firstLine}
            <br />
            {secondLine}
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={1}
            className="max-w-3xl space-y-6"
          >
            {subtitle.map((paragraph, index) => (
              <p key={index} className="text-3xl text-gray-600">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={1}
            className="mt-12"
          >
            <Button href={ctaHref} className="text-lg px-8 py-4">
              {ctaText}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
