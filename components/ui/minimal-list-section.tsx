"use client";

import * as motion from "motion/react-client";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "@/lib/scroll-animations";

interface ListItem {
  title: string;
  description: string;
}

interface MinimalListSectionProps {
  title: string;
  description: string;
  items: ListItem[];
  eyebrow?: string;
}

export function MinimalListSection({
  title,
  description,
  items,
  eyebrow = "§ Expertise",
}: MinimalListSectionProps) {
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
              {eyebrow}
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
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-t border-border transition-colors duration-500 hover:bg-secondary/30"
              variants={staggerItem}
            >
              <div className="lg:col-span-4 flex items-center gap-4">
                <span className="eyebrow text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                  {item.title}
                </h3>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
