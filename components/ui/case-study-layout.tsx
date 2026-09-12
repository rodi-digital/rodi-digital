import { ServiceHero } from "@/components/ui/service-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { ResultsImpactGrid } from "@/components/ui/results-impact-grid";
import { FAQSection } from "@/components/ui/faq-section";
import { JsonLd } from "@/components/ui/json-ld";
import { faqPageSchema } from "@/lib/seo";
import { FinalCTA } from "@/components/ui/final-cta";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { path as routePath } from "@/lib/routes";

const LABELS = {
  challenge: "The Challenge",
  solution: "Our Solution",
  features: "Key Features",
  featuresDescription: "Essential features that drive user engagement and value.",
  impact: "Results & Impact",
  impactDescription: "The measurable outcomes and positive impact achieved.",
  live: "§ Live",
  related: "§ Related Service",
  primaryCta: "Start Your Project",
  secondaryCta: "View More Cases",
  faqEyebrow: "§ FAQ",
  faqTitle: "Frequently Asked Questions",
  faqSubtitle: "Common questions about this project",
};

/** Ties the case back to the service it demonstrates, so the work reads as evidence. */
interface RelatedService {
  /** One sentence naming what kind of work this case is an example of. */
  statement: string;
  linkLabel: string;
  href: string;
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
  relatedService?: RelatedService;
  ctaTitle: string;
  ctaSubtitle: string;
  faqs?: { question: string; answer: string }[];
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
  relatedService,
  ctaTitle,
  ctaSubtitle,
  faqs,
}: CaseStudyLayoutProps) {
  const labels = LABELS;
  return (
    <div className="min-h-screen">
      <ServiceHero title={title} subtitle={subtitle} />

      <TwoColumnSection title={labels.challenge} content={challenge} />

      <TwoColumnSection title={labels.solution} content={solution} />

      <MinimalCardGrid
        title={labels.features}
        description={labels.featuresDescription}
        cards={keyFeatures}
        columns="3"
      />

      <ResultsImpactGrid
        title={labels.impact}
        description={labels.impactDescription}
        cards={impact}
      />

      {technologySection && (
        <TwoColumnSection
          title={technologySection.title}
          content={technologySection.content}
        />
      )}

      {projectLinks && projectLinks.length > 0 && (
        <section className="border-t border-border py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <div className="eyebrow mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-primary" />
              {labels.live}
              <span className="h-px w-10 bg-primary" />
            </div>
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

      {relatedService && (
        <section className="border-t border-border py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <div className="eyebrow mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-primary" />
              {labels.related}
              <span className="h-px w-10 bg-primary" />
            </div>
            <p className="font-display text-2xl md:text-3xl text-foreground leading-snug tracking-tight mb-8">
              {relatedService.statement}
            </p>
            <Link
              href={relatedService.href}
              className="link-draw font-mono text-xs uppercase tracking-[0.18em] text-primary"
            >
              {relatedService.linkLabel} →
            </Link>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <>
          <JsonLd data={faqPageSchema(faqs)} />
          <FAQSection
            eyebrow={labels.faqEyebrow}
            title={labels.faqTitle}
            subtitle={labels.faqSubtitle}
            faqs={faqs}
          />
        </>
      )}

      <FinalCTA
        title={ctaTitle}
        subtitle={ctaSubtitle}
        primaryCTA={{
          text: labels.primaryCta,
          href: routePath("contact"),
        }}
        secondaryCTA={{
          text: labels.secondaryCta,
          href: routePath("cases"),
        }}
      />
    </div>
  );
}
