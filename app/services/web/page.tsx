import { ServiceHero } from "@/components/ui/service-hero";
import { CenteredContentSection } from "@/components/ui/centered-content-section";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";

const expertiseCards = [
  {
    title: "SaaS platforms",
    description:
      "Scalable foundations that grow with your subscription business and keep performance steady as you add users.",
  },
  {
    title: "High-impact landing pages",
    description:
      "Pages designed to grab attention and convert visitors instead of letting them bounce away.",
  },
  {
    title: "E-commerce optimized",
    description:
      "Smooth shopping experiences with checkout flows that reduce cart abandonment and boost sales.",
  },
  {
    title: "Easy content management",
    description:
      "Websites your team can update without waiting on a developer. Stay agile and keep your content fresh.",
  },
  {
    title: "Custom web applications",
    description:
      "When you need more than a standard site, we build tools that solve unique business problems and streamline operations.",
  },
  {
    title: "Performance and security",
    description:
      "Fast load times, SEO-friendly structure, and strong protection so your site is both visible and reliable.",
  },
];

const processCards = [
  {
    title: "Discovery and planning",
    description:
      "We start by learning about your goals, audience, and requirements to map out the right approach.",
  },
  {
    title: "Design and architecture",
    description:
      "User-focused design paired with a technical foundation that supports today's needs and tomorrow's growth.",
  },
  {
    title: "Development and integration",
    description:
      "Iterative builds with check-ins and demos so you can see progress and give feedback along the way.",
  },
  {
    title: "Launch and support",
    description:
      "Smooth deployment followed by ongoing support and maintenance so your site keeps performing.",
  },
];

export default function WebPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Web Development"
        subtitle="A website that only looks good is not enough. If it loads slowly, feels clunky, or makes it hard to update content, you lose customers and waste opportunities. We design and build web experiences that are fast, flexible, and focused on growth."
      />

      <CenteredContentSection
        content="Your site should do more than look nice — it should move the needle for your business. Fast, responsive, and built with your goals in mind."
        cta={{ text: "Let's Build Something Together", href: "/contact" }}
      />

      <MinimalCardGrid
        title="Our Web Development Expertise"
        description="Here's how we make sure your website doesn't just work, but works for you:"
        cards={expertiseCards}
        columns="2"
      />

      <MinimalListSection
        title="Our Web Development Process"
        description="A clear process keeps your project on track and makes sure you know what's happening at every step."
        items={processCards}
      />

      <FinalCTA
        title="Ready to turn your idea into reality?"
        subtitle="We'd love to help you create a site that does more than look good — one that drives measurable growth and keeps you in control."
        primaryCTA={{
          text: "Let's Build Something Together",
          href: "/contact",
        }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
      />
    </div>
  );
}
