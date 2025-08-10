import { ServiceHero } from "@/components/ui/service-hero";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";

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
      "From day one, tracking is in place, ensuring no blind spots and enabling immediate visibility into user behavior. For every iteration, we decide what to measure and how to track.",
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
    <div className="min-h-screen">
      <ServiceHero
        title="Analytics"
        subtitle="We go beyond traditional dashboards, embedding analytics into every layer of product development to drive continuous growth and informed decision-making."
      />
      
      <MinimalCardGrid
        title="Our Analytics Approach"
        description="We believe in data-driven product development that creates lasting value for all stakeholders."
        cards={approachFeatures}
        columns="2"
      />

      <MinimalListSection
        title="Our Implementation Plan"
        description="We believe in a 'better to get started than to be perfect' approach, allowing for continuous adjustments. Our process integrates analytics from the outset:"
        items={implementationSteps}
      />

      <FinalCTA
        title="Ready to Build Data-Driven Products?"
        subtitle="Let's integrate analytics into every layer of your product development to drive continuous growth and informed decision-making."
        primaryCTA={{ text: "Get Started Today", href: "/contact" }}
        secondaryCTA={{ text: "View Our Approach", href: "/approach" }}
      />
    </div>
  );
}
