import { H1, H2, H3 } from "@/components/ui/heading";

export default function CollaborationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <H1>Collaboration</H1>
        <p className="text-xl text-gray-600 mb-12">
          Your Partner in Digital Product Development
        </p>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8">
            At Rodi Digital, we believe that successful digital product
            development hinges on close, transparent, and continuous
            collaboration with our clients. We don't just build for you; we
            build <em>with</em> you, ensuring that every step of the journey is
            aligned with your vision and business objectives.
          </p>

          <H2>Our Collaborative Principles</H2>

          <div className="space-y-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <H3>Close Partnership</H3>
              <p className="text-gray-700">
                We integrate seamlessly with your team, acting as an extension
                of your organization. Your success is our success, and we are
                committed to a shared journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <H3>Frequent Updates & Live Demos</H3>
              <p className="text-gray-700">
                Transparency is key. We provide regular, frequent updates and
                conduct live demonstrations of our progress. This allows you to
                see your product evolve in real-time and provides opportunities
                for immediate feedback.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <H3>Continuous Synchronization</H3>
              <p className="text-gray-700">
                We prioritize frequent synchronization meetings to discuss and
                shape features collaboratively. This proactive approach ensures
                that what we build precisely matches your needs, preventing
                misalignments and rework.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <H3>Challenging Ideas for Optimal Outcomes</H3>
              <p className="text-gray-700">
                With extensive experience in building digital products, we're
                not afraid to challenge your ideas constructively. Our goal is
                to ensure the best possible outcome for your product, leveraging
                our expertise to refine concepts and explore innovative
                solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <H3>Shared Roadmap & Transparency</H3>
              <p className="text-gray-700">
                We maintain a shared roadmap that provides complete visibility
                into project progress, upcoming features, and strategic
                direction. This commitment to transparency ensures you are
                always informed and empowered to make decisions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <H3>Async Communication for Speed</H3>
              <p className="text-gray-700">
                To accelerate progress and maintain momentum, we utilize
                asynchronous communication methods, including small demos and
                video updates. This allows for quick feedback loops and
                efficient resolution of questions, without the need for constant
                synchronous meetings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <H3>Open Feedback Loop</H3>
              <p className="text-gray-700">
                Your feedback is invaluable. We foster an environment where open
                discussion and constructive criticism are encouraged, allowing
                us to adapt and refine our approach to best serve your evolving
                needs.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg">
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
