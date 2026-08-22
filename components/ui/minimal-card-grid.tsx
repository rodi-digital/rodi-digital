"use client";

import * as motion from "motion/react-client";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "@/lib/scroll-animations";

interface Card {
  title: string;
  description: string;
}

interface MinimalCardGridProps {
  title: string;
  description: string;
  cards: Card[];
  columns?: "2" | "3";
}

export function MinimalCardGrid({
  title,
  description,
  cards,
  columns = "3",
}: MinimalCardGridProps) {
  const gridCols =
    columns === "2" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div>
            <div className="eyebrow mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              § Detail
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
          className={`grid grid-cols-1 ${gridCols} gap-px bg-border`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group relative bg-background p-8 md:p-10 transition-colors duration-500 hover:bg-secondary/40"
              variants={staggerItem}
            >
              <div className="eyebrow mb-6 text-primary">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 tracking-tight">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
