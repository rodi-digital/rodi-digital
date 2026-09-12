import { ArticleLayout, type ArticleSection } from "@/components/ui/article-layout";
import { JsonLd } from "@/components/ui/json-ld";
import {
  pageMetadata,
  blogPostingSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { postFor } from "@/lib/blog";

const ROUTE = "blogAutomation";
const post = postFor(ROUTE);

export const metadata = pageMetadata({
  title: "AI automation or RPA: which one does your process need?",
  description:
    "If your process fits in a handful of if-then rules, AI is the expensive answer. A practical test for telling AI automation and classic automation apart.",
  route: ROUTE,
  keywords: [
    "AI automation",
    "RPA vs AI",
    "process automation",
    "document processing automation",
  ],
});

const sections: ArticleSection[] = [
  {
    heading: "The difference in one sentence",
    paragraphs: [
      "Classic automation and RPA follow fixed instructions. AI automation copes with input that is different every time.",
      "That is the whole trade-off. If your process fits into rules, RPA is cheaper, faster, and more predictable — and you can explain afterwards why something happened. The moment input varies or language has to be understood, a rule-based system breaks. That is precisely where AI earns its keep.",
      "In practice you combine them. AI reads and judges, classic automation executes.",
    ],
  },
  {
    heading: "Three questions that settle it",
    paragraphs: [
      "Ask them about the process you want to automate. The answers point the right way almost every time.",
    ],
    bullets: [
      {
        title: "Does the input look the same each time?",
        text: "Yes → classic automation. Invoices in fifty layouts and emails phrasing one question ten ways → AI.",
      },
      {
        title: "Can you write down the decision rule?",
        text: "If a handful of if-then rules covers it, do that. Cheaper, and explainable to an auditor or a regulator.",
      },
      {
        title: "Does language have to be understood?",
        text: "Summarising, judging, extracting intent from free text. No rule exists for that.",
      },
      {
        title: "How many exceptions does the process have?",
        text: "The question everyone skips and the one that sets the budget. More on that below.",
      },
    ],
  },
  {
    heading: "Where does AI automation pay off?",
    paragraphs: [
      "On inbound documents. Reading invoices, contracts, applications, and forms, checking them for completeness, classifying them, routing them onward.",
      "On mailboxes. Sorting by topic and urgency, pulling in the relevant history, staging a draft. Wally does this inside accountants' inboxes, in the mail they were sitting in anyway.",
      "And on triage. Judging alerts by relevance instead of forwarding all of them — IPRHQ ranks IP threats by risk, which moved decisions that took weeks down to hours.",
    ],
  },
  {
    heading: "The expensive mistake: automating halfway",
    paragraphs: [
      "One process running end to end beats five running halfway. Half-automated work costs more than manual work, because somebody checks everything anyway — now with the extra step of working out what the system already did.",
      "The eighty percent that runs smoothly is not the problem. Inventory the edge cases, because that is where automation stalls. Usually in production, when unwinding it is expensive.",
      "The number of exceptions is almost always the largest cost driver, and almost always underestimated. So start with a process that occurs often, needs little judgement, and where a mistake is obvious.",
    ],
  },
  {
    heading: "How much control do you keep?",
    paragraphs: [
      "For each step you decide whether the system proceeds alone or waits for approval. Not everything needs signing off — but that approval has to be fast, or it becomes the new bottleneck itself.",
      "Alongside that, what was processed, why, and what was held back all have to be reconstructable. In regulated work that is not an extra but the condition for being allowed to automate.",
    ],
  },
];

const faqs = [
  {
    question: "What is AI automation?",
    answer:
      "AI automation is automating work that contains too much variation for fixed rules. Traditional automation works in fixed steps: if this, then that. That breaks as soon as the input differs each time — an invoice in a different layout, an email phrasing the question another way, a contract with unusual terms. AI models cope with that variation, which makes processes around language and documents automatable that previously were not.",
  },
  {
    question: "What is the difference between AI automation and RPA?",
    answer:
      "RPA and classic automation follow fixed instructions and are excellent at it: predictable, cheap, and reliable. As long as your process can be captured in rules, that is the better choice. AI comes into play when the input varies or when language has to be understood. In practice you usually combine them: AI reads and judges, classic automation performs the actions. Using AI where a rule would do only adds cost and uncertainty.",
  },
  {
    question: "Which process should I automate first?",
    answer:
      "Look for one that occurs often, needs little judgement, and where a mistake is obvious and easy to undo. Reading documents and moving data between systems usually qualify. Do not start with the process people complain about most — that is often the one with the most exceptions, and nobody learns anything useful when it goes wrong.",
  },
  {
    question: "Do we keep control over what happens automatically?",
    answer:
      "Yes, and that control is designed in deliberately. For each step you decide whether the system may proceed alone or whether an approval is required, and everything processed is reconstructable afterwards: what was done, on what basis, and what was held back. In regulated work that is not an extra but a condition for being allowed to automate.",
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
            keywords: ["AI automation", "RPA vs AI"],
          }),
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", route: "home" },
            { name: "Blog", route: "blog" },
            { name: "AI automation or RPA", route: ROUTE },
          ]),
        ]}
      />
      <ArticleLayout
        title={post.title}
        lead="AI is now sold as the answer to every kind of repetitive work. For a good share of it, it is the most expensive answer to a question a script could have handled. Here is how to work out in ten minutes which of the two you need."
        datePublished={post.datePublished}
        readingTime={post.readingTime}
        sections={sections}
        ctaTitle="Rule or model?"
        ctaSubtitle="Name the process your team complains about most and we will work out which of the two it needs. The answer is often cheaper than expected."
      />
    </>
  );
}
