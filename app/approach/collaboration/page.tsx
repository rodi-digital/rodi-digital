import { ServiceHero } from "@/components/ui/service-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { FinalCTA } from "@/components/ui/final-cta";

const collaborativePrinciples = [
  {
    title: "Close partnership",
    description:
      "We embed ourselves into your team so progress feels seamless. Your success is our success.",
  },
  {
    title: "Frequent updates and live demos",
    description:
      "No more waiting months to see results. You get regular updates and live demos that show how your product is evolving, with room for feedback at every step.",
  },
  {
    title: "Continuous synchronization",
    description:
      "We hold short sync sessions to keep ideas moving in the right direction. This prevents misalignment and wasted effort.",
  },
  {
    title: "Open feedback loop",
    description:
      "Honest feedback is how good products become great. We encourage open conversations so we can adapt and refine quickly.",
  },
];

export default function CollaborationPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Collaboration"
        subtitle="Working with an agency can feel like handing over control and just hoping for the best. Deadlines slip, feedback gets lost, and you end up with something that is not quite what you imagined. We believe the only way to build the right product is to build it together with you."
      />
      
      <TwoColumnSection
        title="Building Together"
        content="Successful digital products are never built in isolation. They grow out of close teamwork, clear communication, and shared goals. We work side by side with your team so that every decision reflects your vision and supports your business objectives."
      />

      <MinimalCardGrid
        title="Our Collaborative Principles"
        description="Partnership means more than meetings and status updates. It means creating a rhythm of communication and feedback that keeps everyone aligned and confident."
        cards={collaborativePrinciples}
        columns="2"
      />

      <FinalCTA
        title="Ready to collaborate?"
        subtitle="Let's work as one team to create a product that truly fits your vision. With the right partnership, building becomes easier, faster, and more rewarding."
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View Our Approach", href: "/approach" }}
      />
    </div>
  );
}
