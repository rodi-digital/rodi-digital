"use client";

import { motion } from "framer-motion";
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
    <section className="py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <h2 className="text-4xl font-light text-black mb-6">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
        </motion.div>

        <motion.div
          className={`grid grid-cols-1 ${gridCols} gap-8`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {cards.map((card, index) => (
            <motion.div key={index} className="group" variants={staggerItem}>
              <div className="border-b border-gray-200 pb-6 mb-6 group-hover:border-gray-400 transition-colors">
                <span className="text-sm text-gray-400 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-black">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
