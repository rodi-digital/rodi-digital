"use client";

import { ReactNode } from "react";
import * as motion from "motion/react-client";
import { fadeInUp, defaultViewport } from "@/lib/scroll-animations";
import { Button } from "@/components/ui/button";

interface CenteredContentSectionProps {
  content: string;
  cta?: {
    text: string;
    href: string;
  };
  children?: ReactNode;
}

export function CenteredContentSection({
  content,
  cta,
  children,
}: CenteredContentSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-relaxed">
            {content}
          </h2>

          {cta && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              transition={{ delay: 0.2 }}
            >
              <Button href={cta.href}>{cta.text}</Button>
            </motion.div>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
