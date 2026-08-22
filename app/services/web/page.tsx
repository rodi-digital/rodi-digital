import { ServiceHero } from "@/components/ui/service-hero";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { FAQSection } from "@/components/ui/faq-section";
import { JsonLd } from "@/components/ui/json-ld";
import {
  pageMetadata,
  faqPageSchema,
  serviceSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Web Development — SaaS, E-commerce & Company Websites",
  description:
    "Fast, conversion-focused web development: SaaS platforms, e-commerce, custom web apps, and company websites with easy content management built by Rodi Digital.",
  path: "/services/web",
  keywords: [
    "web development agency",
    "SaaS development",
    "e-commerce development",
    "custom web applications",
    "company websites",
    "conversion-focused web design",
  ],
});

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

const webFAQs = [
  {
    question: "What web development services does Rodi Digital provide?",
    answer:
      "Rodi Digital provides end-to-end web development, focusing on websites that are fast, flexible, and growth-oriented. They can build scalable SaaS platforms for subscription-based businesses, ensuring your web app grows smoothly as you add users. They also create high-impact landing pages designed to grab attention and convert visitors instead of letting them bounce. If you need an online store, Rodi Digital develops e-commerce websites with smooth shopping experiences and optimized checkout flows to reduce cart abandonment and boost sales. Content management is another strength – they deliver websites that your team can easily update without waiting on a developer, so you can keep content fresh and stay agile in your marketing. And for clients with unique needs, Rodi Digital builds custom web applications to solve specific business problems and streamline operations (going beyond what any off-the-shelf solution could do). In summary, whether it's a marketing site, online store, SaaS product, or custom web app, Rodi Digital has the expertise to develop it.",
  },
  {
    question: "How does Rodi Digital ensure a website actually drives growth?",
    answer:
      "Rodi Digital focuses on more than just making a site look good – they ensure it performs well and converts users into customers. They emphasize factors like site speed, user experience, and conversion-oriented design. For example, they craft landing pages with strong calls-to-action and engaging content to grab visitor attention and encourage sign-ups or inquiries. They also optimize e-commerce pages for a seamless purchase process, which boosts sales. On the technical side, Rodi Digital prioritizes performance and SEO-friendly structure – that means fast load times, clean code, mobile responsiveness, and proper search engine optimization so your site ranks well and is easily found. Security is included too, ensuring users trust your site. By combining all these elements, Rodi Digital delivers websites that not only function smoothly but actively help grow your business (more leads, more sales, or whatever your goal may be).",
  },
  {
    question:
      "Will I be able to update my website easily after Rodi Digital builds it?",
    answer:
      "Yes. A big part of Rodi Digital's web philosophy is easy content management for clients. They build websites so that your team can update text, images, blog posts, etc., without needing a developer for every change. This often involves implementing a user-friendly content management system (CMS) or admin interface tailored to your site. The benefit is that you remain in control of your site's content – you can quickly publish news, edit product info, or launch a new landing page on your own schedule. Staying agile with your content keeps your website fresh and relevant, and Rodi Digital ensures you have the tools and training (if needed) to do this easily.",
  },
  {
    question: "Does Rodi Digital develop custom web applications?",
    answer:
      "Absolutely. If your needs go beyond a standard marketing website, Rodi Digital can build custom web applications to meet those needs. This could be anything from a specialized online tool for your business operations to a unique customer portal – essentially, web software tailored to your specifications. Rodi Digital's team has experience creating custom solutions that address unique business problems and streamline processes. They will work with you from the discovery phase to define the requirements and then design a web application that fits perfectly. The result is a bespoke web platform that does exactly what you need, which off-the-shelf products often can't achieve.",
  },
  {
    question: "What is Rodi Digital's process for web development projects?",
    answer:
      "Rodi Digital follows a clear, four-phase web development process to ensure projects stay on track and clients are always in the loop. It begins with Discovery and Planning, where they learn about your goals, target audience, and requirements to map out the right strategy. Next comes Design and Architecture - they create user-focused designs (UI/UX) and a solid technical plan to support both today's needs and future growth. The third phase is Development and Integration, during which they iteratively build the site and integrate any necessary systems or third-party services. Importantly, Rodi Digital conducts regular check-ins and live demos throughout development so you can see progress and provide feedback in real time. The final phase is Launch and Support: they handle a smooth deployment of your website and stand by for ongoing support and maintenance. This means after launch, they're available to fix issues, make improvements, or add features as needed. Throughout all these steps, transparency and communication are key – you'll know what's happening at every stage of your web project.",
  },
];

export default function WebPage() {
  return (
    <div className="min-h-screen">
      <JsonLd
        data={[
          serviceSchema({
            name: "Web Development",
            description:
              "Fast, conversion-focused web development: SaaS platforms, e-commerce, custom web apps, and company websites with easy content management.",
            path: "/services/web",
            category: "Web Development",
          }),
          faqPageSchema(webFAQs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Web Development", path: "/services/web" },
          ]),
        ]}
      />
      <ServiceHero
        title="Web Development"
        subtitle="A website that only looks good is not enough. If it loads slowly, feels clunky, or makes it hard to update content, you lose customers and waste opportunities. We design and build web experiences that are fast, flexible, and focused on growth."
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

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about web development"
        faqs={webFAQs}
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
