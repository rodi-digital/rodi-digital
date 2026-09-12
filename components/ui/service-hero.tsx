"use client";

import * as motion from "motion/react-client";
import { fadeInUp } from "@/lib/scroll-animations";

interface ServiceHeroProps {
  title: string;
  /** Optional: some pages carry the lead in the sections below instead. */
  subtitle?: string;
  size?: "default" | "large";
  eyebrow?: string;
}

export function ServiceHero({
  title,
  subtitle,
  size = "default",
  eyebrow,
}: ServiceHeroProps) {
  const titleSize =
    size === "large" ? "text-[14vw] md:text-[10vw]" : "text-[12vw] md:text-[8vw]";

  return (
    <section className="pt-48 md:pt-64 pb-24 md:pb-32 relative overflow-hidden">
      <motion.div
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="eyebrow mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          {eyebrow ?? `§ Index — ${title}`}
        </div>
        <h1
          className={`${titleSize} font-display tracking-tight text-foreground mb-10 leading-[0.9]`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-display">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
