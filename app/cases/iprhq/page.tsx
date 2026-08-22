import { CaseStudyLayout } from "@/components/ui/case-study-layout";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPRHQ — Unified IP Management Platform with AI Risk Scoring",
  description:
    "IPRHQ is the first integrated platform unifying IP clearance, search, watch, enforcement, portfolio management, and monitoring with AI-powered risk scoring.",
  path: "/cases/iprhq",
  keywords: [
    "IP management platform",
    "intellectual property software",
    "AI risk scoring",
    "IP portfolio management",
    "patent and trademark software",
  ],
});

const keyFeatures = [
  {
    title: "Unified IP Platform",
    description:
      "All IP functionalities integrated into one platform: clearance, search, watch, enforcement, portfolio management, domains, and online monitoring.",
  },
  {
    title: "AI-Powered Risk Scoring",
    description:
      "AI-driven analytics engine ranks threats to IP rights by relevance, enabling teams to focus on critical issues and initiate enforcement actions quickly.",
  },
  {
    title: "Microsoft Word Integration",
    description:
      "Seamlessly integrated Add-In enables document development directly in Microsoft Word using IP-related data, templates, and curated content.",
  },
  {
    title: "Chrome Side App",
    description:
      "Integrated Chrome extension allows immediate actions against online infringements on platforms without leaving the browser.",
  },
  {
    title: "Single Source of Truth",
    description:
      "Data is shared across all functionalities, powering every step and functioning as the unified source for all IP-related information.",
  },
  {
    title: "Managed Service Options",
    description:
      "Outsource functionalities like portfolio analysis, monitoring evaluation, contract development, and enforcement actions through Pitch.law.",
  },
];

const impactFeatures = [
  {
    title: "Faster Decision-Making",
    description:
      "Eliminates manual data transfers between systems, enabling faster clearance and enforcement decisions from weeks to hours.",
  },
  {
    title: "Reduced Operational Costs",
    description:
      "Simple pricing model replaces multiple SaaS subscriptions and transaction fees, resulting in lower overall operational costs.",
  },
  {
    title: "Enhanced Collaboration",
    description:
      "Unified platform enables seamless collaboration across IP teams, with shared data and insights accessible to all stakeholders.",
  },
  {
    title: "Reduced Blind Spots",
    description:
      "Integrated monitoring and watch capabilities provide comprehensive visibility across all IP rights, reducing risks from missed threats.",
  },
];

export default function IPRHQCasePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/cases" },
          { name: "IPRHQ", path: "/cases/iprhq" },
        ])}
      />
      <CaseStudyLayout
      title="IPRHQ"
      subtitle="Master your IP rights in one unified platform."
      challenge="IP teams juggle 5-7 disconnected tools and data sources for clearance, search, watch, enforcement, portfolio management, domains, and online monitoring. This fragmentation slows decisions, increases costs, creates blind spots, and risks. Manual data transfers between systems and multiple searches needed to obtain holistic results make IP management inefficient and error-prone."
      solution="IPRHQ is the first integrated platform where IP data, actions, and insights work together. All key functionalities are integrated into one single platform, with data shared across all features functioning as the single source of truth. The platform includes AI-driven risk scoring for watch and monitoring results, seamless Microsoft Word integration for document development, and an integrated Chrome Side App for immediate actions against online infringements."
      keyFeatures={keyFeatures}
      impact={impactFeatures}
      technologySection={{
        title: "Technology Stack",
        content:
          "Built as a comprehensive web platform with AI-powered analytics engine, Microsoft Word Add-In integration, Chrome extension capabilities, and secure data infrastructure supporting real-time IP clearance, monitoring, and enforcement workflows.",
      }}
      ctaTitle="Ready to Transform Your IP Management?"
      ctaSubtitle="Let's build an integrated IP platform that unifies your workflows and accelerates decision-making."
      projectLinks={[
        {
          text: "Visit IPRHQ",
          href: "https://iprhq.com/",
        },
      ]}
    />
    </>
  );
}


