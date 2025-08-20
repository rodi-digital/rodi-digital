import { ServiceHero } from "@/components/ui/service-hero";
import { ServiceGrid } from "@/components/ui/service-grid";
import { FinalCTA } from "@/components/ui/final-cta";
import { image } from "framer-motion/client";

const services = [
  {
    title: "AI-Enabled Applications",
    description:
      "Harness the transformative power of Large Language Models (LLMs) to unlock new possibilities, intelligent automation, and advanced insights for your business.",
    href: "/services/ai-enabled-applications",
    image: "/images/ai.png",
  },
  {
    title: "Mobile Development",
    description:
      "Deliver fast, data-driven, and cost-effective mobile solutions with our expertise in React Native and Expo for seamless cross-platform development.",
    href: "/services/mobile",
    image: "/images/stores.png",
  },
  {
    title: "Web Development",
    description:
      "Crafting fast, responsive, and visually stunning web solutions precisely tailored to your unique business needs.",
    href: "/services/web",
    image: "/images/web.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Our Services"
        subtitle="We specialize in cutting-edge digital solutions designed to drive innovation, enhance user experiences, and deliver measurable business value."
      />

      <ServiceGrid services={services} />

      <FinalCTA
        title="Ready to Start Your Project?"
        subtitle="Let's discuss how we can help bring your digital vision to life with our expertise in modern development technologies and methodologies."
        primaryCTA={{ text: "Get Started Today", href: "/contact" }}
        secondaryCTA={{ text: "View Case Studies", href: "/cases" }}
      />
    </div>
  );
}
