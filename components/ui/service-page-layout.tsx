import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  children: ReactNode;
}

export function ServicePageLayout({
  title,
  subtitle,
  sectionTitle,
  sectionDescription,
  ctaTitle,
  ctaDescription,
  children,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen">
      <section className="pt-48 md:pt-64 pb-24 md:pb-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="eyebrow mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            § Service — {title}
          </div>
          <h1 className="font-display text-[12vw] md:text-[8vw] tracking-tight text-foreground mb-10 leading-[0.9]">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-display">
            {subtitle}
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />
                § Overview
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-tight">
                {sectionTitle}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-display">
                {sectionDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button href="/contact" className="w-full sm:w-auto">
                  Start Your Project
                </Button>
                <Button href="/cases" variant="outline" className="w-full sm:w-auto">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {children}

      <section className="py-32 md:py-48 border-t border-border relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          <div className="eyebrow mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />
            § Let&apos;s Build
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-tight mb-10 leading-[0.95]">
            {ctaTitle.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="italic text-primary">
              {ctaTitle.split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed font-display">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" className="w-full sm:w-auto">
              Get Started Today
            </Button>
            <Button href="/services" variant="outline" className="w-full sm:w-auto">
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
