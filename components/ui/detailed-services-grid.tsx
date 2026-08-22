"use client";

import { defaultViewport, fadeInUp } from "@/lib/scroll-animations";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceDetail {
  title: string;
  description: string;
  items: string[];
  image?: string;
}

interface DetailedServicesGridProps {
  title: string;
  subtitle: string;
  services: ServiceDetail[];
}

export function DetailedServicesGrid({
  title,
  subtitle,
  services,
}: DetailedServicesGridProps) {
  return (
    <motion.section
      className="py-24 md:py-32 border-t border-border relative"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="eyebrow mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              §02 / Capabilities
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-tight">
              {title}
            </h2>
          </div>
          <p className="font-display italic text-2xl text-muted-foreground max-w-md">
            {subtitle}
          </p>
        </div>

        <div className="space-y-px">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative border-t border-border py-12 md:py-16 transition-colors duration-500 hover:bg-secondary/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-4">
                  <div className="eyebrow mb-4 text-primary">
                    {String(index + 1).padStart(2, "0")} —
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl text-foreground tracking-tight leading-none transition-transform duration-500 group-hover:translate-x-2">
                    {service.title}
                  </h3>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="font-mono text-[10px] text-primary mt-1.5 flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          <strong className="text-foreground font-medium">
                            {item.split(" - ")[0]}
                          </strong>
                          {item.includes(" - ") && (
                            <span className="text-muted-foreground/80">
                              {" "}
                              — {item.split(" - ")[1]}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3">
                  {service.image && (
                    <div className="relative aspect-square w-full max-w-[280px] mx-auto">
                      <Image
                        src={service.image}
                        alt={`${service.title} — Rodi Digital`}
                        fill
                        sizes="(max-width: 1024px) 40vw, 20vw"
                        className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
