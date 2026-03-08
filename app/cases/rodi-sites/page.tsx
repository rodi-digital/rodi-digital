import { CaseStudyLayout } from "@/components/ui/case-study-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rodi Sites Case Study | Affordable Website Subscriptions for SMBs",
  description:
    "How Rodi Digital built Rodi Sites — a subscription-based website platform delivering professional, SEO-optimized websites for Dutch small businesses from €75/month with no upfront costs.",
  keywords: [
    "website subscription service",
    "affordable business websites",
    "website as a service",
    "SMB website platform",
    "Dutch web development",
    "SEO-optimized websites",
    "Rodi Sites case study",
    "website laten maken",
    "professionele website MKB",
    "Keystatic CMS",
    "Next.js website platform",
  ],
  openGraph: {
    title: "Rodi Sites Case Study | Website Subscriptions for SMBs",
    description:
      "How Rodi Digital built a subscription-based website platform delivering professional, SEO-optimized websites for Dutch small businesses from €75/month.",
    url: "https://rodi-digital.com/cases/rodi-sites",
    type: "article",
  },
};

const keyFeatures = [
  {
    title: "Subscription-Based Model",
    description:
      "No upfront costs for clients. Professional websites starting at €75/month with hosting, maintenance, security updates, and technical support all included.",
  },
  {
    title: "SEO-Optimized by Default",
    description:
      "Every site ships with structured data (JSON-LD), semantic HTML, optimized metadata, sitemap generation, and ongoing SEO maintenance to help businesses rank locally.",
  },
  {
    title: "Self-Service CMS",
    description:
      "Built-in Keystatic content management system lets business owners update text and images themselves — as easy as typing an email, no developer needed.",
  },
  {
    title: "Sub-2 Second Load Times",
    description:
      "Next.js static generation and edge deployment deliver blazing-fast page loads under 1.8 seconds, improving user experience and search engine rankings.",
  },
  {
    title: "Mobile-First Design",
    description:
      "Every website is designed mobile-first, ensuring a flawless experience on any device — critical for local businesses whose customers search on the go.",
  },
  {
    title: "Scalable Add-Ons",
    description:
      "Clients can add booking systems, third-party integrations, multilingual support, and custom calculators as their business grows, without switching platforms.",
  },
];

const impactFeatures = [
  {
    title: "99.9% Uptime Guaranteed",
    description:
      "Premium hosting infrastructure ensures client websites are always available when their customers are searching, with no downtime worries.",
  },
  {
    title: "Live in 14 Days",
    description:
      "Average turnaround from first conversation to a fully launched website is just two weeks — compared to 2-5 months with traditional agencies.",
  },
  {
    title: "Zero Upfront Investment",
    description:
      "Eliminated the €2,000–€8,000 upfront barrier that prevents small businesses from getting online, making professional web presence accessible to all.",
  },
];

export default function RodiSitesCasePage() {
  return (
    <CaseStudyLayout
      title="Rodi Sites"
      subtitle="Professional websites as a subscription for Dutch small businesses."
      challenge="Small business owners — painters, plumbers, dentists, and local service providers — struggle to get online. Traditional web agencies charge €2,000–€8,000 upfront, take months to deliver, and disappear after launch. DIY platforms like Wix produce generic-looking sites with limited SEO. Freelancers are unreliable. The result: thousands of businesses remain invisible to customers searching online for local services."
      solution="Rodi Sites is a website-as-a-service platform that removes every barrier to getting online. For a fixed monthly fee starting at €75, businesses get a custom-designed, SEO-optimized website built on Next.js with a Keystatic CMS for self-service content updates. The subscription covers everything: design, development, hosting, maintenance, security updates, and ongoing SEO. With an average delivery time of just 14 days and a 30-day money-back guarantee, Rodi Sites makes professional web presence accessible and risk-free."
      keyFeatures={keyFeatures}
      impact={impactFeatures}
      technologySection={{
        title: "Technology Stack",
        content:
          "Built with Next.js 15 for static site generation and edge-optimized performance, Keystatic CMS for headless content management, TailwindCSS for responsive mobile-first styling, and structured data markup for rich search results. The platform leverages React 19, TypeScript for type safety, and Markdoc for content authoring. Deployed on premium hosting infrastructure with 99.9% uptime SLA, automated security updates, and Google Analytics integration for client reporting.",
      }}
      ctaTitle="Want a Website Platform Like This?"
      ctaSubtitle="Let's build a scalable, subscription-based digital product that generates recurring revenue and delivers real value."
      projectLinks={[
        {
          text: "Visit Rodi Sites",
          href: "https://rodi-sites.nl",
        },
      ]}
    />
  );
}
