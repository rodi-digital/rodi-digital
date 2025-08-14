import { HomeHero } from "@/components/ui/home-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { DetailedServicesGrid } from "@/components/ui/detailed-services-grid";

const services = [
  {
    title: "Web Development",
    description:
      "Crafting fast, responsive, and visually stunning web solutions precisely tailored to your unique business needs.",
    items: [
      "SaaS Platform Development - Scalable and secure Software-as-a-Service platforms",
      "Webflow Site Development - Beautiful, responsive sites with easy management",
      "Large-Scale CMS-Powered Websites - Enterprise solutions with content management",
      "Custom Web Applications - Bespoke solutions for unique business challenges",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Deliver fast, data-driven, and cost-effective mobile solutions with our expertise in React Native and Expo for seamless cross-platform development.",
    items: [
      "Cross-Platform Apps - iOS and Android development with React Native & Expo",
      "Data-Driven Integration - Built-in analytics and tracking from day one",
      "Rapid Prototyping - Fast time to market for app idea validation",
      "Performance Optimization - Native performance with JavaScript flexibility",
    ],
  },
  {
    title: "AI-Enabled Applications",
    description:
      "Harness the transformative power of Large Language Models to unlock new possibilities, intelligent automation, and advanced insights for your business.",
    items: [
      "Custom LLM Integration - Seamlessly integrate state-of-the-art language models",
      "Natural Language Processing - Text analysis, chatbots, and language understanding",
      "Intelligent Automation - Complex task automation with reasoning capabilities",
      "Dynamic Content Generation - Contextually relevant content creation",
      "Personalization at Scale - Highly personalized user experiences",
      "Advanced Data Insights - Pattern recognition and decision support systems",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HomeHero
        title="Apps, AI & Websites Built With You"
        subtitle={[
          "We create digital products driven by analytics and built through close collaboration.",
        ]}
        ctaText="Get in touch"
        ctaHref="/contact"
      />

      <DetailedServicesGrid
        title="Our Services"
        subtitle="Building Digital Solutions"
        services={services}
      />

      <TwoColumnSection
        title="Data-Driven Development"
        content="At Rodi Digital, we believe that exceptional digital products are born from a synergy of close collaboration and deep, data-driven insights. We don't just build for you; we build with you, ensuring every decision is backed by real data and user feedback."
        primaryCTA={{ text: "Our Approach", href: "/approach" }}
        secondaryCTA={{ text: "Case Studies", href: "/cases" }}
      />

      <FinalCTA
        title="Ready to Build Something Amazing?"
        subtitle="Let's collaborate to create a digital product that not only meets your needs but exceeds your expectations and drives measurable business growth."
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View Our Services", href: "/services" }}
      />
    </div>
  );
}
