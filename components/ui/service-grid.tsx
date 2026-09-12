"use client";

import * as motion from "motion/react-client";
import {
  staggerContainer,
  staggerItem,
  defaultViewport,
  fadeInUp,
} from "@/lib/scroll-animations";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  EmergenceIllustration,
  type IllustrationVariant,
} from "@/components/ui/emergence-illustration";

interface Service {
  title: string;
  description: string;
  href: string;
  image?: string;
  illustration?: IllustrationVariant;
}

interface ServiceGridProps {
  services: Service[];
  imageVariant?: "transparent" | "photo";
  ctaLabel?: string;
}

export function ServiceGrid({
  services,
  imageVariant = "photo",
  ctaLabel = "Learn More",
}: ServiceGridProps) {
  const isTransparent = imageVariant === "transparent";
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="space-y-px"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-border py-16 transition-colors duration-500 hover:bg-secondary/30"
              variants={staggerItem}
            >
              <motion.div
                className="lg:col-span-7 order-2 lg:order-1"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
              >
                <div className="eyebrow mb-4 text-primary">
                  {String(index + 1).padStart(2, "0")} —
                </div>
                <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-tight mb-6 leading-none transition-transform duration-500 group-hover:translate-x-2">
                  {service.title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {service.description}
                </p>
                <Button href={service.href} className="w-full sm:w-auto">
                  {ctaLabel}
                </Button>
              </motion.div>
              <motion.div
                className="lg:col-span-5 order-1 lg:order-2"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                transition={{ delay: 0.2 }}
              >
                {service.illustration ? (
                  <div className="relative aspect-[4/3] flex items-center justify-center">
                    <EmergenceIllustration
                      variant={service.illustration}
                      className="h-full w-auto transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  service.image && (
                  <div
                    className={`relative aspect-[4/3] overflow-hidden ${isTransparent ? "" : "border border-border bg-secondary"}`}
                  >
                    <Image
                      className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                        isTransparent ? "object-contain" : "object-cover"
                      }`}
                      src={service.image}
                      alt={`${service.title} — Rodi Digital`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    {!isTransparent && (
                      <div className="absolute top-3 left-3 eyebrow text-primary bg-background/80 backdrop-blur px-2 py-1">
                        ◣ {String(index + 1).padStart(2, "0")}
                      </div>
                    )}
                  </div>
                  )
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
