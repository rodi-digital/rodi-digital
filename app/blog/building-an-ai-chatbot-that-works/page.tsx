import { ArticleLayout, type ArticleSection } from "@/components/ui/article-layout";
import { JsonLd } from "@/components/ui/json-ld";
import {
  pageMetadata,
  blogPostingSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { postFor } from "@/lib/blog";

const ROUTE = "blogChatbot";
const post = postFor(ROUTE);

export const metadata = pageMetadata({
  title: "Building an AI chatbot that doesn't make things up",
  description:
    "Most failed chatbots were never given a boundary, a source, or a way to say “I don't know”. Here is the order to build them in.",
  route: ROUTE,
  keywords: [
    "build an AI chatbot",
    "chatbot on own documents",
    "prevent hallucinations",
    "conversational AI development",
  ],
});

const sections: ArticleSection[] = [
  {
    heading: "Why do so many companies switch their chatbot off again?",
    paragraphs: [
      "Because it was never given three things: a boundary, access to the sources that contain the answer, and a way to say it does not know.",
      "The outcome is predictable. A bot that states something wrong with total confidence, and is then trusted by nobody. One such answer doing the rounds internally costs more goodwill than the whole build returned.",
      "The fix is rarely a better model. It is reversing the order: first establish what it must answer and what it must never touch, then build.",
    ],
  },
  {
    heading: "What is it allowed to answer, and what never?",
    paragraphs: [
      "Start with two lists. Questions it must handle, and — equally important — questions it must never touch on its own.",
      "That second list gets skipped almost every time. Pricing commitments, medical advice, legal liability, anything resembling a promise: those need a handover, not a generated answer.",
      "A chatbot with a sharp boundary is more useful than one with an opinion about everything.",
    ],
  },
  {
    heading: "How do you make your own sources searchable?",
    paragraphs: [
      "This drives answer quality more than the choice of model does. Clean up the documents, give them structure, and record for every passage where it came from.",
      "It works for manuals, policy documents, contracts, product data, and past tickets. Wally works exactly this way: tax answers grounded in official sources, plus analysis of the invoices and contracts a user uploads.",
      "The boring part of this work is the part that makes the difference. Skip it and you get a chatbot that sounds convincing and is wrong with some regularity.",
    ],
  },
  {
    heading: "Why “I don't know” is a good answer",
    paragraphs: [
      "A chatbot that always says something will eventually say something false. So set an explicit floor: too little grounding in the sources means it says so and hands over.",
      "That feels counterintuitive. You built it to answer, after all. But users forgive a handover; they do not forgive an answer that turns out to be wrong two weeks later.",
      "Put source citation beside it. Every answer points at the document, article, or record it came from, so somebody can check it without calling you.",
    ],
  },
  {
    heading: "How do you know it is getting better?",
    paragraphs: [
      "Build a test set from questions that were actually asked. Including the awkward ones — especially those.",
      "Without one, every adjustment is a guess and you notice a regression when a customer hits it. With one, you can compare models, adjust prompts, and add sources while watching the effect.",
      "Then go live narrowly. Internally first, or a slice of traffic. Widen the audience only once the answers to real questions hold up.",
    ],
  },
  {
    heading: "What you get for free alongside it",
    paragraphs: [
      "The questions coming in are research you are not paying for. They show which document is missing, which process is unclear, and where your site leaves people stranded.",
      "Capture and cluster them. In practice that analysis often returns more than the chatbot itself, because it exposes problems you would otherwise never have seen.",
    ],
    bullets: [
      {
        title: "Conversations where it did not know",
        text: "The most valuable material you have. Review periodically and turn into sources or boundaries.",
      },
      {
        title: "Questions that keep recurring",
        text: "Almost always a sign something is missing from your documentation, not from your chatbot.",
      },
      {
        title: "The moments a human takes over",
        text: "That is where the real complexity of your service lives. Useful to know before your next hiring round.",
      },
    ],
  },
];

const faqs = [
  {
    question: "What does it cost to build an AI chatbot?",
    answer:
      "The cost is driven mostly by the state of your sources, the number of integrations, and how much a wrong answer matters. A chatbot answering from a set of tidy manuals is a manageable project; one that reads customer records, works in several languages, and needs an audit trail is not. Alongside the build there are running costs for model usage per conversation, hosting, and maintenance. Those are worth estimating up front, because at high traffic they become the deciding factor in the business case.",
  },
  {
    question: "How do you stop an AI chatbot making things up?",
    answer:
      "By having it answer only from retrieved sources and showing that source alongside the answer. On top of that you set a floor: when too little grounding is found, the chatbot says it does not know and hands over to a person. Finally you test with a fixed set of questions, so a regression shows up before a customer finds it. You cannot eliminate it entirely, but this makes it rare and visible.",
  },
  {
    question: "Can the chatbot answer from our own documents?",
    answer:
      "Yes, that is the standard setup. We make your documents searchable and have the model answer from the passages that were actually retrieved. It works for manuals, policy documents, contracts, product data, and past tickets. Wally, the assistant we built for accounting firms, works the same way: tax answers grounded in official sources, plus analysis of documents the user uploads.",
  },
  {
    question: "How is this different from an off-the-shelf chatbot tool?",
    answer:
      "A ready-made tool is faster to launch and perfectly fine when your questions are general and your sources are tidy. Building your own pays off once you need integrations with your own systems, have requirements about where data lives, or want to be able to show why an answer was given. If a tool is enough in your situation, that is cheaper for you and saves a project that would have added nothing.",
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
            keywords: ["build an AI chatbot", "prevent hallucinations"],
          }),
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", route: "home" },
            { name: "Blog", route: "blog" },
            { name: "Building an AI chatbot", route: ROUTE },
          ]),
        ]}
      />
      <ArticleLayout
        title={post.title}
        lead="Almost everyone has tried a chatbot by now. Almost everyone has also switched one off again. That is rarely the model's fault and nearly always the order in which it was built."
        datePublished={post.datePublished}
        readingTime={post.readingTime}
        sections={sections}
        ctaTitle="Start with your own inbox"
        ctaSubtitle="If you know which questions your team answers again every week, that is enough to build a first version and put it to the test."
      />
    </>
  );
}
