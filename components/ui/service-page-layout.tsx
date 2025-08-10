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
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-7xl font-light tracking-tight text-black mb-8 leading-[0.9]">
              {title.split(" ").map((word, index) => (
                <span key={index}>
                  {word}
                  {index === 0 && <br />}
                  {index > 0 && " "}
                </span>
              ))}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-light text-black mb-8">
                {sectionTitle}
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {sectionDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button href="/contact" className="w-full sm:w-auto">
                  Start Your Project
                </Button>
                <Button
                  href="/cases"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      {children}

      {/* Final CTA */}
      <section className="py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-light text-black mb-8 tracking-tight">
            {ctaTitle.split(" ").map((word, index, array) => (
              <span key={index}>
                {word}
                {index === Math.floor(array.length / 2) - 1 && <br />}
                {index < Math.floor(array.length / 2) - 1 && " "}
                {index >= Math.floor(array.length / 2) && index < array.length - 1 && " "}
              </span>
            ))}
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" className="w-full sm:w-auto">
              Get Started Today
            </Button>
            <Button
              href="/services"
              variant="outline"
              className="w-full sm:w-auto"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}