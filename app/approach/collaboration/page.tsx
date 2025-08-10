import { ServiceHero } from "@/components/ui/service-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { FinalCTA } from "@/components/ui/final-cta";

const collaborativePrinciples = [
  {
    title: "Close Partnership",
    description:
      "We integrate seamlessly with your team, acting as an extension of your organization. Your success is our success, and we are committed to a shared journey.",
  },
  {
    title: "Frequent Updates & Live Demos",
    description:
      "Transparency is key. We provide regular, frequent updates and conduct live demonstrations of our progress. This allows you to see your product evolve in real-time and provides opportunities for immediate feedback.",
  },
  {
    title: "Continuous Synchronization",
    description:
      "We prioritize frequent synchronization meetings to discuss and shape features collaboratively. This proactive approach ensures that what we build precisely matches your needs, preventing misalignments and rework.",
  },
  {
    title: "Open Feedback Loop",
    description:
      "Your feedback is invaluable. We foster an environment where open discussion and constructive criticism are encouraged, allowing us to adapt and refine our approach to best serve your evolving needs.",
  },
];

export default function CollaborationPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Collaboration"
        subtitle="We don't just build for you; we build with you. Our collaborative approach ensures a seamless partnership throughout your digital product development journey."
      />
      
      <TwoColumnSection
        title="Building Together"
        content="At Rodi Digital, we believe that successful digital product development hinges on close, transparent, and continuous collaboration with our clients. We don't just build for you; we build with you, ensuring that every step of the journey is aligned with your vision and business objectives."
      />

      <MinimalCardGrid
        title="Our Collaborative Principles"
        description="We foster an environment of transparency, continuous communication, and shared success."
        cards={collaborativePrinciples}
        columns="2"
      />

      <FinalCTA
        title="Ready to Collaborate?"
        subtitle="Experience the power of true partnership in digital product development. Let's build something amazing together."
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View Our Approach", href: "/approach" }}
      />
    </div>
  );
}
