"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-24 border-t border-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {(title || subtitle) && (
          <motion.div
            className="mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {title && (
              <h2 className="text-4xl font-light text-black mb-6">{title}</h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl">{subtitle}</p>
            )}
          </motion.div>
        )}

        <motion.div
          className="space-y-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="group border-b border-gray-200 pb-4 mb-4"
              variants={staggerItem}
            >
              <button
                className="w-full text-left flex justify-between items-start py-4 focus:outline-none transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-xl font-medium text-black pr-6 leading-relaxed">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 mt-1 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-4">
                  <div className="text-gray-700 leading-relaxed">
                    {faq.answer.split("\n").map((paragraph, pIndex) => (
                      <p key={pIndex} className={pIndex > 0 ? "mt-4" : ""}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
