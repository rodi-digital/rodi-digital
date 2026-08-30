import { ServiceHero } from "@/components/ui/service-hero";
import { ServiceGrid } from "@/components/ui/service-grid";
import { FinalCTA } from "@/components/ui/final-cta";
import { FAQSection } from "@/components/ui/faq-section";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata, faqPageSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services — AI, Mobile & Web Development",
  description:
    "Rodi Digital builds AI-powered applications, cross-platform mobile apps, and high-conversion websites. Explore our full range of digital development services.",
  path: "/services",
  keywords: [
    "AI development services",
    "mobile app development",
    "web development services",
    "digital product development",
    "Netherlands software agency",
  ],
});

const services = [
  {
    title: "AI-Powered Applications",
    description:
      "Unlock the potential of AI to improve search functionality, personalize customer interactions, and gain valuable insights for strategic decisions.",
    href: "/services/ai-enabled-applications",
    illustration: "emergence",
  },
  {
    title: "Mobile Development",
    description:
      "We specialize in intuitive, high-performance mobile apps – whether you need a simple proof-of-concept or a polished product ready for full-scale launch.",
    href: "/services/mobile",
    illustration: "frames",
  },
  {
    title: "Web Development",
    description:
      "We build fast, responsive websites that not only look great but also run flawlessly.",
    href: "/services/web",
    illustration: "grid",
  },
];

const servicesFAQs = [
  {
    question: "What types of development projects can Rodi Digital handle?",
    answer:
      "Rodi Digital handles a wide range of digital development projects. They specialize in building AI-powered applications, developing cross-platform mobile apps, and designing modern websites. In practice, this means they can create intelligent AI-driven software, intuitive smartphone applications for iOS and Android, and high-performing web platforms – all tailored to drive innovation and deliver business value.",
  },
  {
    question: "How do Rodi Digital's services benefit a business?",
    answer:
      "Every service Rodi Digital provides is aimed at delivering tangible benefits to your business. Their solutions are designed to drive innovation, enhance user experience, and produce measurable results. For example, an AI application from Rodi Digital might automate tedious processes (saving your team time), a mobile app might improve customer engagement and loyalty, and a revamped website could increase conversion rates. By focusing on outcomes like user satisfaction and growth metrics, Rodi Digital ensures their work contributes positively to your bottom line.",
  },
  {
    question:
      "Does Rodi Digital build AI-powered solutions like chatbots and automation?",
    answer:
      "Yes. AI-powered solutions are one of Rodi Digital's core offerings. They develop intelligent conversational agents (AI chatbots) that actually understand users and help customers effectively. They also create smart automation systems to handle repetitive tasks, AI-driven search tools to instantly find information in documents, and customer support intelligence platforms that can resolve common issues or assist support teams. In short, if your business can benefit from artificial intelligence – whether through a chatbot, automation workflow, personalized recommendations, or data insights – Rodi Digital has the expertise to build that solution.",
  },
  {
    question: "Can Rodi Digital develop mobile apps for both iOS and Android?",
    answer:
      "Absolutely. Rodi Digital specializes in cross-platform mobile development, meaning they build your app with a single codebase that runs natively on both iOS and Android devices. This approach ensures you reach your full audience on App Store and Google Play without having to develop and maintain two separate codebases. It also means a faster development cycle and consistent features across platforms, all without compromising on performance or user experience.",
  },
  {
    question: "What types of websites can Rodi Digital create?",
    answer:
      "Rodi Digital can create a variety of websites and web applications depending on your needs. This includes scalable SaaS platforms for subscription-based businesses, high-impact landing pages that grab attention and convert visitors into customers, and e-commerce websites optimized for smooth checkout experiences to reduce cart abandonment. They also build sites with easy content management systems, so you can update your content without technical help. Whether you need a simple marketing site, a robust online store, or a custom web application for a unique business process, Rodi Digital's web development team has you covered.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <JsonLd
        data={[
          faqPageSchema(servicesFAQs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <ServiceHero
        title="Our Services"
        subtitle="We specialize in building AI applications, mobile apps, and websites that drive innovation, enhance user experiences, and deliver measurable business value."
      />

      <ServiceGrid services={services} imageVariant="transparent" />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about our development services"
        faqs={servicesFAQs}
      />

      <FinalCTA
        title="Ready to Start Your Project?"
        subtitle="Let's discuss how we can help bring your digital vision to life with our expertise in modern development technologies and methodologies."
        primaryCTA={{ text: "Get Started Today", href: "/contact" }}
        secondaryCTA={{ text: "View Case Studies", href: "/cases" }}
      />
    </div>
  );
}
