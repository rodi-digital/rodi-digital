import { ArticleLayout, type ArticleSection } from "@/components/ui/article-layout";
import { JsonLd } from "@/components/ui/json-ld";
import {
  pageMetadata,
  blogPostingSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { postFor } from "@/lib/blog";

const ROUTE = "blogCost";
const post = postFor(ROUTE);

export const metadata = pageMetadata({
  title: "What AI development actually costs",
  description:
    "Three factors drive the price of AI development, and one of them is a running cost that scales with your success. What to budget for before you start.",
  route: ROUTE,
  keywords: [
    "AI development cost",
    "AI project budget",
    "cost of building AI",
    "LLM running costs",
  ],
});

const sections: ArticleSection[] = [
  {
    heading: "Why won't anyone quote you over the phone?",
    paragraphs: [
      "Because three things drive the price and none of them is settled in a first conversation: how many systems have to be connected, what state your data is in, and how much it matters when the answer is wrong.",
      "The third one surprises most people. An application that drafts something a colleague reviews anyway is a fraction of the work of one that has to justify a tax answer with an audit trail. Same technology. Completely different project.",
      "Anyone quoting a number without knowing those three is guessing. And guessing in their own favour.",
    ],
  },
  {
    heading: "How many systems have to be connected?",
    paragraphs: [
      "One clean data source is straightforward. Running inside Outlook, pulling records from your CRM, reading documents out of your archive, and writing results back to a fourth system is not.",
      "Every integration brings its own questions. Is there an API? Who is allowed to see what? What happens when that system is down for an hour? The work is estimable, but it is never zero — and it is almost always the part that overruns.",
      "So map early which systems genuinely have to be involved. Not which ones could conceivably be involved. That is the fastest way to double an estimate.",
    ],
  },
  {
    heading: "How messy is your data?",
    paragraphs: [
      "Messy is normal. Documents in fifty layouts, scanned PDFs, fields everyone fills in differently — we plan for that. Dealing with it is part of the work.",
      "What does block a project is different. Data we are not allowed to touch, or data nobody owns. The first is a legal question, the second an organisational one. Technology solves neither, and both cost weeks when they surface halfway through.",
      "So your data does not need to be clean to start. It needs to be reachable, and somebody needs to be able to explain how it is put together.",
    ],
  },
  {
    heading: "What does a wrong answer cost?",
    paragraphs: [
      "This factor explains most of the budget, and it is the one that most often comes up only once building has started.",
      "If a wrong answer means somebody redoes a task, you can build lightly. If it reaches a customer, costs money, or creates liability, a series of things arrive with it: source citation on every answer, a test set from your edge cases, approval before anything irreversible, and logging that lets you reconstruct what happened and why.",
      "None of that is luxury. In regulated work it is the condition for being allowed to run at all.",
    ],
  },
  {
    heading: "Then there is the bill that keeps arriving",
    paragraphs: [
      "Every request costs money in model usage. That figure does not stay flat — it grows with your usage.",
      "Work it out in advance at realistic volumes. What does this cost per month at a hundred users, and at ten thousand? An application that works technically but loses money per user is still a problem. You just find out once things go well, and by then you are committed.",
      "Caching, a smaller model where one will do, and how much context you send per request: those three move the number substantially. They are architecture decisions, not settings you switch on later.",
    ],
  },
  {
    heading: "How do you keep it under control?",
    paragraphs: [
      "Break it up. One scoped process, its own budget, its own decision point at the end.",
      "After that first working version you will know roughly what a second process costs — measured against your reality rather than a generic benchmark. And if the first version disappoints, you have lost one process instead of an annual budget.",
    ],
    bullets: [
      {
        title: "One process at a time",
        text: "With its own budget and a point where you can stop.",
      },
      {
        title: "Model the usage cost first",
        text: "Cost per request times realistic volumes. Before you start, not after.",
      },
      {
        title: "Price the failure mode",
        text: "That answer sets roughly half the budget, so ask it in the first conversation.",
      },
      {
        title: "Ask about the road to production",
        text: "Permissions, error handling, logging, measurement. This is where estimates come apart.",
      },
    ],
  },
];

const faqs = [
  {
    question: "What does AI development cost?",
    answer:
      "The price is driven by three things: how many systems have to be connected, the state of your data, and how costly a wrong answer is. A scoped automation over one clean data source is a fraction of what an assistant costs that runs inside Outlook, has to justify tax answers, and needs an audit trail. On top of the build there are running costs for model usage that scale with your number of users. A defensible estimate therefore comes out of a conversation rather than a price list.",
  },
  {
    question: "What are the running costs of an AI application?",
    answer:
      "Every request costs money in model usage, and that amount scales with usage rather than staying flat. Work out in advance what the application costs per month at a hundred users and at ten thousand. Caching, choosing a smaller or larger model, and how much context you send per request move this number substantially. They are design decisions, not settings you adjust afterwards.",
  },
  {
    question: "Does our data need to be clean before we start?",
    answer:
      "Not perfect, but reachable. If the documents can be found and someone can explain how they are structured, that is enough to begin. Messy data is the norm rather than the exception, and part of the work is precisely dealing with it. What does block a project is data we are not allowed to access, or data nobody owns — legal and organisational questions that technology does not solve.",
  },
  {
    question: "How long does an AI project take?",
    answer:
      "A working prototype on your own data is usually a matter of weeks, not months. The step to production then takes longer than people expect, because that is where the less visible work sits: permissions and access, error handling, cost per request, and measuring whether the answer is actually right. We plan that phase explicitly rather than discovering it at the end.",
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
            keywords: ["AI development cost", "AI project budget"],
          }),
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", route: "home" },
            { name: "Blog", route: "blog" },
            { name: "What AI development costs", route: ROUTE },
          ]),
        ]}
      />
      <ArticleLayout
        title={post.title}
        lead="Nobody can tell you what AI development costs without knowing three things first. Anyone who does is guessing. Here are those three factors, plus the cost line that keeps arriving for as long as your application runs — the one most people discover only once things are going well."
        datePublished={post.datePublished}
        readingTime={post.readingTime}
        sections={sections}
        ctaTitle="Get it costed out"
        ctaSubtitle="Describe the process eating the most time and half an hour will tell us whether costing it out is worth doing. Sometimes the answer is no, which saves you a proposal cycle."
      />
    </>
  );
}
