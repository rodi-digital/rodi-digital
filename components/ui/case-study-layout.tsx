import { ReactNode } from "react";
import { ServiceHero } from "@/components/ui/service-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { ResultsImpactGrid } from "@/components/ui/results-impact-grid";
import { FinalCTA } from "@/components/ui/final-cta";

interface Card {
  title: string;
  description: string;
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
  ctaTitle,
  ctaSubtitle,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen">
      <ServiceHero title={title} subtitle={subtitle} />
      
      <TwoColumnSection 
        title="The Challenge"
        content={challenge}
      />
      
      <TwoColumnSection 
        title="Our Solution"
        content={solution}
      />
      
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
      
      <FinalCTA
        title={ctaTitle}
        subtitle={ctaSubtitle}
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View More Cases", href: "/cases" }}
      />
    </div>
  );
}