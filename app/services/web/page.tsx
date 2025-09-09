import { ServiceHero } from "@/components/ui/service-hero";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { copy } from "@/lib/copy";

export default function WebPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title={copy.servicesWeb.hero.title}
        subtitle={copy.servicesWeb.hero.subtitle}
      />

      <MinimalCardGrid
        title={copy.servicesWeb.expertiseSection.title}
        description={copy.servicesWeb.expertiseSection.description}
        cards={copy.servicesWeb.expertiseSection.expertiseAreas}
        columns="2"
      />

      <MinimalListSection
        title={copy.servicesWeb.processSection.title}
        description={copy.servicesWeb.processSection.description}
        items={copy.servicesWeb.processSection.steps}
      />

      <FinalCTA
        title={copy.servicesWeb.finalCta.title}
        subtitle={copy.servicesWeb.finalCta.subtitle}
        primaryCTA={copy.servicesWeb.finalCta.primaryCta}
        secondaryCTA={copy.servicesWeb.finalCta.secondaryCta}
      />
    </div>
  );
}
