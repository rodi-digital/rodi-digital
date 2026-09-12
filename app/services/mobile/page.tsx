import { ServiceHero } from "@/components/ui/service-hero";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { MinimalListSection } from "@/components/ui/minimal-list-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { FAQSection } from "@/components/ui/faq-section";
import { JsonLd } from "@/components/ui/json-ld";
import {
  pageMetadata,
  faqPageSchema,
  serviceSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mobile App Development — iOS & Android (React Native)",
  description:
    "Cross-platform mobile app development with React Native and Expo. Launch on iOS and Android from one codebase, fast, with analytics built in from day one.",
  route: "servicesMobile",
  keywords: [
    "mobile app development",
    "cross-platform apps",
    "React Native development",
    "iOS and Android apps",
    "Expo development",
    "MVP app development",
  ],
});

const strengthsCards = [
  {
    title: "Cross-platform coverage",
    description:
      "One codebase for iOS and Android. Reach your full audience faster and keep maintenance simple.",
  },
  {
    title: "MVP that learns",
    description:
      "Ship a focused first version, measure what users do, and invest only in features that prove their value.",
  },
  {
    title: "Push notifications done right",
    description:
      "Send timely, relevant messages that bring users back without annoying them. Drive retention with intent, not volume.",
  },
  {
    title: "Data-driven iteration",
    description:
      "Tracking is built in from the start. Every update is guided by real behavior, not guesswork.",
  },
  {
    title: "Agile solo delivery",
    description:
      "Work directly with the builder. Clear communication, fast turnarounds, and a product that fits your needs.",
  },
  {
    title: "Fast time to market",
    description:
      "Short cycles, clean scope, and a clear plan. Launch sooner, learn sooner, grow sooner.",
  },
];

const technologiesCards = [
  {
    title: "React Native and Expo",
    description:
      "Native performance with a single codebase, quick builds, and smooth updates over the air.",
  },
  {
    title: "Analytics integration",
    description:
      "Instrumentation from day one with Firebase, Mixpanel, or a custom setup. Track key flows, retention, and engagement so you know what to improve next.",
  },
];

const mobileFAQs = [
  {
    question: "Why choose cross-platform mobile app development?",
    answer:
      "Cross-platform development allows you to reach both iOS and Android users with a single codebase. Rodi Digital uses this approach so that you don't need to build two separate apps for the Apple and Google app stores. The benefit is a faster development process and consistent features for all users. With one codebase for iOS and Android, you can launch to the entire mobile market at once, reduce maintenance efforts, and ensure a uniform experience across devices. It's an efficient way to maximize your app's audience and impact without doubling the cost.",
  },
  {
    question: "How can Rodi Digital launch my app quickly and within budget?",
    answer:
      "Rodi Digital accelerates time-to-market by focusing on a Minimum Viable Product (MVP) strategy. They will help you ship a focused first version of your app that contains the core features needed to test your concept. This means no wasted months on nice-to-have features before getting user feedback. By launching quickly and gathering real user data, they ensure you invest further only in features that prove valuable to your users. Their agile development process, short development cycles, and clear scope definition all contribute to delivering an initial app fast, without blowing the budget. In summary, Rodi Digital's \"launch, learn, and iterate\" approach helps you get a usable app in users' hands sooner and grow it smartly from there.",
  },
  {
    question: "How does Rodi Digital ensure my mobile app meets user needs?",
    answer:
      "Rodi Digital takes a data-driven approach to mobile development. They build analytics into the app from day one, which means from the moment your app launches (and even during beta testing), they are tracking how real users interact with it. This instrumentation can include tracking of key flows, feature usage, retention rates, and more, using tools like Firebase or Mixpanel. By having this data, Rodi Digital can see what users love and what might be causing friction. Every update or new feature is then guided by these real user insights rather than guesswork. This ensures the app evolves in a direction that genuinely meets user needs and preferences. In practice, you'll know what features to double down on and which ones might need redesign – resulting in a product that closely aligns with what your audience wants.",
  },
  {
    question: "What technologies does Rodi Digital use for mobile development?",
    answer:
      "Rodi Digital uses modern, proven technologies to build mobile apps efficiently. A primary framework they leverage is React Native (with Expo), which allows for near-native performance on both iOS and Android while using one codebase. This means your app runs smoothly on both platforms and can receive updates over-the-air quickly. Additionally, they incorporate analytics tools from the start – for example, integrating Firebase Analytics, Mixpanel, or a custom analytics setup to monitor user engagement and performance metrics. With React Native and Expo, you get the benefit of rapid development and deployment, and with built-in analytics, you get continuous insights into how your app is performing and where it can improve.",
  },
  {
    question: "Can Rodi Digital help scale my mobile app as it grows?",
    answer:
      "Yes, absolutely. Whether you're starting with a small MVP or already have a mature product, Rodi Digital plans for growth from the beginning. Their agile, data-driven process means they can iterate quickly as your user base expands. In fact, they explicitly state they can help validate a new concept or scale a mature product, launching fast and then improving the app with data-informed updates. As your app gains more users, Rodi Digital will use analytics to identify performance bottlenecks or opportunities for new features and optimize accordingly. Their cross-platform approach and clean code practices also make it easier to add functionality or handle increased load. In short, Rodi Digital is equipped to support your app's evolution at every stage – from initial launch to scaling up with many users.",
  },
];

export default function MobilePage() {
  return (
    <div className="min-h-screen">
      <JsonLd
        data={[
          serviceSchema({
            name: "Mobile Development",
            description:
              "Cross-platform mobile app development for iOS and Android using React Native and Expo, with analytics built in from day one.",
            route: "servicesMobile",
                      category: "Mobile App Development",
          }),
          faqPageSchema(mobileFAQs),
          breadcrumbSchema([
            { name: "Home", route: "home" },
            { name: "Services", route: "services" },
            { name: "Mobile Development", route: "servicesMobile" },
          ]),
        ]}
      />
      <ServiceHero
        title="Mobile Development"
        subtitle="Building an app should not take forever or blow your budget. You want something people can actually use, on iOS and Android, without guessing which features matter. We help you launch fast, learn from real users, and improve with confidence."
      />

      <MinimalCardGrid
        title="Our Mobile Development Strengths"
        description="You need momentum, not meetings. Here is how we keep your app moving forward."
        cards={strengthsCards}
        columns="2"
      />

      <MinimalListSection
        title="Technologies We Use"
        description="Proven tools that help you move fast and stay flexible."
        items={technologiesCards}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about mobile app development"
        faqs={mobileFAQs}
      />

      <FinalCTA
        title="Ready to turn your idea into reality?"
        subtitle="Whether you want to validate a new concept or scale a mature product, we will help you launch fast and improve with data."
        primaryCTA={{
          text: "Let's Build Something Together",
          href: "/contact",
        }}
        secondaryCTA={{ text: "View All Services", href: "/services" }}
      />
    </div>
  );
}
