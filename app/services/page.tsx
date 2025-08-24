import { ServiceHero } from "@/components/ui/service-hero";
import { ServiceGrid } from "@/components/ui/service-grid";
import { FinalCTA } from "@/components/ui/final-cta";
import { image } from "framer-motion/client";

const services = [
  {
    title: "AI-Powered Applications",
    description:
      "Unlock the potential of AI to improve search functionality, personalize customer interactions, and gain valuable insights for strategic decisions.",
    href: "/services/ai-enabled-applications",
    image: "/images/ai.png",
  },
  {
    title: "Mobile Development",
    description:
      "We specialize in intuitive, high-performance mobile apps – whether you need a simple proof-of-concept or a polished product ready for full-scale launch.",
    href: "/services/mobile",
    image: "/images/stores.png",
  },
  {
    title: "Web Development",
    description:
      "We build fast, responsive websites that not only look great but also run flawlessly.",
    href: "/services/web",
    image: "/images/web.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Our Services"
        subtitle="We specialize in building AI applications, mobile apps, and websites that drive innovation, enhance user experiences, and deliver measurable business value."
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
