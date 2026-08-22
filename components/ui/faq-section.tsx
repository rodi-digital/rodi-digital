"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import * as motion from "motion/react-client";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "@/lib/scroll-animations";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

export function FAQSection({
  title,
  subtitle,
  faqs,
  className = "",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-24 md:py-32 border-t border-border ${className}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-32 self-start"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <div className="eyebrow mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              § FAQ
            </div>
            {title && (
              <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-tight mb-6">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                {subtitle}
              </p>
            )}
          </motion.div>

          <motion.div
            className="lg:col-span-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  className="group border-t border-border first:border-t-0"
                  variants={staggerItem}
                >
                  <button
                    className="w-full text-left flex items-start justify-between gap-6 py-6 focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="eyebrow text-primary mt-1.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl text-foreground leading-tight tracking-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`flex-shrink-0 mt-1.5 h-8 w-8 border border-border flex items-center justify-center text-primary transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-primary text-primary-foreground" : ""
                      }`}
                    >
                      <Plus size={14} />
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-12 pb-8 text-muted-foreground leading-relaxed text-lg max-w-3xl">
                        {faq.answer.split("\n").map((paragraph, pIndex) => (
                          <p key={pIndex} className={pIndex > 0 ? "mt-4" : ""}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
