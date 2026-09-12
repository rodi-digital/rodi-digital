import { HomeHero } from "@/components/ui/home-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { DetailedServicesGrid } from "@/components/ui/detailed-services-grid";
import { FAQSection } from "@/components/ui/faq-section";
import { CasesPreview } from "@/components/ui/cases-preview";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata, faqPageSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Rodi Digital | AI, Mobile & Web Development Agency",
  description:
    "Rodi Digital is an AI development agency in 's-Hertogenbosch (Den Bosch), the Netherlands. We build AI-powered applications, AI agents, cross-platform mobile apps, and high-conversion websites.",
  route: "home",
  keywords: [
    "AI development agency",
    "AI development Netherlands",
    "AI bureau Den Bosch",
    "mobile app development",
    "web development agency",
    "cross-platform apps",
    "AI chatbots",
    "Netherlands digital agency",
  ],
});

const services = [
  {
    title: "AI-Powered Applications",
    description:
      "Let AI handle the busywork while you focus on growth. We build intelligent systems that deliver real value to your team and customers.",
    illustration: "emergence",
    items: [
      "Content generation - Instant, brand-aligned copy, blogs, visuals, ads — polished at scale.",
      "Conversational agents - Chatbots and voice assistants that feel more human than ever.",
      "Process automation - Eliminate repetitive tasks and let your team do what matters.",
      "Intelligent search & Insights - Search across documents, get answers instantly.",
      "Personalization Eengine - Tailored content & experiences for each customer, powered by your data.",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Turn your app idea into reality faster than you thought possible. Launch, learn, and grow without wasting budget.",
    illustration: "frames",
    items: [
      "iOS and Android - Build once, launch on iOS + Android, without trade-offs.",
      "Rapid prototyping & launch - Validate your app idea without wasting months or budget.",
      "Engaging user experience - Keep users active with smooth flows, smart notifications, and intuitive design.",
    ],
  },
  {
    title: "Web Development",
    description:
      "Your website shouldn't just look good—it should drive growth. We design and build sites that convert clicks into customers.",
    illustration: "grid",
    items: [
      "SaaS platforms - Scalable foundations for subscription businesses.",
      "E-commerce - Smooth checkouts that reduce cart abandonment.",
      "Easy content management - Stay in control without developer bottlenecks. Update content in seconds.",
      "Company websites - Professional, fast, and built to grow with your business.",
    ],
  },
];

const homeFAQs = [
  {
    question: "What services does Rodi Digital offer?",
    answer:
      "Rodi Digital is an AI, mobile, and web development agency that builds cross-platform mobile apps, intelligent AI chatbots, and high-conversion websites for clients. In essence, they specialize in developing AI-powered applications, mobile apps, and modern websites that help businesses grow online. These services cover the full spectrum of digital product development – from smart conversational systems to user-friendly apps and conversion-focused web platforms.",
  },
  {
    question: "What is unique about Rodi Digital's approach to development?",
    answer:
      "Rodi Digital's approach is data-driven and collaborative. They believe exceptional digital products are created through a synergy of close client collaboration and deep analytics insights. In practice, this means they don't just build a product for you – they build it with you, involving you in decisions and backing every choice with real data and user feedback. This approach ensures the final product truly aligns with your vision and delivers measurable results.",
  },
  {
    question: "Who does Rodi Digital work with?",
    answer:
      "Rodi Digital works with organizations of all sizes, from nimble startups to large enterprises. They are based in the Netherlands but serve startups and established companies across Europe and worldwide. Their experience spans various industries and project scales, so they can adapt to the needs of both a new venture and a global business with equal ease.",
  },
  {
    question: "How can Rodi Digital help my business grow?",
    answer:
      "Rodi Digital acts as a partner in your digital transformation by creating digital products that drive real business growth. They use data and analytics to make sure each app or website they build contributes to your bottom line. By focusing on user experience and evidence-based improvements, Rodi Digital delivers solutions that not only meet your needs but often exceed expectations and drive measurable business growth. In short, they build scalable digital tools that help increase customer engagement, improve efficiency, and unlock new opportunities for your business.",
  },
  {
    question: "How do I start a project with Rodi Digital?",
    answer:
      'You can start by reaching out through their website\'s contact options. Simply click the "Let\'s Talk" or "Start Your Project" button on the site to get in touch. You can also contact Rodi Digital directly via email at hello@rodi-digital.com to discuss your ideas. The team welcomes inquiries – if you have a digital project in mind or want to explore how AI, mobile, or web solutions can transform your business, they\'re here to help bring your vision to life.',
  },
  {
    question: "Where is Rodi Digital located?",
    answer:
      "Rodi Digital is an AI development agency headquartered in 's-Hertogenbosch \u2014 commonly known as Den Bosch \u2014 in the Netherlands. Their office address is Stationsweg 19, 5211 TV 's-Hertogenbosch, and while they operate from the Netherlands, they collaborate with clients internationally. In fact, Rodi Digital proudly serves companies across Europe and worldwide, not just locally, so you can easily work with them even if you're not in the Netherlands.",
  },
];

const featuredCases = [
  {
    title: "Wally",
    description:
      "AI assistant for accounting firms that integrates with Outlook, provides tax expertise, and analyzes documents.",
    href: "/cases/wally",
    image: "/images/cases/wally.png",
  },
  {
    title: "IPRHQ",
    description:
      "The first integrated platform unifying IP clearance, search, watch, enforcement, portfolio management, and monitoring with AI-powered risk scoring.",
    href: "/cases/iprhq",
    image: "/images/cases/iprhq.png",
  },
  {
    title: "PEACHealth",
    description:
      "Empowering individuals with personalized, expert-backed health information through a free mobile application.",
    href: "/cases/peach",
    image: "/images/cases/peach.png",
  },
  {
    title: "DiffGraph",
    description:
      "Visualize architectural changes in every pull request with interactive dependency graphs, catching breaking changes before they ship.",
    href: "/cases/diffgraph",
    image: "/images/cases/diffgraph.png",
  },
  {
    title: "Loop Sleep",
    description:
      "An intelligent sleep companion for Loop Earplugs — conversational onboarding and AI-generated sleep rituals. Built while part of the team at Nimble.",
    href: "/cases/loop",
    image: "/images/cases/loop.png",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={faqPageSchema(homeFAQs)} />
      <HomeHero
        title="Apps, AI, and Websites Built with You"
        subtitle={[
          "We create digital products that stand the test of time, using data and analytics to drive your growth.",
        ]}
        ctaText="Let's Talk"
        ctaHref="/contact"
      />

      {/* Marquee strip */}
      <div className="border-y border-border overflow-hidden py-5 bg-background-elevated/40">
        <div className="marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-10 px-5 font-display italic text-2xl md:text-4xl text-foreground/70 whitespace-nowrap"
            >
              {[
                "AI Engineering",
                "Mobile · iOS · Android",
                "Web Platforms",
                "Data-Driven",
                "Conversational Agents",
                "Built With You",
              ].map((t) => (
                <span key={t} className="flex items-center gap-10">
                  <span className="text-primary not-italic font-mono text-base">✦</span>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <DetailedServicesGrid
        title="Our Services"
        subtitle="What We Build"
        services={services}
      />

      <CasesPreview cases={featuredCases} />

      <TwoColumnSection
        title="Data-Driven Development"
        content="At Rodi Digital, we believe that exceptional digital products are born from a synergy of close collaboration and deep, data-driven insights. We don't just build for you; we build with you, ensuring every decision is backed by real data and user feedback."
        primaryCTA={{ text: "Our Approach", href: "/approach" }}
        secondaryCTA={{ text: "Case Studies", href: "/cases" }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our services and approach"
        faqs={homeFAQs}
      />

      <FinalCTA
        title="Ready to Build Something Amazing?"
        subtitle="Let's collaborate to create a digital product that not only meets your needs but exceeds your expectations and drives measurable business growth."
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View Our Services", href: "/services" }}
      />
    </div>
  );
}
