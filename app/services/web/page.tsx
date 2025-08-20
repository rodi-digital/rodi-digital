import { ServiceHero } from "@/components/ui/service-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";

const expertiseCards = [
  {
    title: "SaaS Platform Development",
    description:
      "We specialize in building scalable and secure Software-as-a-Service (SaaS) platforms. Whether you need a complex multi-tenant application or a specialized business tool, we design and develop robust solutions that meet the demands of modern cloud-based services.",
  },
  {
    title: "Webflow Site Development",
    description:
      "For businesses seeking beautiful, responsive, and easily manageable websites with basic functionality, we excel in building custom Webflow sites. We leverage Webflow's powerful design capabilities to create visually appealing and user-friendly online presences.",
  },
  {
    title: "Large-Scale Content Management Platforms",
    description:
      "We have extensive experience in developing large company websites powered by Content Management Systems like WordPress. This ensures that your team can easily manage and update content, providing flexibility and control over your digital assets while maintaining a consistent brand experience.",
  },
  {
    title: "Custom Web Applications",
    description:
      "Beyond standard websites, we develop bespoke web applications designed to solve unique business challenges and streamline operations. Our custom solutions are built with performance, security, and scalability in mind.",
  },
  {
    title: "Performance Optimization & Security",
    description:
      "We prioritize building web solutions that are not only functional and aesthetically pleasing but also optimized for speed, search engine visibility, and robust security, ensuring a reliable and high-quality user experience.",
  },
];

const processCards = [
  {
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
  },
  {
    title: "Design & Architecture",
    description:
      "We create user-centered designs and establish a scalable technical architecture that supports your current needs and future growth.",
  },
  {
    title: "Development & Integration",
    description:
      "Our development process includes regular check-ins, live demos, and continuous integration of feedback to ensure alignment with your vision.",
  },
  {
    title: "Testing & Optimization",
    description:
      "Comprehensive testing across devices and browsers, performance optimization, and security audits before launch.",
  },
  {
    title: "Launch & Support",
    description:
      "Smooth deployment with ongoing support, monitoring, and maintenance to ensure optimal performance.",
  },
];

export default function WebPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Web Development"
        subtitle="We build fast, responsive websites that not only look great but also run flawlessly."
      />
      
      <TwoColumnSection
        title="Digital Experiences That Drive Growth"
        content="At Rodi Digital, we craft dynamic and high-performing web solutions tailored to your specific business needs. From sophisticated SaaS platforms to visually stunning marketing sites, we deliver web experiences that drive engagement and growth."
        primaryCTA={{ text: "Let's Build Something Together", href: "/contact" }}
        secondaryCTA={{ text: "View Case Studies", href: "/cases" }}
      />
      
      <MinimalCardGrid
        title="Our Web Development Expertise"
        description="We combine technical excellence with strategic thinking to deliver web solutions that meet your business objectives."
        cards={expertiseCards}
        columns="2"
      />
      
      <MinimalListSection
        title="Our Web Development Process"
        description="A structured approach that ensures quality, transparency, and successful delivery."
        items={processCards}
      />
      
      <FinalCTA
        title="Ready to turn your idea into reality?"
        subtitle="We'd love to help you create a powerful online presence that aligns with your strategic goals and delivers measurable results."
        primaryCTA={{ text: "Let's Build Something Together", href: "/contact" }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
      />
    </div>
  );
}
