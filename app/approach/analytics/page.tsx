import { PageHeader } from "@/components/ui/page-header";
import { ContentCard } from "@/components/ui/content-card";
import { ProcessSteps } from "@/components/ui/process-steps";
import { StickyCards } from "@/components/ui/sticky-cards";
import { H2 } from "@/components/ui/heading";

const approachFeatures = [
  {
    title: "Continuous value creation",
    description:
      "We strive to be more than just a service provider; we aim to be a true digital partner. By continuously gathering data and sharing insights, we ensure ongoing value even beyond the initial build phase of a product.",
  },
  {
    title: "Data-backed recommendations",
    description:
      "Upselling valuable new features and improvements is crucial, but it must be done credibly. We provide better recommendations, backed by robust data, ensuring our suggestions carry weight and drive tangible improvements.",
  },
  {
    title: "Enhanced credibility and ROI",
    description:
      "Our high-quality, visually appealing products are designed to enhance your business. By demonstrating clear, positive ROI in our case studies, we strengthen our brand's credibility and appeal.",
  },
  {
    title: "Empowering every stakeholder",
    description:
      "Analytics is not just for decision-makers; it's for everyone involved in building a digital product. We provide insights tailored to different needs across business, product, technical, and design teams.",
  },
];

const implementationSteps = [
  {
    title: "Project Setup",
    description:
      "Analytics tools are set up and initialized during the initial project phase, ensuring tracking is in place from day one.",
  },
  {
    title: "During Development",
    description:
      "Every user interaction is tracked by default, with clear naming conventions to ensure easy discoverability and consistency.",
  },
  {
    title: "Launch",
    description:
      "Essential dashboards are created before launch, providing both internal learning and shareable insights for clients.",
  },
  {
    title: "Post-Launch Monitoring",
    description:
      "We conduct periodical check-ups and provide structured reports to our partners, focusing on KPIs and actionable insights.",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageHeader title="Analytics" subtitle="" />
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 mx-auto">
            We go beyond traditional dashboards, embedding analytics into every
            layer of product development to drive continuous growth and informed
            decision-making.
          </p>
        </div>

        <StickyCards minHeight={1000} cardContent={approachFeatures} />

        <ContentCard
          title="Our Implementation Plan"
          description="We believe in a 'better to get started than to be perfect' approach, allowing for continuous adjustments. Our process integrates analytics from the outset:"
          className="mb-12"
        >
          <ProcessSteps steps={implementationSteps} color="blue" />
        </ContentCard>
      </div>
    </div>
  );
}
