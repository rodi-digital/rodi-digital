import type { Metadata } from "next";
import { path as routePath, type RouteKey } from "@/lib/routes";

export const SITE_URL = "https://www.rodi-digital.com";
const BRAND = "Rodi Digital";

/** Stable node ids so every schema block on the site resolves to one entity. */
export const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

type PageMetadataOpts = {
  title: string;
  description: string;
  keywords?: string[];
} & (
  | { route: RouteKey; path?: never }
  /** Escape hatch for pages that are not in the route map. */
  | { path: string; route?: never }
);

export function pageMetadata(opts: PageMetadataOpts): Metadata {
  const canonical = opts.route ? routePath(opts.route) : opts.path;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: `${SITE_URL}${canonical}`,
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

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
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
  route: RouteKey;
  category?: string;
  /** Cities/regions this service page targets. */
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${routePath(opts.route)}`,
    provider: { "@id": ORG_ID },
    ...(opts.category ? { serviceType: opts.category } : {}),
    ...(opts.areaServed
      ? { areaServed: opts.areaServed.map((n) => ({ "@type": "Place", name: n })) }
      : {}),
  };
}

export function breadcrumbSchema(crumbs: { name: string; route: RouteKey }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${routePath(c.route)}`,
    })),
  };
}

/** Points the contact page at the one organization node instead of restating it. */
export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}${routePath("contact")}`,
    mainEntity: { "@id": ORG_ID },
  };
}

/** Lists the blog's posts so an index page is more than a wall of links. */
export function blogIndexSchema(items: { name: string; route: RouteKey }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: `${SITE_URL}${routePath("blog")}`,
    publisher: { "@id": ORG_ID },
    blogPost: items.map((i) => ({
      "@type": "BlogPosting",
      headline: i.name,
      url: `${SITE_URL}${routePath(i.route)}`,
    })),
  };
}

/** Article schema for a blog post, attributed to the one organization node. */
export function blogPostingSchema(opts: {
  headline: string;
  description: string;
  route: RouteKey;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}${routePath(opts.route)}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    ...(opts.keywords ? { keywords: opts.keywords.join(", ") } : {}),
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "Stationsweg 19",
  addressLocality: "'s-Hertogenbosch",
  addressRegion: "Noord-Brabant",
  postalCode: "5211 TV",
  addressCountry: "NL",
};

/**
 * One node, two types: Rodi Digital is a single entity that is both an
 * organization and a local professional service. Splitting these into separate
 * nodes reads as two businesses to a knowledge graph.
 */
const organizationNode = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: BRAND,
  alternateName: ["RODI Digital", "Rodi Digital Den Bosch"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/rodi-digital-logo.svg`,
  },
  image: `${SITE_URL}/rodi-digital-logo.svg`,
  description:
    "AI development agency in 's-Hertogenbosch (Den Bosch), the Netherlands. Rodi Digital builds AI-powered applications, AI agents, conversational AI, intelligent search, and process automation, alongside cross-platform mobile apps and web platforms.",
  email: "hello@rodi-digital.com",
  vatID: "NL867887370B01",
  address: postalAddress,
  location: {
    "@type": "Place",
    name: "Rodi Digital — 's-Hertogenbosch",
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.6901,
      longitude: 5.3028,
    },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.6901,
    longitude: 5.3028,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@rodi-digital.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/rodi-digital",
    "https://github.com/rodi-digital",
  ],
  areaServed: [
    { "@type": "City", name: "'s-Hertogenbosch", alternateName: "Den Bosch" },
    { "@type": "AdministrativeArea", name: "Noord-Brabant" },
    { "@type": "Country", name: "Netherlands" },
    { "@type": "Place", name: "Europe" },
  ],
  knowsAbout: [
    "AI development",
    "AI agents",
    "Conversational AI",
    "Large Language Models",
    "Retrieval-augmented generation",
    "Intelligent search",
    "Process automation",
    "Mobile app development",
    "Web development",
    "Product analytics",
  ],
  priceRange: "$$",
  currenciesAccepted: "EUR",
};

const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: BRAND,
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

/** Emitted once, in the root layout. Every other page references it by @id. */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationNode, websiteNode],
};
