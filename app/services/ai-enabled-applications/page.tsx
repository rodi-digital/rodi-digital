import { PageHeader } from "@/components/ui/page-header";
import { H2, H3 } from "@/components/ui/heading";
import { StickyCards, StickyCard } from "@/components/ui/sticky-cards";

const expertiseCards: StickyCard[] = [
  {
    title: "Custom LLM Integration",
    description:
      "Seamlessly integrating state-of-the-art LLMs into your existing or new applications.",
  },
  {
    title: "Natural Language Processing (NLP)",
    description:
      "Building applications that understand, interpret, and generate human language for tasks like sentiment analysis, text summarization, and chatbots.",
  },
  {
    title: "Machine Learning (ML) Integration",
    description:
      "Developing and deploying custom machine learning models for predictive analytics, pattern recognition, and data classification.",
  },
  {
    title: "AI-Powered Automation Workflows",
    description:
      "Designing and implementing intelligent workflows that streamline operations and improve efficiency.",
  },
];

const llmBackedApplicationsCards: StickyCard[] = [
  {
    title: "Intelligent Automation",
    description:
      "Automate complex tasks that require understanding, reasoning, and natural language processing, such as customer support, content generation, data analysis, and personalized recommendations.",
  },
  {
    title: "Enhanced User Interaction",
    description:
      "Create highly intuitive and responsive interfaces that understand and respond to natural language queries, offering a more human-like interaction experience.",
  },
  {
    title: "Dynamic Content Generation",
    description:
      "Generate diverse and contextually relevant content on the fly, from marketing copy and reports to personalized user experiences.",
  },
  {
    title: "Advanced Data Insights",
    description:
      "Process and derive insights from unstructured data, identifying patterns, trends, and anomalies that would be impossible with conventional methods.",
  },
  {
    title: "Personalization at Scale",
    description:
      "Deliver highly personalized experiences to individual users, adapting content, recommendations, and interactions based on their unique preferences and behaviors.",
  },
  {
    title: "Problem Solving & Decision Support",
    description:
      "Develop applications that can analyze complex scenarios, provide informed recommendations, and assist in critical decision-making processes.",
  },
];

export default function AIEnabledApplicationsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageHeader
          title="AI-Enabled Applications"
          description="Harness the transformative power of Large Language Models (LLMs) to unlock new possibilities, intelligent automation, and advanced insights for your business."
        />
        <section>
          <p>
            At Rodi Digital, we harness the transformative power of Artificial
            Intelligence to build applications that redefine what's possible.
            Our expertise lies in developing AI-enabled applications,
            particularly those leveraging Large Language Models (LLMs) on the
            backend, to unlock functionalities and insights far beyond
            traditional systems.
          </p>
        </section>
        <section>
          <H2>The Power of LLM-Backed Applications</H2>
          <p>
            Integrating LLMs into your applications provides a paradigm shift in
            functionality and user experience. This approach enables:
          </p>
          <StickyCards
            minHeight={1800}
            cardContent={llmBackedApplicationsCards}
          />
        </section>
        <section>
          <div>
            <H3>Future-Proofing Your Business</H3>
            <p>
              Stay ahead of the curve by integrating cutting-edge AI
              capabilities that can adapt and evolve with emerging technologies
              and market demands.
            </p>
          </div>
        </section>
        <section>
          <H2>Our Expertise</H2>
          <p>
            We specialize in developing custom AI solutions tailored to your
            specific business needs, including:
          </p>
          <StickyCards minHeight={1200} cardContent={expertiseCards} />
        </section>
        <section>
          <p>
            By partnering with Rodi Digital, you gain access to the expertise
            needed to transform your ideas into intelligent, high-performing
            AI-enabled applications that drive innovation and deliver
            significant business value.
          </p>
        </section>
        <section className="mt-12">
          <H2>Ready to Transform Your Business?</H2>
          <p>
            Partner with Rodi Digital to build intelligent, high-performing
            AI-enabled applications.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
}
