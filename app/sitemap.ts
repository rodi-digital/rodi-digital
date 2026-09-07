import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ai-enabled-applications", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/mobile", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/web", priority: 0.8, changeFrequency: "monthly" },
  { path: "/approach", priority: 0.7, changeFrequency: "monthly" },
  { path: "/approach/analytics", priority: 0.6, changeFrequency: "monthly" },
  { path: "/approach/collaboration", priority: 0.6, changeFrequency: "monthly" },
  { path: "/cases", priority: 0.8, changeFrequency: "monthly" },
  { path: "/cases/wally", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cases/iprhq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cases/peach", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cases/diffgraph", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cases/rodi", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cases/rodi-sites", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cases/trai", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cases/loop", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
