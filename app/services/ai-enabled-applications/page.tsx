import { ServiceHero } from "@/components/ui/service-hero";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { FAQSection } from "@/components/ui/faq-section";
import { JsonLd } from "@/components/ui/json-ld";
import {
  pageMetadata,
  faqPageSchema,
  serviceSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI-Powered Applications & LLM Development",
  description:
    "Custom AI-powered applications, LLM integrations, conversational agents, and intelligent search built by Rodi Digital to automate work and improve customer experience.",
  path: "/services/ai-enabled-applications",
  keywords: [
    "AI application development",
    "LLM integration",
    "AI chatbots",
    "conversational AI",
    "AI automation",
    "AI-powered search",
  ],
});

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

const aiFAQs = [
  {
    question: "What are AI-powered applications?",
    answer:
      "AI-powered applications are software solutions enhanced with artificial intelligence to perform tasks that normally require human intelligence. These apps can learn from data, make smart decisions, and automate complex tasks. For example, an AI application might handle repetitive work, answer customer questions via a chatbot, or sift through large documents to find answers instantly – all of which frees up your team to focus on more important work. In short, AI-powered applications use technologies like machine learning and natural language processing to make software more intelligent and helpful.",
  },
  {
    question: "How can AI-powered applications benefit my business?",
    answer:
      "AI-powered applications can have a transformative impact on your business. They automate tedious and time-consuming tasks, allowing your employees to be more productive. They also improve customer experiences – for instance, an AI chatbot can provide quick, 24/7 support, and an AI-based search tool can help users find information in seconds. Additionally, these applications can analyze large amounts of data to uncover patterns and actionable insights (trends, customer behavior, opportunities) that you might miss otherwise. Overall, by deploying AI solutions, businesses can save time, reduce errors, personalize services at scale, and make more informed decisions driven by data.",
  },
  {
    question: "What AI solutions does Rodi Digital specialize in?",
    answer:
      "Rodi Digital specializes in several key AI solution areas. One major area is conversational agents, meaning they build chatbots and virtual assistants that actually understand user queries and provide helpful responses (far more useful than the typical bot). They also focus on smart automation of workflows – using AI to handle repetitive tasks like ticket processing or document analysis without human intervention. Another specialty is AI-powered search, which enables users to search through documents or data using natural language and get precise answers instantly. Additionally, Rodi Digital develops customer support intelligence tools that can automatically resolve simple support requests and assist human agents with better context. They even implement personalization at scale, using AI to tailor content or recommendations to each individual user automatically. In essence, if it's an AI-driven solution – from chatbots and automation to intelligent search and personalization – Rodi Digital has the expertise to build it.",
  },
  {
    question: "How does Rodi Digital integrate AI into existing systems?",
    answer:
      "Rodi Digital can embed advanced AI models directly into your existing systems to make the integration seamless. For example, they offer custom LLM (Large Language Model) integration, which means if your business could benefit from GPT-like language understanding, they will integrate that AI into your app or platform in a way that feels native to your users. They also use natural language processing (NLP) to help your software understand and analyze text – this can enable features like text summarization, sentiment analysis, or intelligent document search within your system. The goal is that the AI features feel like a natural part of your workflow rather than a bolted-on extra. Rodi Digital designs these integrations so that your team and customers enjoy a smoother experience enhanced by AI, without needing to jump between separate tools or suffer clunky workarounds.",
  },
  {
    question: "How do AI-powered applications improve customer support?",
    answer:
      "AI-powered applications can dramatically improve customer support by making it more responsive and efficient. For instance, AI chatbots can handle common inquiries instantly, giving customers quick answers at any hour. Rodi Digital also implements customer support intelligence systems that automatically resolve simple support cases and equip your human support agents with better context for complex issues. This means customers get solutions faster, and support staff can focus on the tougher problems with all the relevant information at hand. The end result is faster issue resolution, higher customer satisfaction, and a support team that isn't overwhelmed by repetitive questions.",
  },
];

export default function AIPoweredApplicationsPage() {
  return (
    <div className="min-h-screen">
      <JsonLd
        data={[
          serviceSchema({
            name: "AI-Powered Applications",
            description:
              "Custom AI-powered applications, LLM integrations, conversational agents, intelligent search, and process automation.",
            path: "/services/ai-enabled-applications",
            category: "AI Development",
          }),
          faqPageSchema(aiFAQs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "AI-Powered Applications", path: "/services/ai-enabled-applications" },
          ]),
        ]}
      />
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

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about AI-powered applications"
        faqs={aiFAQs}
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
