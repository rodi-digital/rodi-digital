import { ArticleLayout, type ArticleSection } from "@/components/ui/article-layout";
import { JsonLd } from "@/components/ui/json-ld";
import {
  pageMetadata,
  blogPostingSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { postFor } from "@/lib/blog";

const ROUTE = "blogAgency";
const post = postFor(ROUTE);

export const metadata = pageMetadata({
  title: "How to choose an AI agency",
  description:
    "Most AI projects fail on everything around the model, not the model itself. Six questions that reveal whether an agency has shipped AI into production before.",
  route: ROUTE,
  keywords: [
    "choosing an AI agency",
    "AI development agency",
    "AI partner selection",
    "hire AI developers",
  ],
});

const sections: ArticleSection[] = [
  {
    heading: "What does an AI agency actually do?",
    paragraphs: [
      "An AI agency designs, builds, and maintains AI applications for other companies. That is not the same as an agency that buys existing tools and configures them. At an AI development agency, software gets written — shaped around your data and your systems.",
      "The distinction sounds semantic. It is not. Configuring a tool takes days; building an application that reads your contracts, hangs off your CRM, and can demonstrate its answers are right takes months and costs accordingly.",
      "So ask early which of the two you are sitting across from. Both are legitimate. The price, the timeline, and what you are left holding are completely different.",
    ],
  },
  {
    heading: "What is running in production today?",
    paragraphs: [
      "This question separates agencies faster than anything else. Not what has been built — what is running now, who uses it, and how long it has survived.",
      "Building a demo is an afternoon's work. The difference lives in the months after: permissions and access, error handling, cost per request, and being able to show the answer means something. Agencies that have never been through that phase underestimate it consistently, and you pay the gap.",
      "Listen for what is not said, too. If the conversation stays on pilots and proofs of concept, you already have your answer.",
    ],
  },
  {
    heading: "When would they talk you out of AI?",
    paragraphs: [
      "Ask it literally. The answer tells you more than a portfolio does.",
      "A workable rule: AI is promising when the work is language or documents, when there is real repetition in it, and when no rule can be written that solves it. If your process fits into a handful of if-then rules, ordinary software is cheaper, faster, more predictable — and you can explain afterwards why something happened.",
      "An agency that answers every question with AI is selling its inventory. The ones willing to turn work down usually have enough work.",
    ],
  },
  {
    heading: "How do they prove the answer is right?",
    paragraphs: [
      "This is where agencies without production experience run out of road.",
      "What you want to hear has three parts. A test set built from your own edge cases, so every change is measurably better or worse. Answers that cite the source they came from. And an explicit floor: too little grounding means the system says it does not know, rather than producing something plausible.",
      "Miss those three and you do not have an application, you have a well-dressed guess. On Wally, the assistant we built for accounting firms, this was the heaviest part of the work — a tax answer is worthless without the official source underneath it. A confidently wrong answer about VAT does more damage than no answer.",
    ],
  },
  {
    heading: "What does it cost once it is running?",
    paragraphs: [
      "With AI the build is not the only invoice. Every request costs money in model usage, and that figure grows with your usage instead of staying flat.",
      "An agency that has done this before works it out at realistic volumes up front: what does this cost per month at a hundred users, and at ten thousand? An application that works technically but loses money per user is still a problem. You just discover it at the moment things start going well.",
      "Ask who can move that number, too. Caching, a smaller model where one will do, how much context you send per request — those are architecture decisions. Retrofitting them is expensive.",
    ],
  },
  {
    heading: "Does location still matter?",
    paragraphs: [
      "Not for the code. For the project, yes — though not for the reason people usually give.",
      "AI projects live or die on access to the people who currently do the work. The questions that decide the outcome are about exceptions, habits, and unwritten rules. Those surface when you sit next to someone for a morning. Not in an hour-long video call with eight attendees.",
      "If your agency is far away, ask how they arrange that access instead. \u201cWe work remotely\u201d only counts when there is a plan behind it.",
    ],
  },
  {
    heading: "The questions, collected",
    paragraphs: [
      "These fit into a single half-hour meeting. Together they give a surprisingly complete picture.",
    ],
    bullets: [
      {
        title: "What is in production today, and for how long?",
        text: "Demos say nothing about the phase where the money goes.",
      },
      {
        title: "When would you advise against AI?",
        text: "No answer means you are talking to a salesperson.",
      },
      {
        title: "How do you prove the answer is right?",
        text: "A test set from our edge cases, source citation, and an explicit floor. All three, not one of three.",
      },
      {
        title: "What does this cost per month at ten thousand users?",
        text: "Model usage recurs and grows. If they have not worked it out, they have not shipped it.",
      },
      {
        title: "How will you reach our people?",
        text: "The exceptions that make or break the project are documented nowhere.",
      },
      {
        title: "Who owns the code afterwards?",
        text: "And where does it run. Ask now, not at handover.",
      },
    ],
  },
];

const faqs = [
  {
    question: "What is an AI agency?",
    answer:
      "An AI agency designs, builds, and maintains AI applications for other companies. That is different from an agency that buys ready-made AI tools and configures them: an AI development agency writes software shaped around your data, processes, and systems. In practice that means AI-powered applications, AI agents, conversational AI, intelligent search, and process automation.",
  },
  {
    question: "How do I spot an AI agency that only builds demos?",
    answer:
      "Ask what is running in production today and for how long. Then ask how they prove an answer is correct. An agency with production experience will bring up a test set built from your own edge cases, source citation on answers, and a floor below which the system says it does not know. If the conversation stays on pilots and proofs of concept, you will be paying the tuition for the phase they have not reached yet.",
  },
  {
    question: "Should an AI agency ever tell me not to use AI?",
    answer:
      "Yes, and it is a good sign when they do. If your process fits into a handful of if-then rules, classic software is cheaper, faster, and more reliable than a language model. AI earns its place where the input varies every time or where language has to be understood. An agency that answers every question with AI is selling its inventory rather than solving your problem.",
  },
  {
    question: "What does an AI project cost to run, not just to build?",
    answer:
      "Every request costs money in model usage, and that cost scales with usage rather than staying flat. Before you commit, ask for the monthly figure at realistic volumes — at a hundred users and at ten thousand. Caching, model choice, and how much context gets sent on each request are design decisions that move this number substantially, so they belong in the first conversation rather than in a later optimisation round.",
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
            keywords: ["choosing an AI agency", "AI development agency"],
          }),
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", route: "home" },
            { name: "Blog", route: "blog" },
            { name: "Choosing an AI agency", route: ROUTE },
          ]),
        ]}
      />
      <ArticleLayout
        title={post.title}
        lead="Every AI agency can build an impressive demo now. That takes an afternoon. Whether they have ever carried one of those demos into production is an entirely different question — and it is the one your budget hangs on."
        datePublished={post.datePublished}
        readingTime={post.readingTime}
        sections={sections}
        ctaTitle="Point them at us"
        ctaSubtitle="We would rather answer these across a table in half an hour than in a twenty-page proposal. Mail hello@rodi-digital.com and name the process that is eating the most time."
      />
    </>
  );
}
