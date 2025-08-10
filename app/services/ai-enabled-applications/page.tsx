import { ServiceHero } from "@/components/ui/service-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";

const expertiseCards = [
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
    title: "AI-Powered Automation Workflows",
    description:
      "Designing and implementing intelligent workflows that streamline operations and improve efficiency.",
  },
];

const llmBackedApplicationsCards = [
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
    <div className="min-h-screen">
      <ServiceHero
        title="AI-Enabled Applications"
        subtitle="Harness the transformative power of Large Language Models to unlock new possibilities, intelligent automation, and advanced insights for your business."
      />
      
      <TwoColumnSection
        title="Redefining What's Possible"
        content="At Rodi Digital, we harness the transformative power of Artificial Intelligence to build applications that redefine what's possible. Our expertise lies in developing AI-enabled applications, particularly those leveraging Large Language Models (LLMs) on the backend, to unlock functionalities and insights far beyond traditional systems."
        primaryCTA={{ text: "Start Your AI Project", href: "/contact" }}
        secondaryCTA={{ text: "View Case Studies", href: "/cases" }}
      />
      
      <MinimalCardGrid
        title="The Power of LLM-Backed Applications"
        description="Integrating LLMs into your applications provides a paradigm shift in functionality and user experience. This approach enables:"
        cards={llmBackedApplicationsCards}
        columns="3"
      />
      
      <MinimalListSection
        title="Our Expertise"
        description="We specialize in developing custom AI solutions tailored to your specific business needs, including:"
        items={expertiseCards}
      />
      
      <FinalCTA
        title="Ready to Transform Your Business?"
        subtitle="Partner with Rodi Digital to build intelligent, high-performing AI-enabled applications that drive innovation and deliver significant business value."
        primaryCTA={{ text: "Get Started Today", href: "/contact" }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
      />
    </div>
  );
}
