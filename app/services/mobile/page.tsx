import { ServiceHero } from "@/components/ui/service-hero";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { copy } from "@/lib/copy";

export default function MobilePage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title={copy.servicesMobile.hero.title}
        subtitle={copy.servicesMobile.hero.subtitle}
      />

      <MinimalCardGrid
        title={copy.servicesMobile.strengthsSection.title}
        description={copy.servicesMobile.strengthsSection.description}
        cards={copy.servicesMobile.strengthsSection.strengths}
        columns="2"
      />

      <MinimalListSection
        title={copy.servicesMobile.technologiesSection.title}
        description={copy.servicesMobile.technologiesSection.description}
        items={copy.servicesMobile.technologiesSection.technologies}
      />

      <FinalCTA
        title={copy.servicesMobile.finalCta.title}
        subtitle={copy.servicesMobile.finalCta.subtitle}
        primaryCTA={copy.servicesMobile.finalCta.primaryCta}
        secondaryCTA={copy.servicesMobile.finalCta.secondaryCta}
      />
    </div>
  );
}
