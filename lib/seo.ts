import type { Metadata } from "next";

export const SITE_URL = "https://www.rodi-digital.com";
const BRAND = "Rodi Digital";

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: `${SITE_URL}${opts.path}`,
      type: "website",
    },
    twitter: {
      title: opts.title,
      description: opts.description,
      card: "summary_large_image",
    },
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
  };
}

export function faqPageSchema(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: {
      "@type": "Organization",
      name: BRAND,
      url: SITE_URL,
    },
    ...(opts.category ? { serviceType: opts.category } : {}),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BRAND,
  url: SITE_URL,
  logo: `${SITE_URL}/rodi-digital-logo.svg`,
  image: `${SITE_URL}/rodi-digital-logo.svg`,
  telephone: "+31 73 000 0000",
  email: "hello@rodi-digital.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stationsweg 19",
    addressLocality: "'s-Hertogenbosch",
    postalCode: "5211 TV",
    addressCountry: "NL",
  },
  areaServed: ["NL", "EU", "US"],
  priceRange: "$$",
  sameAs: [
    "https://www.linkedin.com/company/rodi-digital",
    "https://github.com/rodi-digital",
  ],
};
