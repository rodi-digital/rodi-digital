import { ServiceHero } from "@/components/ui/service-hero";
import { ServiceGrid } from "@/components/ui/service-grid";
import { FinalCTA } from "@/components/ui/final-cta";
import { FAQSection } from "@/components/ui/faq-section";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata, faqPageSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Approach — Data-Driven, Collaborative Development",
  description:
    "How Rodi Digital builds digital products: analytics embedded at every step and close collaboration with clients, so every decision is backed by real data and user feedback.",
  route: "approach",
  keywords: [
    "data-driven development",
    "collaborative software development",
    "analytics-driven product development",
    "agile development approach",
  ],
});

const approaches = [
  {
    title: "Analytics at the Core",
    description:
      "We believe analytics should go beyond dashboards – it should spark conversations. We embed analytics at every step of product development, turning assumptions into data-backed insights and features into tangible outcomes.",
    href: "/approach/analytics",
    illustration: "signal",
  },
  {
    title: "Collaboration",
    description:
      "We don't just build for you; we build with you. Our collaborative approach ensures a seamless partnership throughout your digital product development journey.",
    href: "/approach/collaboration",
    illustration: "converge",
  },
];

const approachFAQs = [
  {
    question: "What is Rodi Digital's overall approach to development?",
    answer:
      "Rodi Digital's approach is all about combining data-driven insights with close collaboration. They believe that the best digital products come from working in true partnership with clients and grounding decisions in real data. In practice, this means Rodi Digital involves you (the client) at every step and uses analytics and user feedback to guide the project. They often say \"we don't just build for you; we build with you,\" which captures their philosophy. By building with the client, they ensure the final product aligns with the client's vision and that every feature added is backed by evidence or clear rationale. This approach reduces miscommunication, keeps the project focused on your goals, and typically results in a more successful outcome.",
  },
  {
    question: "Why does Rodi Digital emphasize analytics in their process?",
    answer:
      "Rodi Digital emphasizes analytics because they see data as a crucial guide for making the right decisions. Many products fail because they're built on assumptions – Rodi Digital avoids that by embedding analytics at the core of development. They feel data shouldn't just live in dusty reports; it should spark conversations and shape features. By tracking user behavior and key metrics continuously, they turn guesses into data-backed insights. This approach means, for example, instead of arguing opinions on a feature, they'll look at what users are actually doing and make informed improvements. Ultimately, having analytics in place leads to a product that grows and improves based on real evidence, ensuring better ROI and a product that truly fits user needs.",
  },
  {
    question:
      "How does Rodi Digital collaborate with clients during a project?",
    answer:
      "Collaboration is at the heart of Rodi Digital's process. They work side by side with clients as one team. In fact, Rodi Digital often integrates with the client's team, maintaining a close partnership where communication is constant and transparent. As a client, you can expect frequent updates – they don't go quiet for months and surprise you later. Instead, you'll get regular progress reports and even live demos of the product as it's being built. They also schedule short sync meetings (instead of long, infrequent meetings) to ensure ideas are always aligned and any issues are caught early. Throughout the project, Rodi Digital encourages an open feedback loop, meaning you're encouraged to give honest feedback and they actively listen and adapt to it. This collaborative style ensures that the project evolves with your input, reducing the chance of misunderstandings and resulting in a product you feel ownership of.",
  },
  {
    question:
      "What are the benefits of Rodi Digital's collaborative, data-driven approach for clients?",
    answer:
      "The benefit is that you end up with a product that is much more likely to meet (or exceed) your expectations and deliver results. Because you're involved at every stage (collaboration) and because decisions are based on evidence (data-driven), there are fewer surprises and course-corrections needed. Specifically, close collaboration means the product reflects your vision and business objectives – it's built to solve the right problem, not an imagined one. The data-driven aspect means the features and improvements are validated by real user behavior, which typically leads to better user adoption and success once the product is live. Together, these principles make the development process more efficient and the outcome more effective. Clients often find this approach gives them confidence: they can see progress, understand why each decision is made, and ultimately get a digital product that delivers real value.",
  },
  {
    question: 'What does Rodi Digital mean by "built with you"?',
    answer:
      "\"Built with you\" is Rodi Digital's motto, and it encapsulates their collaborative philosophy. It means that when you work with Rodi Digital, you aren't just handing off a project and waiting until it's done – instead, you actively co-create the product with their team. They invite clients to be involved in planning, give feedback frequently, and essentially be an extension of the development team. By building with you, Rodi Digital ensures transparency (you always know what's happening) and alignment (the project stays true to your goals). This approach leads to a more personalized product and a stronger partnership. In short, \"built with you\" means Rodi Digital values your input and works together with you to bring your digital product to life, rather than making you feel like an outsider to your own project.",
  },
];

export default function ApproachPage() {
  return (
    <div className="min-h-screen">
      <JsonLd
        data={[
          faqPageSchema(approachFAQs),
          breadcrumbSchema([
            { name: "Home", route: "home" },
            { name: "Approach", route: "approach" },
          ]),
        ]}
      />
      <ServiceHero
        title="How we work"
        subtitle="We create digital products that stand the test of time, using data and analytics to drive your growth through close collaboration."
      />

      <ServiceGrid services={approaches} imageVariant="transparent" />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about our development approach"
        faqs={approachFAQs}
      />

      <FinalCTA
        title="Ready to Work Together?"
        subtitle="Discover how our collaborative, data-driven approach can transform your digital product development journey."
        primaryCTA={{ text: "Get Started Today", href: "/contact" }}
        secondaryCTA={{ text: "View Our Services", href: "/services" }}
      />
    </div>
  );
}
