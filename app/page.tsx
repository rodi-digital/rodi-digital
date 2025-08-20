import { HomeHero } from "@/components/ui/home-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { DetailedServicesGrid } from "@/components/ui/detailed-services-grid";

const services = [
  {
    title: "AI-Powered Applications",
    description:
      "Stop spending hours on repetitive tasks and struggling with poor search results. Let AI handle the heavy lifting while delivering personalized experiences your customers actually want.",
    items: [
      "Smart Document Processing - Stop manually extracting data from invoices, contracts, and forms",
      "Intelligent Customer Support - End the cycle of repetitive support tickets draining your team",
      "Content Generation at Scale - Eliminate the bottleneck of creating personalized marketing content",
      "Advanced Search & Discovery - No more users leaving because they can't find what they need",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Turn your app idea into reality without breaking the bank or waiting months. Get to market fast and learn what your users actually want.",
    items: [
      "Cross-Platform Apps - Stop choosing between iOS and Android, reach everyone with one codebase",
      "MVP Development - Avoid spending months building features nobody actually wants",
      "Real-Time Analytics - End the guesswork about what users do in your app",
      "Push Notifications Done Right - Stop losing users who forget about your app",
    ],
  },
  {
    title: "Web Development",
    description:
      "Stop losing customers to slow, confusing websites. Get a web presence that actually converts visitors into paying customers.",
    items: [
      "SaaS Development - Eliminate the headache of building scalable subscription businesses",
      "Landing Pages - Stop watching potential customers bounce without converting",
      "E-commerce Solutions - End lost sales from complicated checkout processes",
      "Custom Business Tools - Replace inefficient spreadsheets and manual processes",
      "Content Management Systems - Stop paying developers for simple website updates",
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
