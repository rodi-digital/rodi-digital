import { ReactNode } from "react";
import { ServiceHero } from "@/components/ui/service-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { ResultsImpactGrid } from "@/components/ui/results-impact-grid";
import { FinalCTA } from "@/components/ui/final-cta";
import { Button } from "@/components/ui/button";

interface Card {
  title: string;
  description: string;
}

interface ProjectLink {
  text: string;
  href: string;
  variant?: "default" | "outline";
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  keyFeatures: Card[];
  impact: Card[];
  technologySection?: {
    title: string;
    content: string;
  };
  projectLinks?: ProjectLink[];
  ctaTitle: string;
  ctaSubtitle: string;
}

export function CaseStudyLayout({
  title,
  subtitle,
  challenge,
  solution,
  keyFeatures,
  impact,
  technologySection,
  projectLinks,
  ctaTitle,
  ctaSubtitle,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen">
      <ServiceHero title={title} subtitle={subtitle} />

      <TwoColumnSection title="The Challenge" content={challenge} />

      <TwoColumnSection title="Our Solution" content={solution} />

      <MinimalCardGrid
        title="Key Features"
        description="Essential features that drive user engagement and value."
        cards={keyFeatures}
        columns="3"
      />

      <ResultsImpactGrid
        title="Results & Impact"
        description="The measurable outcomes and positive impact achieved."
        cards={impact}
      />

      {technologySection && (
        <TwoColumnSection
          title={technologySection.title}
          content={technologySection.content}
        />
      )}

      {projectLinks && projectLinks.length > 0 && (
        <section className="border-t border-gray-100 py-36">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {projectLinks.map((link, index) => (
                <Button
                  key={index}
                  href={link.href}
                  variant={link.variant || "outline"}
                  className="w-full sm:w-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA
        title={ctaTitle}
        subtitle={ctaSubtitle}
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View More Cases", href: "/cases" }}
      />
    </div>
  );
}
