import { H1, H2, H3 } from "@/components/ui/heading";

export default function AIEnabledApplicationsPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <H1>AI-Enabled Applications</H1>
        <p className="text-xl mb-12">
          Harness the transformative power of Large Language Models (LLMs) to
          unlock new possibilities, intelligent automation, and advanced
          insights for your business.
        </p>
        <div className="prose prose-lg max-w-none">
          <p>
            At Rodi Digital, we harness the transformative power of Artificial
            Intelligence to build applications that redefine what's possible.
            Our expertise lies in developing AI-enabled applications,
            particularly those leveraging Large Language Models (LLMs) on the
            backend, to unlock functionalities and insights far beyond
            traditional systems.
          </p>
          <H2>The Power of LLM-Backed Applications</H2>
          <p>
            Integrating LLMs into your applications provides a paradigm shift in
            functionality and user experience. This approach enables:
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <H3>Intelligent Automation</H3>
              <p className="text-gray-700">
                Automate complex tasks that require understanding, reasoning,
                and natural language processing, such as customer support,
                content generation, data analysis, and personalized
                recommendations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <H3>Enhanced User Interaction</H3>
              <p className="text-gray-700">
                Create highly intuitive and responsive interfaces that
                understand and respond to natural language queries, offering a
                more human-like interaction experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <H3>Dynamic Content Generation</H3>
              <p className="text-gray-700">
                Generate diverse and contextually relevant content on the fly,
                from marketing copy and reports to personalized user
                experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <H3>Advanced Data Insights</H3>
              <p className="text-gray-700">
                Process and derive insights from unstructured data, identifying
                patterns, trends, and anomalies that would be impossible with
                conventional methods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <H3>Personalization at Scale</H3>
              <p className="text-gray-700">
                Deliver highly personalized experiences to individual users,
                adapting content, recommendations, and interactions based on
                their unique preferences and behaviors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <H3>Problem Solving & Decision Support</H3>
              <p className="text-gray-700">
                Develop applications that can analyze complex scenarios, provide
                informed recommendations, and assist in critical decision-making
                processes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg mb-12">
            <H3 className="text-2xl font-bold mb-4">
              Future-Proofing Your Business
            </H3>
            <p className="text-lg">
              Stay ahead of the curve by integrating cutting-edge AI
              capabilities that can adapt and evolve with emerging technologies
              and market demands.
            </p>
          </div>

          <H2>Our Expertise</H2>

          <p className="text-gray-700 mb-6">
            We specialize in developing custom AI solutions tailored to your
            specific business needs, including:
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <H3>Custom LLM Integration</H3>
              <p className="text-gray-700">
                Seamlessly integrating state-of-the-art LLMs into your existing
                or new applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <H3>Natural Language Processing (NLP)</H3>
              <p className="text-gray-700">
                Building applications that understand, interpret, and generate
                human language for tasks like sentiment analysis, text
                summarization, and chatbots.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <H3>Machine Learning (ML) Integration</H3>
              <p className="text-gray-700">
                Developing and deploying custom machine learning models for
                predictive analytics, pattern recognition, and data
                classification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <H3>AI-Powered Automation Workflows</H3>
              <p className="text-gray-700">
                Designing and implementing intelligent workflows that streamline
                operations and improve efficiency.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
            <p className="text-lg text-gray-800">
              By partnering with Rodi Digital, you gain access to the expertise
              needed to transform your ideas into intelligent, high-performing
              AI-enabled applications that drive innovation and deliver
              significant business value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
