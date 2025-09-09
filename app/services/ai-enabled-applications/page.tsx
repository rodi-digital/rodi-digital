import { ServiceHero } from "@/components/ui/service-hero";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { copy } from "@/lib/copy";

export default function AIPoweredApplicationsPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title={copy.servicesAiEnabledApplications.hero.title}
        subtitle={copy.servicesAiEnabledApplications.hero.subtitle}
      />

      <MinimalCardGrid
        title={copy.servicesAiEnabledApplications.powerOfAiSection.title}
        description={copy.servicesAiEnabledApplications.powerOfAiSection.description}
        cards={copy.servicesAiEnabledApplications.powerOfAiSection.features}
        columns="3"
      />

      <MinimalListSection
        title={copy.servicesAiEnabledApplications.expertiseSection.title}
        description={copy.servicesAiEnabledApplications.expertiseSection.description}
        items={copy.servicesAiEnabledApplications.expertiseSection.expertiseAreas}
      />

      <FinalCTA
        title={copy.servicesAiEnabledApplications.finalCta.title}
        subtitle={copy.servicesAiEnabledApplications.finalCta.subtitle}
        primaryCTA={copy.servicesAiEnabledApplications.finalCta.primaryCta}
        secondaryCTA={copy.servicesAiEnabledApplications.finalCta.secondaryCta}
      />
    </div>
  );
}
