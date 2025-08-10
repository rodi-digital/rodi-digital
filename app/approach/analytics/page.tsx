import { PageHeader } from "@/components/ui/page-header";
import { ContentCard } from "@/components/ui/content-card";
import { ProcessSteps } from "@/components/ui/process-steps";
import { StickyCards } from "@/components/ui/sticky-cards";

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
    title: "Start with Insights",
    description:
      "From day one, tracking is in placee, ensuring no blind spots and enabling immediate visibility into user behavior. For every iteration, we decide what to measure and how to track.",
  },
  {
    title: "Built-In Measurement",
    description:
      "Every feature we build includes an analytics strategy. Ensuring that key interactions are tracked with purpose, using consistent and meaningful naming for easy analysis and continuous learning.",
  },
  {
    title: "Launch with confidence",
    description:
      "At launch, every key flow and feature is fully tracked providing real-time visibility into usage, friction points, and early growth signals via actionable dashboards.",
  },
  {
    title: "Stay Data-Driven",
    description:
      "Post-launch, we monitor key trends and user behavior, providing structured reports and insights that help drive informed decisions, optimizations, and long-term growth.",
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
          <ProcessSteps steps={implementationSteps} />
        </ContentCard>
      </div>
    </div>
  );
}
