"use client";

import * as motion from "motion/react-client";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/scroll-animations";
import Image from "next/image";
import Link from "next/link";

interface CaseItem {
  title: string;
  description: string;
  href: string;
  image: string;
}

interface CasesPreviewProps {
  cases: CaseItem[];
}

export function CasesPreview({ cases }: CasesPreviewProps) {
  const [featured, ...rest] = cases;

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div>
            <div className="eyebrow mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              §03 / Selected Work
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-tight">
              Case Studies
            </h2>
          </div>
          <Link
            href="/cases"
            className="link-draw font-mono text-xs uppercase tracking-[0.18em] text-primary"
          >
            View all cases →
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {/* Featured case */}
          <motion.div
            className="lg:col-span-7 group relative"
            variants={staggerItem}
          >
            <Link href={featured.href} className="block">
              <div className="relative aspect-[16/11] lg:aspect-[2/1] overflow-hidden mb-7 border border-border">
                <Image
                  src={featured.image}
                  alt={`${featured.title} — Rodi Digital case study`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 eyebrow text-primary bg-background/80 backdrop-blur px-2.5 py-1">
                  ✦ Featured
                </div>
              </div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-xs text-primary">01 —</span>
                <h3 className="font-display text-4xl md:text-5xl text-foreground tracking-tight transition-transform duration-500 group-hover:translate-x-1">
                  {featured.title}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {featured.description}
              </p>
              <span className="link-draw font-mono text-xs uppercase tracking-[0.18em] text-primary mt-5 inline-block">
                Read the case →
              </span>
            </Link>
          </motion.div>

          {/* Smaller cases */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 lg:gap-8 content-start">
            {rest.map((c, index) => (
              <motion.div
                key={c.title}
                className="group relative"
                variants={staggerItem}
              >
                <Link href={c.href} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-4 border border-border">
                    <Image
                      src={c.image}
                      alt={`${c.title} — Rodi Digital case study`}
                      fill
                      sizes="(max-width: 1024px) 45vw, 23vw"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="eyebrow mb-1.5 text-primary">
                    {String(index + 2).padStart(2, "0")} —
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-foreground tracking-tight mb-1.5 transition-transform duration-500 group-hover:translate-x-1">
                    {c.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {c.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
