import { ServiceHero } from "@/components/ui/service-hero";
import { ServiceGrid } from "@/components/ui/service-grid";
import { FinalCTA } from "@/components/ui/final-cta";

const approaches = [
  {
    title: "Analytics at the Core",
    description:
      "We believe analytics should go beyond dashboards – it should spark conversations. We embed analytics at every step of product development, turning assumptions into data-backed insights and features into tangible outcomes.",
    href: "/approach/analytics",
    image: "/images/analytics.png",
  },
  {
    title: "Collaboration",
    description:
      "We don't just build for you; we build with you. Our collaborative approach ensures a seamless partnership throughout your digital product development journey.",
    href: "/approach/collaboration",
    image: "/images/collaboration.png",
  },
];

export default function ApproachPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="How we work"
        subtitle="We create digital products that stand the test of time, using data and analytics to drive your growth through close collaboration."
      />

      <ServiceGrid services={approaches} />

      <FinalCTA
        title="Ready to Work Together?"
        subtitle="Discover how our collaborative, data-driven approach can transform your digital product development journey."
        primaryCTA={{ text: "Get Started Today", href: "/contact" }}
        secondaryCTA={{ text: "View Our Services", href: "/services" }}
      />
    </div>
  );
}
