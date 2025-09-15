import { HomeHero } from "@/components/ui/home-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { DetailedServicesGrid } from "@/components/ui/detailed-services-grid";

const services = [
  {
    title: "AI-Powered Applications",
    description:
      "Let AI handle the busywork while you focus on growth. We build intelligent systems that deliver real value to your team and customers.",
    items: [
      "Content generation - Instant, brand-aligned copy, blogs, visuals, ads — polished at scale.",
      "Conversational agents - Chatbots and voice assistants that feel more human than ever.",
      "Process automation - Eliminate repetitive tasks and let your team do what matters.",
      "Intelligent search & Insights - Search across documents, get answers instantly.",
      "Personalization Eengine - Tailored content & experiences for each customer, powered by your data.",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Turn your app idea into reality faster than you thought possible. Launch, learn, and grow without wasting budget.",
    items: [
      "iOS and Android - Build once, launch on iOS + Android, without trade-offs.",
      "Rapid prototyping & launch - Validate your app idea without wasting months or budget.",
      "Engaging user experience - Keep users active with smooth flows, smart notifications, and intuitive design.",
    ],
  },
  {
    title: "Web Development",
    description:
      "Your website shouldn't just look good—it should drive growth. We design and build sites that convert clicks into customers.",
    items: [
      "SaaS platforms - Scalable foundations for subscription businesses.",
      "E-commerce - Smooth checkouts that reduce cart abandonment.",
      "Easy content management - Stay in control without developer bottlenecks. Update content in seconds.",
      "Company websites - Professional, fast, and built to grow with your business.",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HomeHero
        title="Apps, AI, and Websites Built with You"
        subtitle={[
          "We create digital products that stand the test of time, using data and analytics to drive your growth.",
        ]}
        ctaText="Let's Talk"
        ctaHref="/contact"
      />

      <DetailedServicesGrid
        title="Our Services"
        subtitle="What We Build"
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
