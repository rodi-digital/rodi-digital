import { H1, H2, H3 } from "@/components/ui/heading";

export default function CollaborationPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <H1>Collaboration: Your Digital Partner</H1>
        <p className="text-xl mb-12">
          We don’t just build for you; we build with you. Our collaborative
          approach ensures a seamless partnership throughout your digital
          product development journey.
        </p>
        <div className="prose prose-lg max-w-none">
          <p>
            At Rodi Digital, we believe that successful digital product
            development hinges on close, transparent, and continuous
            collaboration with our clients. We don't just build for you; we
            build <em>with</em> you, ensuring that every step of the journey is
            aligned with your vision and business objectives.
          </p>
          <H2>Our Collaborative Principles</H2>
          <div className="space-y-8 mb-12">
            <div className="p-6 rounded-lg">
              <H3>Close Partnership</H3>
              <p>
                We integrate seamlessly with your team, acting as an extension
                of your organization. Your success is our success, and we are
                committed to a shared journey.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <H3>Frequent Updates & Live Demos</H3>
              <p>
                Transparency is key. We provide regular, frequent updates and
                conduct live demonstrations of our progress. This allows you to
                see your product evolve in real-time and provides opportunities
                for immediate feedback.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <H3>Continuous Synchronization</H3>
              <p>
                We prioritize frequent synchronization meetings to discuss and
                shape features collaboratively. This proactive approach ensures
                that what we build precisely matches your needs, preventing
                misalignments and rework.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <H3>Open Feedback Loop</H3>
              <p>
                Your feedback is invaluable. We foster an environment where open
                discussion and constructive criticism are encouraged, allowing
                us to adapt and refine our approach to best serve your evolving
                needs.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-lg">
            <p className="text-lg">
              By embracing these collaborative principles, Rodi Digital ensures
              a partnership that is not only productive but also empowering,
              leading to digital products that truly resonate with your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
