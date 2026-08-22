"use client";

import * as motion from "motion/react-client";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "@/lib/scroll-animations";

interface ImpactCard {
  title: string;
  description: string;
}

interface ResultsImpactGridProps {
  title: string;
  description: string;
  cards: ImpactCard[];
}

export function ResultsImpactGrid({
  title,
  description,
  cards,
}: ResultsImpactGridProps) {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div>
            <div className="eyebrow mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              § Impact
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-tight">
              {title}
            </h2>
          </div>
          <p className="font-display italic text-xl text-muted-foreground max-w-md">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="space-y-px"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {cards.map((card, index) => (
            <motion.div key={index} className="group" variants={staggerItem}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-12 border-t border-border transition-colors duration-500 hover:bg-secondary/30">
                <div className="lg:col-span-3 flex items-center gap-6">
                  <div className="relative h-16 w-16 border border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <span className="font-mono text-xl text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute -top-1 -left-1 h-2.5 w-2.5 bg-primary" />
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4 tracking-tight leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
