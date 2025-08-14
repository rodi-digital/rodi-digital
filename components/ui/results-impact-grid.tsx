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
    <section className="py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <h2 className="text-4xl font-light text-black mb-6">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {cards.map((card, index) => (
            <motion.div key={index} className="group" variants={staggerItem}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                {/* Left side - Impact indicator */}
                <div className="lg:col-span-2 flex lg:flex-col lg:items-start items-center gap-4">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={defaultViewport}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Impact number with unique design */}
                    <div className="w-16 h-16 border border-gray-200 flex items-center justify-center relative group-hover:border-gray-300 transition-colors duration-300">
                      <motion.span
                        className="text-xl font-light font-mono text-gray-400"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={defaultViewport}
                        transition={{
                          delay: index * 0.2 + 0.3,
                          type: "spring",
                          stiffness: 150,
                          damping: 12,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.span>

                      {/* Corner accent */}
                      <motion.div
                        className="absolute -top-1 -left-1 w-3 h-3 bg-primary"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={defaultViewport}
                        transition={{
                          delay: index * 0.2 + 0.5,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Connecting line to content */}
                  <motion.div
                    className="hidden lg:block w-px bg-gray-200 flex-1 mt-4"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={defaultViewport}
                    transition={{
                      delay: index * 0.2 + 0.7,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                </div>

                {/* Right side - Content */}
                <div className="lg:col-span-10">
                  <h3 className="text-3xl font-light text-black mb-6 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Bottom border with animation */}
              {index < cards.length - 1 && (
                <motion.div
                  className="mt-16 h-px bg-gray-100"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={defaultViewport}
                  transition={{
                    delay: index * 0.2 + 1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  style={{ transformOrigin: "left" }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
