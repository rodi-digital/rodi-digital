import { ServiceHero } from "@/components/ui/service-hero";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";

const approachFeatures = [
  {
    title: "Continuous value creation",
    description:
      "Building the product is just the start. We keep tracking and sharing insights so you see value long after launch.",
  },
  {
    title: "Data-backed recommendations",
    description:
      "Tired of being told to just add more features? We only suggest improvements when the numbers prove they will make a difference.",
  },
  {
    title: "Enhanced credibility and ROI",
    description:
      "Your product should look great and pay for itself. We focus on results that clearly show a return on investment, not just pretty screens.",
  },
  {
    title: "Empowering every stakeholder",
    description:
      "Analytics is not just for managers. Designers, developers, and product teams all get insights that help them do better work.",
  },
];

const implementationSteps = [
  {
    title: "Start with insights",
    description:
      "From day one we track what matters, so you are never left guessing about user behavior.",
  },
  {
    title: "Built-in measurement",
    description:
      "Every feature includes meaningful tracking with clear names and purpose. No more messy data that is hard to use.",
  },
  {
    title: "Launch with confidence",
    description:
      "By the time you go live, every key flow is monitored. You see instantly how people are using your product.",
  },
  {
    title: "Stay data-driven",
    description:
      "After launch we keep an eye on trends and share simple reports that guide smarter decisions and steady growth.",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Analytics"
        subtitle="Ever launched a product and had no idea what people were actually doing inside it? You're not alone. Guessing what works and what doesn't wastes time and money. We make analytics part of the product itself, so you always know what's really happening."
      />
      
      <MinimalCardGrid
        title="Our Analytics Approach"
        description="Data should not hide in reports that nobody reads. It should guide every decision, help your product grow, and make life easier for the whole team."
        cards={approachFeatures}
        columns="2"
      />

      <MinimalListSection
        title="Our Implementation Plan"
        description="Getting analytics right should not slow you down. We believe it is better to get started quickly and improve as we go."
        items={implementationSteps}
      />

      <FinalCTA
        title="Ready to build data-driven products?"
        subtitle="No more guessing. No more blind spots. Let's make analytics part of your product from the start, so every decision is made with clarity and confidence."
        primaryCTA={{ text: "Get Started Today", href: "/contact" }}
        secondaryCTA={{ text: "View Our Approach", href: "/approach" }}
      />
    </div>
  );
}
