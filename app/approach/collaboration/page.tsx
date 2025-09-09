import { ServiceHero } from "@/components/ui/service-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { FinalCTA } from "@/components/ui/final-cta";
import { copy } from "@/lib/copy";

export default function CollaborationPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title={copy.approachCollaboration.hero.title}
        subtitle={copy.approachCollaboration.hero.subtitle}
      />
      
      <TwoColumnSection
        title={copy.approachCollaboration.buildingTogether.title}
        content={copy.approachCollaboration.buildingTogether.content}
      />

      <MinimalCardGrid
        title={copy.approachCollaboration.principlesSection.title}
        description={copy.approachCollaboration.principlesSection.description}
        cards={copy.approachCollaboration.principlesSection.principles}
        columns="2"
      />

      <FinalCTA
        title={copy.approachCollaboration.finalCta.title}
        subtitle={copy.approachCollaboration.finalCta.subtitle}
        primaryCTA={copy.approachCollaboration.finalCta.primaryCta}
        secondaryCTA={copy.approachCollaboration.finalCta.secondaryCta}
      />
    </div>
  );
}
