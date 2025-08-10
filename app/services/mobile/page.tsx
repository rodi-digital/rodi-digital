import { ServiceHero } from "@/components/ui/service-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";

const strengthsCards = [
  {
    title: "Cross-Platform Expertise",
    description:
      "We build versatile mobile applications using Expo and React Native, allowing us to develop for both iOS and Android simultaneously. This approach significantly reduces development time and costs, ensuring a faster time to market for your app idea.",
  },
  {
    title: "Data-Driven Iteration",
    description:
      "Our apps are built with analytics and tracking deeply integrated from the outset. This ensures that every user interaction and performance metric is captured, providing valuable data for informed decision-making and continuous improvement. We believe in iterating based on real user behavior to optimize your app for success.",
  },
  {
    title: "Agile and Efficient Development",
    description:
      "As a lean, one-person operation, Rodi Digital offers unparalleled agility and cost-effectiveness compared to larger agencies. This means direct communication, faster turnaround times, and a more personalized approach to your project, all while maintaining high standards of quality and performance.",
  },
  {
    title: "Focus on Fast Time to Market",
    description:
      "We understand the importance of validating your app idea quickly. Our streamlined development process and cross-platform capabilities enable us to launch your mobile app efficiently, allowing you to gather user feedback and iterate rapidly.",
  },
];

const technologiesCards = [
  {
    title: "React Native & Expo",
    description:
      "Our primary stack for cross-platform mobile development, offering native performance with JavaScript flexibility and rapid development capabilities.",
  },
  {
    title: "Analytics Integration",
    description:
      "Built-in analytics tracking from day one, using tools like Firebase Analytics, Mixpanel, or custom solutions to capture user behavior and app performance.",
  },
];

export default function MobilePage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Mobile Development"
        subtitle="Deliver fast, data-driven, and cost-effective mobile solutions with our expertise in React Native and Expo for seamless cross-platform development."
      />
      
      <TwoColumnSection
        title="Built for Growth & Speed"
        content="At Rodi Digital, we specialize in building high-performing mobile applications that are not only fast to market but also designed for continuous iteration and growth. We leverage cutting-edge cross-platform technologies to deliver robust and engaging mobile experiences."
        primaryCTA={{ text: "Start Your Mobile Project", href: "/contact" }}
        secondaryCTA={{ text: "View Case Studies", href: "/cases" }}
      />
      
      <MinimalCardGrid
        title="Our Mobile Development Strengths"
        description="We combine technical expertise with strategic thinking to deliver mobile solutions that drive business value."
        cards={strengthsCards}
        columns="2"
      />
      
      <MinimalListSection
        title="Technologies We Use"
        description="We leverage proven technologies to build scalable and performant mobile applications."
        items={technologiesCards}
      />
      
      <FinalCTA
        title="Ready to Build Your Mobile App?"
        subtitle="Whether you're looking to validate a new concept or build a full-scale mobile application, Rodi Digital provides the expertise and efficiency to bring your vision to life."
        primaryCTA={{ text: "Get Started Today", href: "/contact" }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
      />
    </div>
  );
}
