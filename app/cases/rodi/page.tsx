import { CaseStudyLayout } from "@/components/ui/case-study-layout";
import { copy } from "@/lib/copy";

export default function RodiCasePage() {
  return (
    <CaseStudyLayout
      title={copy.casesRodi.hero.title}
      subtitle={copy.casesRodi.hero.subtitle}
      challenge={copy.casesRodi.challenge}
      solution={copy.casesRodi.solution}
      keyFeatures={copy.casesRodi.keyFeatures}
      impact={copy.casesRodi.impact}
      technologySection={copy.casesRodi.technologySection}
      ctaTitle={copy.casesRodi.ctaTitle}
      ctaSubtitle={copy.casesRodi.ctaSubtitle}
      projectLinks={copy.casesRodi.projectLinks}
    />
  );
}
