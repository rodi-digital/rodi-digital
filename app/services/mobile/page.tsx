import { ServiceHero } from "@/components/ui/service-hero";
import { CenteredContentSection } from "@/components/ui/centered-content-section";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";

const strengthsCards = [
  {
    title: "Cross-platform coverage",
    description:
      "One codebase for iOS and Android. Reach your full audience faster and keep maintenance simple.",
  },
  {
    title: "MVP that learns",
    description:
      "Ship a focused first version, measure what users do, and invest only in features that prove their value.",
  },
  {
    title: "Push notifications done right",
    description:
      "Send timely, relevant messages that bring users back without annoying them. Drive retention with intent, not volume.",
  },
  {
    title: "Data-driven iteration",
    description:
      "Tracking is built in from the start. Every update is guided by real behavior, not guesswork.",
  },
  {
    title: "Agile solo delivery",
    description:
      "Work directly with the builder. Clear communication, fast turnarounds, and a product that fits your needs.",
  },
  {
    title: "Fast time to market",
    description:
      "Short cycles, clean scope, and a clear plan. Launch sooner, learn sooner, grow sooner.",
  },
];

const technologiesCards = [
  {
    title: "React Native and Expo",
    description:
      "Native performance with a single codebase, quick builds, and smooth updates over the air.",
  },
  {
    title: "Analytics integration",
    description:
      "Instrumentation from day one with Firebase, Mixpanel, or a custom setup. Track key flows, retention, and engagement so you know what to improve next.",
  },
];

export default function MobilePage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Mobile Development"
        subtitle="Building an app should not take forever or blow your budget. You want something people can actually use, on iOS and Android, without guessing which features matter. We help you launch fast, learn from real users, and improve with confidence."
      />
      
      <CenteredContentSection
        content="Great apps are simple to ship and easy to improve. Cross-platform from day one, with built-in analytics that guide every decision."
        cta={{ text: "Let's Build Something Together", href: "/contact" }}
      />
      
      <MinimalCardGrid
        title="Our Mobile Development Strengths"
        description="You need momentum, not meetings. Here is how we keep your app moving forward."
        cards={strengthsCards}
        columns="2"
      />
      
      <MinimalListSection
        title="Technologies We Use"
        description="Proven tools that help you move fast and stay flexible."
        items={technologiesCards}
      />
      
      <FinalCTA
        title="Ready to turn your idea into reality?"
        subtitle="Whether you want to validate a new concept or scale a mature product, we will help you launch fast and improve with data."
        primaryCTA={{ text: "Let's Build Something Together", href: "/contact" }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
      />
    </div>
  );
}
