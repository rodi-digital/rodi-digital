import { ServiceHero } from "@/components/ui/service-hero";
import { ServiceGrid } from "@/components/ui/service-grid";
import { FinalCTA } from "@/components/ui/final-cta";
import { copy } from "@/lib/copy";

const services = [
  copy.services.aiPowered,
  copy.services.mobile,
  copy.services.web,
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title={copy.services.hero.title}
        subtitle={copy.services.hero.subtitle}
      />

      <ServiceGrid services={services} />

      <FinalCTA
        title={copy.services.finalCta.title}
        subtitle={copy.services.finalCta.subtitle}
        primaryCTA={copy.services.finalCta.primaryCta}
        secondaryCTA={copy.services.finalCta.secondaryCta}
      />
    </div>
  );
}
