import { ServiceHero } from "@/components/ui/service-hero";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";

const expertiseCards = [
  {
    title: "Custom LLM integration",
    description:
      "We embed the latest language models directly into your systems so they feel seamless. This removes clunky workarounds and gives your team and customers a smoother experience.",
  },
  {
    title: "Natural language processing",
    description:
      "We help your applications understand text, summarize information, and detect sentiment. That means quicker decisions and less manual effort spent sifting through content.",
  },
  {
    title: "AI-powered automation workflows",
    description:
      "From handling tickets to analyzing documents, we automate repetitive tasks with intelligence built in. Your team saves time and can focus on high-value work.",
  },
  {
    title: "AI-powered search",
    description:
      "No more endless digging through documents. Our AI search understands context and delivers the right answers instantly.",
  },
  {
    title: "Customer support intelligence",
    description:
      "We streamline support by handling simple cases automatically and giving agents better context for complex ones. This speeds up resolutions and keeps customers happy.",
  },
];

const llmBackedApplicationsCards = [
  {
    title: "Conversational agents",
    description:
      "Finally, chatbots that actually understand and help your customers.",
  },
  {
    title: "Smart automations",
    description:
      "Free your team from repetitive manual processes so they can focus on higher-value work.",
  },
  {
    title: "AI-powered search",
    description:
      "No more endless document digging. Find the right answers instantly.",
  },
  {
    title: "Customer support intelligence",
    description:
      "Resolve issues faster and give your support team time back for what really matters.",
  },
  {
    title: "Personalization at scale",
    description:
      "Adapt content and recommendations to each individual user automatically.",
  },
  {
    title: "Actionable insights",
    description:
      "Spot patterns, trends, and growth opportunities hidden in your data.",
  },
];

export default function AIPoweredApplicationsPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="AI-Powered Applications"
        subtitle="Your team is buried in repetitive tasks, customers get stuck with unhelpful chatbots, and finding answers in endless documents takes forever. We build AI-powered applications that actually solve these problems, freeing your people to focus on what matters most."
      />

      <MinimalCardGrid
        title="The Power of AI in Action"
        description="Here's how AI transforms everyday work into something smarter and easier:"
        cards={llmBackedApplicationsCards}
        columns="3"
      />

      <MinimalListSection
        title="Our Expertise"
        description="Most teams know AI could help but don't know where to start. We build custom applications around your business, not the other way around. Every tool is designed to fit naturally into your workflows and deliver measurable results."
        items={expertiseCards}
      />

      <FinalCTA
        title="Ready to turn your idea into reality?"
        subtitle="Let's build AI-powered applications that make life easier for your team and your customers, while driving real business growth."
        primaryCTA={{
          text: "Let's Build Something Together",
          href: "/contact",
        }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
      />
    </div>
  );
}
