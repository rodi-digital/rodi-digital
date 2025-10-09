import { ServiceHero } from "@/components/ui/service-hero";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { FAQSection } from "@/components/ui/faq-section";

const approachFeatures = [
  {
    title: "Continuous value creation",
    description:
      "Building the product is just the start. We keep tracking and sharing insights so you see value long after launch.",
  },
  {
    title: "Data-backed recommendations",
    description:
      "Tired of being told to just add more features? We only suggest improvements when the numbers prove they will make a difference.",
  },
  {
    title: "Enhanced credibility and ROI",
    description:
      "Your product should look great and pay for itself. We focus on results that clearly show a return on investment, not just pretty screens.",
  },
  {
    title: "Empowering every stakeholder",
    description:
      "Analytics is not just for managers. Designers, developers, and product teams all get insights that help them do better work.",
  },
];

const implementationSteps = [
  {
    title: "Start with insights",
    description:
      "From day one we track what matters, so you are never left guessing about user behavior.",
  },
  {
    title: "Built-in measurement",
    description:
      "Every feature includes meaningful tracking with clear names and purpose. No more messy data that is hard to use.",
  },
  {
    title: "Launch with confidence",
    description:
      "By the time you go live, every key flow is monitored. You see instantly how people are using your product.",
  },
  {
    title: "Stay data-driven",
    description:
      "After launch we keep an eye on trends and share simple reports that guide smarter decisions and steady growth.",
  },
];

const analyticsFAQs = [
  {
    question: "Why make analytics part of a product's development?",
    answer:
      "Making analytics part of development is crucial to eliminate guesswork after launch. Many companies launch a product and then realize they have no idea how users are actually using it. Rodi Digital prevents this by integrating analytics tracking from the very beginning. By doing so, you always know what's really happening inside your app or website – which features are used, where users drop off, etc. This means every decision, both during development and post-launch, can be informed by real user behavior. In short, embedding analytics ensures you're not flying blind; you can measure what works and quickly identify what doesn't, leading to a smarter product and better ROI.",
  },
  {
    question: "How does Rodi Digital implement analytics during development?",
    answer:
      "Rodi Digital follows a proactive plan to weave analytics into the development process without slowing it down. First, they start tracking insights from day one – as soon as there's a testable feature, they instrument it to gather relevant data. This could include user actions, performance metrics, or conversion events, depending on the product. Second, they practice built-in measurement: every new feature comes with its own analytics checkpoints (with clear naming and purpose) so nothing important goes unmeasured. By the time you launch, every key user flow is already being monitored, giving you confidence that you'll understand user behavior from the get-go. After launch, Rodi Digital doesn't stop - they stay data-driven, continuously watching trends and usage patterns. They share simple, focused reports that highlight what users are doing and any emerging opportunities or issues. This implementation plan means you get immediate feedback on your product and can iterate quickly based on evidence, all without a lengthy analytics setup phase delaying the project.",
  },
  {
    question: "What benefits do continuous analytics provide to a project?",
    answer:
      "Continuous analytics provide numerous benefits throughout a project's life cycle. One key benefit is continuous value creation – even after the initial build, analytics help identify where your product can keep improving, thereby delivering ongoing value to your business. Another benefit is data-backed recommendations: instead of guessing which new feature or change will help, you can rely on the numbers. Rodi Digital will only suggest improvements when data shows they will make a real difference. This means your investment is directed to things that have proven impact, enhancing the credibility and ROI of the project. Continuous analytics also empower every member of the team (designers, developers, product managers) with insights to do better work, ensuring everyone is aligned on what users need. Over time, this data-driven vigilance leads to a product that stays competitive, as you're regularly tuning the experience based on actual user feedback loops. In essence, continuous analytics turn your product development into a living, learning process rather than a one-and-done effort.",
  },
  {
    question: "How do analytics help all stakeholders in a project?",
    answer:
      "Rodi Digital makes sure analytics insights are shared with all stakeholders, not just a technical team or management. This means designers can see which UI elements users engage with, developers can identify performance pain points, and product teams can watch feature adoption in real time. By empowering every stakeholder with data, better decisions are made at all levels. For example, a designer might use analytics to simplify a page if data shows users are confused, or a marketing team might adjust strategies based on which features users love most. Analytics essentially become a common language for the team – everyone from the CEO to the developers can use concrete numbers to discuss what's happening. This shared visibility fosters transparency and a unified direction, as all team members are working off the same evidence of what users want and how the product is performing. The result is a more efficient team and a more user-aligned product.",
  },
  {
    question: "Will adding analytics slow down my project?",
    answer:
      "No, Rodi Digital's approach is to implement analytics in a lightweight and iterative way that won't bog down development. They understand that getting analytics right is important, but it shouldn't become a bottleneck. Their mantra is it's better to start with something trackable quickly and refine it over time. In practice, they'll add essential tracking early (even if it's basic) and then improve the depth/quality of analytics as the project evolves. This way, you begin gathering insights without delay. Rodi Digital's team uses efficient tools and predefined best practices for analytics, so the overhead is minimal. By the time your product is live, you'll have solid analytics without having extended your timeline to build a perfect analytics system from scratch first. The focus is on balancing insight with agility: you get the data you need, when you need it, without sacrificing development speed.",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Analytics"
        subtitle="Ever launched a product and had no idea what people were actually doing inside it? You're not alone. Guessing what works and what doesn't wastes time and money. We make analytics part of the product itself, so you always know what's really happening."
      />

      <MinimalCardGrid
        title="Our Analytics Approach"
        description="Data should not hide in reports that nobody reads. It should guide every decision, help your product grow, and make life easier for the whole team."
        cards={approachFeatures}
        columns="2"
      />

      <MinimalListSection
        title="Our Implementation Plan"
        description="Getting analytics right should not slow you down. We believe it is better to get started quickly and improve as we go."
        items={implementationSteps}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about our analytics approach"
        faqs={analyticsFAQs}
      />

      <FinalCTA
        title="Ready to build data-driven products?"
        subtitle="No more guessing. No more blind spots. Let's make analytics part of your product from the start, so every decision is made with clarity and confidence."
        primaryCTA={{ text: "Get Started Today", href: "/contact" }}
        secondaryCTA={{ text: "View Our Approach", href: "/approach" }}
      />
    </div>
  );
}
