import { CaseStudyLayout } from "@/components/ui/case-study-layout";
import { copy } from "@/lib/copy";

export default function TraiCasePage() {
  return (
    <CaseStudyLayout
      title={copy.casesTrai.hero.title}
      subtitle={copy.casesTrai.hero.subtitle}
      challenge={copy.casesTrai.challenge}
      solution={copy.casesTrai.solution}
      keyFeatures={copy.casesTrai.keyFeatures}
      impact={copy.casesTrai.impact}
      ctaTitle={copy.casesTrai.ctaTitle}
      ctaSubtitle={copy.casesTrai.ctaSubtitle}
    />
  );
}
