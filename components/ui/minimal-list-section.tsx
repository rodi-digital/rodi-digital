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
}

export function MinimalListSection({
  title,
  description,
  items,
}: MinimalListSectionProps) {
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
          className="space-y-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 border-b border-gray-100 last:border-b-0"
              variants={staggerItem}
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-400 font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-medium text-black">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-600 leading-relaxed">
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
