import { PageHeader } from "@/components/ui/page-header";
import { H2 } from "@/components/ui/heading";
import { StickyCards, StickyCard } from "@/components/ui/sticky-cards";
import { ProcessVisualization } from "@/components/ui/process-visualization";

const expertiseCards: StickyCard[] = [
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
    title: "Large-Scale CMS-Powered Websites",
    description:
      "We have extensive experience in developing large company websites powered by Content Management Systems (CMS). This ensures that your team can easily manage and update content, providing flexibility and control over your digital assets while maintaining a consistent brand experience.",
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

const processCards: StickyCard[] = [
  {
    title: "1. Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
  },
  {
    title: "2. Design & Architecture",
    description:
      "We create user-centered designs and establish a scalable technical architecture that supports your current needs and future growth.",
  },
  {
    title: "3. Development & Integration",
    description:
      "Our development process includes regular check-ins, live demos, and continuous integration of feedback to ensure alignment with your vision.",
  },
  {
    title: "4. Testing & Optimization",
    description:
      "Comprehensive testing across devices and browsers, performance optimization, and security audits before launch.",
  },
  {
    title: "5. Launch & Support",
    description:
      "Smooth deployment with ongoing support, monitoring, and maintenance to ensure optimal performance.",
  },
];

export default function WebPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageHeader
          title="Web Development"
          description="Crafting fast, responsive, and visually stunning web solutions precisely tailored to your unique business needs."
        />
        <section>
          <p>
            At Rodi Digital, we craft dynamic and high-performing web solutions
            tailored to your specific business needs. From sophisticated SaaS
            platforms to visually stunning marketing sites, we deliver web
            experiences that drive engagement and growth.
          </p>
        </section>
        <section>
          <H2>Our Web Development Expertise</H2>
          <StickyCards minHeight={1500} cardContent={expertiseCards} />
        </section>
        <section>
          <H2>Our Web Development Process</H2>
          <ProcessVisualization steps={processCards} />
        </section>
        <section>
          <H2>Ready to Build Your Web Presence?</H2>
          <p>
            Partner with Rodi Digital to create a powerful online presence that
            aligns with your strategic goals and delivers measurable results.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
}
