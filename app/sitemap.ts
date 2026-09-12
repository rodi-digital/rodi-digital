import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { routes, type RouteKey } from "@/lib/routes";

/**
 * Derived from the route map, so a new page is in the sitemap the moment it has
 * a route — no second list to forget to update.
 */
const PRIORITY: Partial<Record<RouteKey, number>> = {
  home: 1,
  services: 0.9,
  blog: 0.9,
  cases: 0.8,
  contact: 0.8,
};

const CHANGE_FREQUENCY: Partial<
  Record<RouteKey, MetadataRoute.Sitemap[number]["changeFrequency"]>
> = { contact: "yearly" };

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return (Object.keys(routes) as RouteKey[]).map((key) => ({
    url: `${SITE_URL}${routes[key]}`,
    lastModified: now,
    changeFrequency: CHANGE_FREQUENCY[key] ?? ("monthly" as const),
    priority: PRIORITY[key] ?? (key.startsWith("blog") ? 0.7 : 0.75),
  }));
}
