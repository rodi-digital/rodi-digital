import type { RouteKey } from "@/lib/routes";

/**
 * Index metadata for every blog post.
 *
 * The post bodies live in their route files; this holds only what the index,
 * the footer, and the schema need.
 */

export type BlogPost = {
  route: RouteKey;
  datePublished: string;
  readingTime: string;
  title: string;
  excerpt: string;
  topic: string;
};

export const posts: BlogPost[] = [
  {
    route: "blogAgency",
    datePublished: "2025-09-16",
    readingTime: "7 min read",
    title: "How to choose an AI agency",
    excerpt: "Most AI projects fail on everything around the model, not the model itself. Six questions that tell you whether an agency has shipped AI into production before.",
    topic: "Choosing a partner",
  },
  {
    route: "blogCost",
    datePublished: "2025-11-25",
    readingTime: "8 min read",
    title: "What AI development actually costs",
    excerpt: "Three factors drive the price, and one of them is a running cost that scales with your success. What to budget for before you start.",
    topic: "Budget",
  },
  {
    route: "blogAgents",
    datePublished: "2026-01-27",
    readingTime: "7 min read",
    title: "What is an AI agent, and when do you need one?",
    excerpt: "A chatbot answers; an agent acts. That difference makes agents more useful and more dangerous — which is why boundaries matter more than autonomy.",
    topic: "AI agents",
  },
  {
    route: "blogChatbot",
    datePublished: "2026-03-24",
    readingTime: "8 min read",
    title: "Building an AI chatbot that doesn't make things up",
    excerpt: "Most failed chatbots were never given a boundary, a source, or a way to say “I don't know”. Here is the order to build them in.",
    topic: "Conversational AI",
  },
  {
    route: "blogAutomation",
    datePublished: "2026-06-02",
    readingTime: "6 min read",
    title: "AI automation or RPA: which one does your process need?",
    excerpt: "If your process fits in a handful of if-then rules, AI is the expensive answer. A practical test for telling the two apart.",
    topic: "Automation",
  },
  {
    route: "blogApp",
    datePublished: "2026-08-19",
    readingTime: "7 min read",
    title: "Building an AI app: what a demo doesn't tell you",
    excerpt: "AI in an app always demos well. The questions that decide whether it survives year two are about cost per user, offline behaviour, and consent.",
    topic: "App development",
  },
];

/** Newest first, which is the order both blog indexes render in. */
export const postsByDate = [...posts].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished),
);

export function postFor(route: RouteKey): BlogPost {
  const found = posts.find((p) => p.route === route);
  if (!found) throw new Error(`No blog post registered for route "${route}"`);
  return found;
}
