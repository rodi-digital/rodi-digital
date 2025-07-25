import { H1, H2, H3 } from "@/components/ui/heading";
import { PageHeader } from "@/components/ui/page-header";
import { StickyCards } from "@/components/ui/sticky-cards";

export default function CollaborationPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageHeader title="Collaboration" subtitle="" />
        <p className="text-xl text-gray-600 mx-auto ">
          We don’t just build for you; we build with you. Our collaborative
          approach ensures a seamless partnership throughout your digital
          product development journey.
        </p>
        <div className="prose prose-lg max-w-none ">
          <p className="text-xl text-gray-600 mx-auto mb-12">
            At Rodi Digital, we believe that successful digital product
            development hinges on close, transparent, and continuous
            collaboration with our clients. We don't just build for you; we
            build <em>with</em> you, ensuring that every step of the journey is
            aligned with your vision and business objectives.
          </p>
          <H2>Our Collaborative Principles</H2>
          <StickyCards
            minHeight={1000}
            cardContent={[
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
            ]}
          />
        </div>
      </div>
    </div>
  );
}
