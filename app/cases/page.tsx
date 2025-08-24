import { ServiceHero } from "@/components/ui/service-hero";
import { ServiceGrid } from "@/components/ui/service-grid";
import { FinalCTA } from "@/components/ui/final-cta";
import { image } from "framer-motion/client";

const cases = [
  {
    title: "PEACHealth",
    description:
      "Empowering individuals with personalized, expert-backed health information through a free mobile application, fostering informed decision-making and improved patient engagement.",
    href: "/cases/peach",
    image: "/images/cases/peach.png",
  },
  {
    title: "Rodi",
    description:
      "A free, privacy-focused bike computer app offering seamless route guidance, comprehensive performance tracking, and Strava integration, all without ads or subscriptions.",
    href: "/cases/rodi",
    image: "/images/cases/rodi.png",
  },
  {
    title: "Trai",
    description:
      "An AI-powered triathlon training plan generator that delivers personalized, adaptive training schemas, optimizing performance and simplifying planning for athletes.",
    href: "/cases/trai",
    image: "/images/cases/trai.png",
  },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Case Studies"
        subtitle="Explore how Rodi Digital has partnered with clients to transform their visions into successful, impactful digital products."
      />

      <ServiceGrid services={cases.map((c) => ({ ...c, href: c.href }))} />

      <FinalCTA
        title="Ready to Create Your Success Story?"
        subtitle="Let's partner together to transform your vision into a successful, impactful digital product that drives real business value."
        primaryCTA={{ text: "Get Started Today", href: "/contact" }}
        secondaryCTA={{ text: "View Our Services", href: "/services" }}
      />
    </div>
  );
}
