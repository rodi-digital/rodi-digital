"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  defaultViewport,
  fadeInUp,
} from "@/lib/scroll-animations";
import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  description: string;
  href: string;
}

interface ServiceGridProps {
  services: Service[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <section className="py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="space-y-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              variants={staggerItem}
            >
              <motion.div
                className="order-2 lg:order-1"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
              >
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <span className="text-sm text-gray-400 font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-4xl font-light text-black mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <Button href={service.href} className="w-full sm:w-auto">
                  Learn More
                </Button>
              </motion.div>
              <motion.div
                className="order-1 lg:order-2"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                transition={{ delay: 0.2 }}
              >
                <div className="aspect-square bg-gray-50 rounded-2xl border border-gray-100"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
