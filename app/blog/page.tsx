import { ServiceHero } from "@/components/ui/service-hero";
import { BlogIndex } from "@/components/ui/blog-index";
import { FinalCTA } from "@/components/ui/final-cta";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata, blogIndexSchema, breadcrumbSchema } from "@/lib/seo";
import { postsByDate } from "@/lib/blog";

export const metadata = pageMetadata({
  title: "Blog — Notes on building AI that reaches production",
  description:
    "Practical writing from Rodi Digital on AI development: what it costs, when an agent beats a chatbot, how to automate without RPA, and what demos never show.",
  route: "blog",
  keywords: [
    "AI development blog",
    "AI agency insights",
    "AI project cost",
    "AI agents explained",
    "AI automation guide",
  ],
});

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <JsonLd
        data={[
          blogIndexSchema(postsByDate.map((p) => ({ name: p.title, route: p.route }))),
          breadcrumbSchema([
            { name: "Home", route: "home" },
            { name: "Blog", route: "blog" },
          ]),
        ]}
      />
      <ServiceHero
        title="Blog"
        eyebrow="§ Index — Blog"
        subtitle="Notes on the part of AI work that nobody demos: what it costs, where it breaks, and how to tell whether the technology is the right answer at all."
      />

      <BlogIndex />

      <FinalCTA
        title="Got a harder question?"
        subtitle="If your situation doesn't fit any of these articles, describe it. We'll tell you what we'd actually do."
        primaryCTA={{ text: "Start a conversation", href: "/contact" }}
        secondaryCTA={{ text: "View our services", href: "/services" }}
      />
    </div>
  );
}
