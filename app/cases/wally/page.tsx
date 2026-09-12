import { CaseStudyLayout } from "@/components/ui/case-study-layout";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Wally — AI Assistant for Accounting Firms",
  description:
    "Wally is an AI assistant for accounting firms that integrates with Outlook, provides Belgian tax expertise, performs fiscal calculations, and analyzes documents.",
  route: "caseWally",
  keywords: [
    "AI assistant for accountants",
    "accounting AI",
    "Outlook AI integration",
    "tax AI assistant",
  ],
});

const keyFeatures = [
  {
    title: "Outlook Integration",
    description:
      "Searches Outlook inbox and extracts information and history in seconds, eliminating manual searching through emails.",
  },
  {
    title: "Tax Expertise",
    description:
      "Specialized knowledge in Belgian VAT, corporate tax, and personal income tax, providing answers backed by official sources.",
  },
  {
    title: "Fiscal Calculations",
    description:
      "Performs complex tax calculations and data analysis, from intricate computations to dataset processing and visualization.",
  },
  {
    title: "Document Analysis",
    description:
      "Upload invoices, contracts, or tax documents and extract relevant information, interpreting and summarizing key details.",
  },
  {
    title: "Email Composition",
    description:
      "Drafts emails on demand, helping accountants communicate more efficiently with clients and colleagues.",
  },
  {
    title: "Accessible AI",
    description:
      "Designed for every team member, from file managers to partners, making AI accessible without technical barriers.",
  },
];

const impactFeatures = [
  {
    title: "Time Savings",
    description:
      "Reduces time lost on searching and repetitive work, allowing accountants to focus on high-value tasks that matter.",
  },
  {
    title: "Improved Efficiency",
    description:
      "Streamlines workflows by consolidating information and software, enabling faster access to insights and data.",
  },
  {
    title: "Better Accuracy",
    description:
      "Provides expert-backed answers with official sources, reducing errors and ensuring compliance with tax regulations.",
  },
  {
    title: "Reduced Complexity",
    description:
      "Brings peace and overview to accounting offices without complex technology, making AI usable without hassle.",
  },
];

export default function WallyCasePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", route: "home" },
          { name: "Case Studies", route: "cases" },
          { name: "Wally", route: "caseWally" },
        ])}
      />
      <CaseStudyLayout
      title="Wally"
      subtitle="AI assistant for accounting firms that brings information and software together."
      challenge="Accounting firms waste significant time searching for information and performing repetitive tasks. Employees juggle multiple disconnected systems and data sources, leading to inefficiency, errors, and frustration. The challenge was to create an AI assistant that understands accounting workflows and integrates seamlessly with existing tools like Outlook, making AI accessible to every team member without technical complexity."
      solution="Wally is an AI assistant specifically designed for accounting firms. It integrates with Microsoft Outlook to search emails and extract information instantly, provides specialized expertise in Belgian tax law (VAT, corporate tax, personal income tax), performs fiscal calculations and data analysis, analyzes documents to extract key information, and drafts emails. Wally is built to be accessible to every team member, from file managers to partners, bringing information and software together so accountants can focus on work that matters."
      keyFeatures={keyFeatures}
      impact={impactFeatures}
      technologySection={{
        title: "Technology Stack",
        content:
          "Built with AI/LLM technology integrated with Microsoft Outlook and Office 365, featuring secure document processing, tax calculation engines, and natural language interfaces designed for accounting professionals.",
      }}
      relatedService={{
        statement:
          "This is an example of how Rodi Digital builds AI-powered applications for businesses — conversational AI grounded in a client's own documents and systems.",
        linkLabel: "AI-Powered Applications",
        href: "/services/ai-enabled-applications",
      }}
      ctaTitle="Ready to Transform Your Accounting Workflow?"
      ctaSubtitle="Let's build an AI assistant that integrates seamlessly with your existing tools and makes complex tasks simple."
      projectLinks={[
        {
          text: "Visit Wally",
          href: "https://wally.be/",
        },
      ]}
    />
    </>
  );
}


