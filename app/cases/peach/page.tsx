import { CaseStudyLayout } from "@/components/ui/case-study-layout";
import { copy } from "@/lib/copy";

export default function PeachCasePage() {
  return (
    <CaseStudyLayout
      title={copy.casesPeach.hero.title}
      subtitle={copy.casesPeach.hero.subtitle}
      challenge={copy.casesPeach.challenge}
      solution={copy.casesPeach.solution}
      keyFeatures={copy.casesPeach.keyFeatures}
      impact={copy.casesPeach.impact}
      technologySection={copy.casesPeach.technologySection}
      ctaTitle={copy.casesPeach.ctaTitle}
      ctaSubtitle={copy.casesPeach.ctaSubtitle}
      projectLinks={copy.casesPeach.projectLinks}
    />
  );
}
