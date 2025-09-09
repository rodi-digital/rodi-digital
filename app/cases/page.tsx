import { ServiceHero } from "@/components/ui/service-hero";
import { ServiceGrid } from "@/components/ui/service-grid";
import { FinalCTA } from "@/components/ui/final-cta";
import { copy } from "@/lib/copy";

const cases = [
  copy.cases.peach,
  copy.cases.rodi,
  copy.cases.trai,
];

export default function CasesPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title={copy.cases.hero.title}
        subtitle={copy.cases.hero.subtitle}
      />

      <ServiceGrid services={cases.map((c) => ({ ...c, href: c.href }))} />

      <FinalCTA
        title={copy.cases.finalCta.title}
        subtitle={copy.cases.finalCta.subtitle}
        primaryCTA={copy.cases.finalCta.primaryCta}
        secondaryCTA={copy.cases.finalCta.secondaryCta}
      />
    </div>
  );
}
