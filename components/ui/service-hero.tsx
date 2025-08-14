"use client";

import * as motion from "motion/react-client";
import { fadeInUp } from "@/lib/scroll-animations";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  size?: "default" | "large";
}

export function ServiceHero({
  title,
  subtitle,
  size = "default",
}: ServiceHeroProps) {
  const titleSize =
    size === "large" ? "text-6xl lg:text-8xl" : "text-6xl lg:text-7xl";
  const leadingSize = size === "large" ? "leading-[0.85]" : "leading-[0.9]";
  const marginBottom = size === "large" ? "mb-12" : "mb-8";

  // Split title into words and insert line breaks
  const words = title.split(" ");
  const midpoint = Math.ceil(words.length / 2);
  const firstLine = words.slice(0, midpoint).join(" ");
  const secondLine = words.slice(midpoint).join(" ");

  return (
    <section className="pt-64 pb-64">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl">
          <h1
            className={`${titleSize} font-light tracking-tight text-black ${marginBottom} ${leadingSize}`}
          >
            {firstLine}
            <br />
            {secondLine}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
