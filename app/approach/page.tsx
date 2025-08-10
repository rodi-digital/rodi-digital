import { ServiceHero } from "@/components/ui/service-hero";
import { ServiceGrid } from "@/components/ui/service-grid";
import { FinalCTA } from "@/components/ui/final-cta";

const approaches = [
  {
    title: "Analytics at the core",
    description: "We go beyond traditional dashboards, embedding analytics into every layer of product development to drive continuous growth and informed decision-making.",
    href: "/approach/analytics"
  },
  {
    title: "Collaboration",
    description: "We don't just build for you; we build with you. Our collaborative approach ensures a seamless partnership throughout your digital product development journey.",
    href: "/approach/collaboration"
  }
];

export default function ApproachPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="How we work"
        subtitle="At Rodi Digital, we believe that exceptional digital products are born from a synergy of close collaboration and deep, data-driven insights."
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
