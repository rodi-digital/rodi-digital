/**
 * The single source of truth for every URL on the site.
 *
 * Navigation, the footer, breadcrumbs, canonical URLs, and the sitemap all read
 * from here, so a path is written once and a rename cannot leave a dead link
 * behind in a component nobody thought to check.
 */

export const routes = {
  home: "/",

  services: "/services",
  servicesAi: "/services/ai-enabled-applications",
  servicesMobile: "/services/mobile",
  servicesWeb: "/services/web",

  approach: "/approach",
  approachAnalytics: "/approach/analytics",
  approachCollaboration: "/approach/collaboration",

  cases: "/cases",
  caseWally: "/cases/wally",
  caseIprhq: "/cases/iprhq",
  caseLoop: "/cases/loop",
  caseDiffgraph: "/cases/diffgraph",
  caseTrai: "/cases/trai",
  casePeach: "/cases/peach",
  caseRodi: "/cases/rodi",
  caseRodiSites: "/cases/rodi-sites",

  contact: "/contact",

  blog: "/blog",
  blogCost: "/blog/what-ai-development-costs",
  blogAgents: "/blog/what-is-an-ai-agent",
  blogChatbot: "/blog/building-an-ai-chatbot-that-works",
  blogApp: "/blog/building-an-ai-app",
  blogAutomation: "/blog/ai-automation-or-rpa",
  blogAgency: "/blog/choosing-an-ai-agency",
} as const satisfies Record<string, string>;

export type RouteKey = keyof typeof routes;

export function path(key: RouteKey): string {
  return routes[key];
}
