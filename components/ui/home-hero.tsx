"use client";

import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import { fadeInUp, fadeIn } from "@/lib/scroll-animations";
import { HeroBackground } from "@/components/ui/hero-background";

interface HomeHeroProps {
  title: string;
  subtitle: string[];
  ctaText: string;
  ctaHref: string;
}

export function HomeHero({ title, subtitle, ctaText, ctaHref }: HomeHeroProps) {
  const words = title.split(" ");
  const midpoint = Math.ceil(words.length / 2);
  const firstLine = words.slice(0, midpoint).join(" ");
  const secondLine = words.slice(midpoint).join(" ");

  return (
    <section className="relative pt-40 sm:pt-48 md:pt-56 pb-16 md:pb-24 min-h-[100svh] flex items-center overflow-hidden">
      <HeroBackground />

      {/* Coordinate markers */}
      <div className="absolute top-28 left-4 sm:left-6 lg:left-10 eyebrow hidden md:flex items-center gap-2">
        <span className="text-primary">+</span> 51.6901° N · 5.3028° E
      </div>
      <div className="absolute top-28 right-4 sm:right-6 lg:right-10 eyebrow hidden md:flex items-center gap-2">
        <span className="h-1.5 w-1.5 bg-primary rounded-full" /> EST. 2024
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Text */}
          <div className="lg:col-span-8 max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="eyebrow mb-8 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-primary" />
              <span>§01 / Index — Digital Product Studio</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="font-display text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.4vw] leading-[0.88] tracking-tight text-foreground mb-10"
            >
              {firstLine}{" "}
              <span className="italic text-primary">{secondLine}</span>
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={1}
              className="max-w-xl space-y-4 sm:space-y-6"
            >
              {subtitle.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={1}
              className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <Button href={ctaHref} className="text-sm">
                {ctaText}
              </Button>
              <div className="eyebrow flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-primary rounded-full dot-pulse" />
                Available for new projects
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-4 sm:left-6 lg:left-10 eyebrow flex items-center gap-3"
      >
        <span className="inline-block animate-pulse">↓</span> Scroll to explore
      </motion.div>
    </section>
  );
}
