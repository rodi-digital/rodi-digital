import { ServiceHero } from "@/components/ui/service-hero";
import { ServiceGrid } from "@/components/ui/service-grid";
import { FinalCTA } from "@/components/ui/final-cta";
import { copy } from "@/lib/copy";

const approaches = [
  copy.approach.analytics,
  copy.approach.collaboration,
];

export default function ApproachPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title={copy.approach.hero.title}
        subtitle={copy.approach.hero.subtitle}
      />

      <ServiceGrid services={approaches} />

      <FinalCTA
        title={copy.approach.finalCta.title}
        subtitle={copy.approach.finalCta.subtitle}
        primaryCTA={copy.approach.finalCta.primaryCta}
        secondaryCTA={copy.approach.finalCta.secondaryCta}
      />
    </div>
  );
}
