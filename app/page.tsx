import { HomeHero } from "@/components/ui/home-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { DetailedServicesGrid } from "@/components/ui/detailed-services-grid";
import { copy } from "@/lib/copy";

const services = [
  copy.home.services.aiPowered,
  copy.home.services.mobile,
  copy.home.services.web,
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HomeHero
        title={copy.home.hero.title}
        subtitle={[copy.home.hero.subtitle]}
        ctaText={copy.home.hero.ctaText}
        ctaHref="/contact"
      />

      <DetailedServicesGrid
        title={copy.home.services.title}
        subtitle={copy.home.services.subtitle}
        services={services}
      />

      <TwoColumnSection
        title={copy.home.dataDrivern.title}
        content={copy.home.dataDrivern.content}
        primaryCTA={copy.home.dataDrivern.primaryCta}
        secondaryCTA={copy.home.dataDrivern.secondaryCta}
      />

      <FinalCTA
        title={copy.home.finalCta.title}
        subtitle={copy.home.finalCta.subtitle}
        primaryCTA={copy.home.finalCta.primaryCta}
        secondaryCTA={copy.home.finalCta.secondaryCta}
      />
    </div>
  );
}
