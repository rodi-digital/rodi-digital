import { ServiceHero } from "@/components/ui/service-hero";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { copy } from "@/lib/copy";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title={copy.approachAnalytics.hero.title}
        subtitle={copy.approachAnalytics.hero.subtitle}
      />
      
      <MinimalCardGrid
        title={copy.approachAnalytics.approachSection.title}
        description={copy.approachAnalytics.approachSection.description}
        cards={copy.approachAnalytics.approachSection.features}
        columns="2"
      />

      <MinimalListSection
        title={copy.approachAnalytics.implementationSection.title}
        description={copy.approachAnalytics.implementationSection.description}
        items={copy.approachAnalytics.implementationSection.steps}
      />

      <FinalCTA
        title={copy.approachAnalytics.finalCta.title}
        subtitle={copy.approachAnalytics.finalCta.subtitle}
        primaryCTA={copy.approachAnalytics.finalCta.primaryCta}
        secondaryCTA={copy.approachAnalytics.finalCta.secondaryCta}
      />
    </div>
  );
}
