import { ArticleLayout, type ArticleSection } from "@/components/ui/article-layout";
import { JsonLd } from "@/components/ui/json-ld";
import {
  pageMetadata,
  blogPostingSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { postFor } from "@/lib/blog";

const ROUTE = "blogApp";
const post = postFor(ROUTE);

export const metadata = pageMetadata({
  title: "Building an AI app: what a demo doesn't tell you",
  description:
    "AI in an app always demos well. The questions that decide whether it survives year two are about cost per user, offline behaviour, and consent.",
  route: ROUTE,
  keywords: [
    "build an AI app",
    "AI mobile app development",
    "React Native AI app",
    "AI app cost per user",
  ],
});

const sections: ArticleSection[] = [
  {
    heading: "Why does a demo prove nothing?",
    paragraphs: [
      "Because a demo has one user, one network, and one carefully chosen example.",
      "The questions that decide whether the app survives year two never appear in it. What happens when the network drops? When the model is slow? When the answer is wrong? And when there are ten thousand users each costing money every month?",
      "Those are design questions, not implementation details. They belong at the start, not once the app is already in the store.",
    ],
  },
  {
    heading: "What does one user cost per month?",
    paragraphs: [
      "This is the difference between an AI app and an ordinary one. In an ordinary app an extra user is effectively free. In an AI app every user costs money each month in model usage.",
      "Work it out at realistic volumes before you start. An app that works technically but loses money per user is still a problem — you just find it at the moment you grow, which is the worst possible timing.",
      "Caching, smaller models where they suffice, and sensible limits decide whether your business model holds at ten thousand users. Those choices live in the architecture, not in a later tuning pass.",
    ],
  },
  {
    heading: "What happens when it goes wrong?",
    paragraphs: [
      "Network gone. Model slow. Answer unusable. In all three the app still has to do something sensible.",
      "On Loop Sleep, the sleep companion we built for Loop Earplugs, that got very concrete. Switching to streaming text-to-speech meant audio started playing while the rest was still being generated. Just before sleep, a ritual has to feel right immediately — a loading screen takes exactly that away.",
      "Choices like that never show up in a demo. They do decide whether someone opens the app a second time.",
    ],
  },
  {
    heading: "Privacy is a store requirement, not a preference",
    paragraphs: [
      "What data the app sends, where it goes, and what the user gets to say about it: in the app stores there is no way around this.",
      "So decide early where the model runs and what data it sees. That partly determines which models are usable. Discover it during review and your launch slips.",
    ],
  },
  {
    heading: "Where does AI genuinely add something?",
    paragraphs: ["In practice, in three places. Outside them, rarely."],
    bullets: [
      {
        title: "Onboarding that feels like a conversation",
        text: "Instead of an eight-screen form. Loop Sleep opens by asking what kind of night it is, and builds the whole ritual from the answer.",
      },
      {
        title: "Content generated per user",
        text: "Rather than pulled from a fixed library. That solves the content fatigue audio apps usually hit within a week.",
      },
      {
        title: "Recommendations from real behaviour",
        text: "As Trai does with triathlon plans built from the Strava data an athlete already generates.",
      },
    ],
  },
  {
    heading: "And where it does not",
    paragraphs: [
      "On features a simple rule or a good search box would handle just as well. There you are adding cost, latency, and uncertainty, and nothing else.",
      "The sober starting point: begin with the feature someone would actually open the app for, and only then decide whether AI is the best way to deliver it. Loop Sleep V1.0 shipped in four weeks on a ruthlessly scoped list — everything that missed the date was explicitly deferred, not dropped. Apps that start with everything at once rarely reach a second release.",
    ],
  },
];

const faqs = [
  {
    question: "What does it cost to build an AI app?",
    answer:
      "An app with AI features has two kinds of cost: the build and the usage. The build is driven by the number of screens, the integrations with existing systems, and whether you want one platform or two. The usage is what makes AI different: every user costs money each month in model usage, and that scales with your success. Work it out in advance at realistic user numbers, because an app that works technically but loses money per user is still a problem.",
  },
  {
    question: "Do you build for iOS and Android at the same time?",
    answer:
      "Yes. We work with React Native and Expo, so one codebase runs on both platforms. That saves time and budget and keeps functionality identical, which matters most while you are still working out what the app should do. Where a platform genuinely needs something of its own, we build that specifically — choosing one codebase does not lock you in.",
  },
  {
    question: "What does AI actually add to an app?",
    answer:
      "In practice, mostly three things. Onboarding that feels like a conversation instead of a form, as in Loop Sleep. Content generated per user rather than pulled from a fixed library. And recommendations based on behaviour and data, as Trai does with training plans built on Strava data. Where AI adds little: features that a simple rule or a good search box would handle just as well.",
  },
  {
    question: "What happens when the network drops or the model is slow?",
    answer:
      "That should be a design decision, not an accident. In those situations the app still has to do something sensible: show an earlier result, offer a simpler variant, or make clear what is going on. With Loop Sleep we solved the latency with streaming text-to-speech, so audio began playing while the rest was still being generated. Choices like that decide whether someone opens the app a second time.",
  },
];

export default function ArticlePage() {
  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema({
            headline: post.title,
            description: post.excerpt,
            route: ROUTE,
                      datePublished: post.datePublished,
            keywords: ["build an AI app", "AI app cost per user"],
          }),
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", route: "home" },
            { name: "Blog", route: "blog" },
            { name: "Building an AI app", route: ROUTE },
          ]),
        ]}
      />
      <ArticleLayout
        title={post.title}
        lead="An AI feature in an app is easy to demo and surprisingly hard to keep running. The questions that decide whether it survives year two are rarely about the model — and nearly always about cost per user, behaviour without a network, and what you do with people's data."
        datePublished={post.datePublished}
        readingTime={post.readingTime}
        sections={sections}
        ctaTitle="Start with that one feature"
        ctaSubtitle="Once you know what someone would open your app for, we can plan a first version that reaches real users quickly. The rest follows from what they do."
      />
    </>
  );
}
