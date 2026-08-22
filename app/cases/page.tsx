import { ServiceHero } from "@/components/ui/service-hero";
import { ServiceGrid } from "@/components/ui/service-grid";
import { FinalCTA } from "@/components/ui/final-cta";
import { FAQSection } from "@/components/ui/faq-section";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata, faqPageSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies — AI, Mobile & Web Projects",
  description:
    "Explore Rodi Digital's portfolio: AI assistants, cross-platform mobile apps, and high-conversion websites built for clients across health, sport, legal, and accounting.",
  path: "/cases",
  keywords: [
    "software development case studies",
    "AI app portfolio",
    "mobile app case studies",
    "web development portfolio",
    "Netherlands agency projects",
  ],
});

const cases = [
  {
    title: "IPRHQ",
    description:
      "The first integrated platform unifying IP clearance, search, watch, enforcement, portfolio management, and monitoring into one unified system with AI-powered risk scoring.",
    href: "/cases/iprhq",
    image: "/images/cases/iprhq.png",
  },
  {
    title: "DiffGraph",
    description:
      "Visualize architectural changes in every pull request with interactive dependency graphs, catching breaking changes before they ship and optimizing code review workflows.",
    href: "/cases/diffgraph",
    image: "/images/cases/diffgraph.png",
  },
  {
    title: "Wally",
    description:
      "AI assistant for accounting firms that integrates with Outlook, provides tax expertise, performs calculations, and analyzes documents to streamline accounting workflows.",
    href: "/cases/wally",
    image: "/images/cases/wally.png",
  },
  {
    title: "PEACHealth",
    description:
      "Empowering individuals with personalized, expert-backed health information through a free mobile application, fostering informed decision-making and improved patient engagement.",
    href: "/cases/peach",
    image: "/images/cases/peach.png",
  },
  {
    title: "Rodi",
    description:
      "A free, privacy-focused bike computer app offering seamless route guidance, comprehensive performance tracking, and Strava integration, all without ads or subscriptions.",
    href: "/cases/rodi",
    image: "/images/cases/rodi.png",
  },
  {
    title: "Trai",
    description:
      "An AI-powered triathlon training plan generator that delivers personalized, adaptive training schemas, optimizing performance and simplifying planning for athletes.",
    href: "/cases/trai",
    image: "/images/cases/trai.png",
  },
  {
    title: "Rodi Sites",
    description:
      "A subscription-based website platform delivering professional, SEO-optimized websites for Dutch small businesses from €75/month — no upfront costs, everything included.",
    href: "/cases/rodi-sites",
    image: "/images/cases/rodi-sites.png",
  },
  {
    title: "Loop Sleep",
    description:
      "An intelligent sleep companion for Loop Earplugs — conversational onboarding, AI-generated sleep rituals, and persistent storytelling. Built while part of the team at Nimble.",
    href: "/cases/loop",
    image: "/images/cases/loop.png",
  },
];

const casesFAQs = [
  {
    question: "What kinds of projects has Rodi Digital worked on?",
    answer:
      "Rodi Digital's portfolio spans several industries and types of digital products. For example, they've developed a healthcare mobile app that delivers personalized medical information (the PEACHealth app), a sports/cycling app that serves as a bike computer for route guidance and tracking (the Rodi bike app), and an AI-driven fitness platform for triathlon training (the TRAI training plan generator). These case studies show their versatility: one project in health tech, one in sport/fitness tech, and others leveraging AI. In each case, Rodi Digital took on the client's vision – whether it was improving patient education, enhancing athletic training, or creating a new digital service – and built a product to fulfill that vision.",
  },
  {
    question: "What do Rodi Digital's case studies demonstrate?",
    answer:
      "The case studies demonstrate how Rodi Digital turns client visions into successful digital products. Each case study walks through the challenge the client was facing, the solution Rodi Digital crafted, and the results or impact of that solution. Through these stories, you see Rodi Digital's capabilities in action: their strategic thinking, technical skills, and focus on measurable outcomes. For instance, you'll find details on how they tackled the overwhelming landscape of health information in PEACHealth and empowered patients with trustworthy guidance. You'll also see how they built a cyclist-focused app that solved navigation and tracking issues riders face, and how an AI fitness coach was created to adapt to athletes' needs. Overall, the case studies highlight Rodi Digital's ability to solve complex problems with creative, user-centered technology – and to deliver projects that make a real difference for the client and end-users.",
  },
  {
    question: "How has Rodi Digital helped clients through these projects?",
    answer:
      "In each project, Rodi Digital addressed a specific pain point for their client and delivered a solution that had a meaningful impact. For example, in the PEACHealth project, they helped a healthcare initiative provide patients with personalized, credible health information, cutting through the noise of the internet so individuals could make informed decisions about their health. In the Rodi cycling app project (an internal project of theirs), they solved the problem of cyclists needing a simple way to follow routes and track stats by creating a free, easy-to-use bike computer app that doesn't distract riders. And with the TRAI platform, they gave triathletes an AI-powered coach that generates custom training plans, saving athletes time and optimizing their performance training. In all these cases, Rodi Digital's involvement meant the client (or target users) got a product that significantly improved their situation – be it more empowered patients, happier cyclists, or better-prepared athletes. These outcomes show Rodi Digital's commitment to not just delivering software, but solving real-world problems for its clients.",
  },
  {
    question: "Where can I find details about Rodi Digital's case studies?",
    answer:
      'Detailed case studies are available on Rodi Digital\'s website under the "Case Studies" or "Portfolio" section. Each major project has its own page – for instance, PEACHealth, Rodi, and TRAI each have a dedicated case study page. On those pages, you\'ll find an in-depth breakdown including the project challenge (the problem to be solved), our solution (how Rodi Digital approached and built the product), the key features of the solution, and the results & impact achieved. These case study pages are a great resource to understand what was done and the value it delivered. Just navigate to the Cases section of the site and select the case you\'re interested in to read the full story.',
  },
  {
    question:
      "What do these case studies say about Rodi Digital's capabilities?",
    answer:
      "The diversity and success of the case studies speak volumes about Rodi Digital's capabilities. They show that Rodi Digital can handle cutting-edge AI integration, like building an AI that generates triathlon training plans, as well as solid mobile and web development, like creating a robust cross-platform app for cyclists or a content-rich health information app. The case studies highlight Rodi Digital's strengths in understanding user needs and crafting engaging user experiences – for example, the improved patient engagement in PEACHealth where users felt more empowered in health decisions. They also show Rodi's focus on data and results, such as the cycling app leading to higher user engagement (riders coming back for more rides and sharing routes). In essence, the case studies confirm that Rodi Digital is capable of delivering complex, innovative projects that deliver real, measurable benefits. Whether it's leveraging AI for personalization, building seamless mobile user interfaces, or designing scalable platforms, Rodi Digital has demonstrated expertise across the board.",
  },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen">
      <JsonLd
        data={[
          faqPageSchema(casesFAQs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/cases" },
          ]),
        ]}
      />
      <ServiceHero
        title="Case Studies"
        subtitle="Explore how Rodi Digital has partnered with clients to transform their visions into successful, impactful digital products."
      />

      <ServiceGrid services={cases.map((c) => ({ ...c, href: c.href }))} />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about our case studies and portfolio"
        faqs={casesFAQs}
      />

      <FinalCTA
        title="Ready to Create Your Success Story?"
        subtitle="Let's partner together to transform your vision into a successful, impactful digital product that drives real business value."
        primaryCTA={{ text: "Get Started Today", href: "/contact" }}
        secondaryCTA={{ text: "View Our Services", href: "/services" }}
      />
    </div>
  );
}
