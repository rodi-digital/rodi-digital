"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "@/lib/scroll-animations";
import { Button } from "@/components/ui/button";

interface TwoColumnSectionProps {
  title: string;
  content: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  children?: ReactNode;
}

export function TwoColumnSection({
  title,
  content,
  primaryCTA,
  secondaryCTA,
  children,
}: TwoColumnSectionProps) {
  return (
    <section className="py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <h2 className="text-4xl font-light text-black mb-8">{title}</h2>
          </motion.div>
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {primaryCTA && (
                  <Button href={primaryCTA.href} className="w-full sm:w-auto">
                    {primaryCTA.text}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    href={secondaryCTA.href}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    {secondaryCTA.text}
                  </Button>
                )}
              </div>
            )}
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
