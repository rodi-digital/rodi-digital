import { ArticleLayout, type ArticleSection } from "@/components/ui/article-layout";
import { JsonLd } from "@/components/ui/json-ld";
import {
  pageMetadata,
  blogPostingSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { postFor } from "@/lib/blog";

const ROUTE = "blogAgents";
const post = postFor(ROUTE);

export const metadata = pageMetadata({
  title: "What is an AI agent, and when do you need one?",
  description:
    "A chatbot answers; an agent acts. That difference makes agents more useful and more dangerous — which is why boundaries matter more than autonomy.",
  route: ROUTE,
  keywords: [
    "what is an AI agent",
    "AI agent development",
    "agentic AI",
    "chatbot vs agent",
  ],
});

const sections: ArticleSection[] = [
  {
    heading: "What is an AI agent?",
    paragraphs: [
      "An AI agent is a system that pairs a language model with access to real systems, so it can work through a sequence of steps by itself: look up what it needs, decide what has to happen, take the action, and report back.",
      "The difference from a chatbot is one verb. A chatbot answers. An agent does — it creates a record, drafts a document, submits a request.",
      "That makes agents more useful and riskier at the same time. Which is why the interesting question about an agent is not how much it can do, but what it is allowed to do.",
    ],
  },
  {
    heading: "Chatbot or agent: which do you need?",
    paragraphs: [
      "A chatbot that tells you how to file a leave request is a chatbot. A system that files it, notifies the approver, and reports the outcome is an agent.",
      "In practice they blend. Most applications start as a chatbot and gain permissions one step at a time as confidence builds. That is the sensible order, because permissions are far easier to widen than to claw back.",
      "So start small. An agent that can do everything on day one is an agent nobody switches on.",
    ],
  },
  {
    heading: "What must an agent do before you switch it on?",
    paragraphs: [
      "Autonomy is only useful with brakes. Building an agent that can do a lot is not the hard part; building one you dare point at real work is.",
    ],
    bullets: [
      {
        title: "Fetch what it needs",
        text: "A record in your CRM, an earlier email thread, a rate in a table. You should not have to know in advance which data it will want — that is rather the point.",
      },
      {
        title: "Stop when unsure",
        text: "Too little grounding means asking, not guessing.",
      },
      {
        title: "Act within its permissions",
        text: "Never more than the user it acts for. That is a design requirement, not a setting you enable later.",
      },
      {
        title: "Report what it did",
        text: "What happened, on what basis, and what is still open. Without that trail it is not auditable, and therefore useless on work that matters.",
      },
      {
        title: "Fail cleanly",
        text: "An API that is down, a document it cannot read: report and stop.",
      },
      {
        title: "Wait for approval where it counts",
        text: "On steps touching money, customers, or liability — including visibility into why it is proposing this.",
      },
      {
        title: "Be measurable",
        text: "A test set from your own edge cases, so every change is demonstrably better or worse.",
      },
    ],
  },
  {
    heading: "Where do agents pay for themselves?",
    paragraphs: [
      "On work with many steps and little judgement. Moving data between systems, assembling case files, triaging alerts, preparing standard replies. Work people are good at but get nothing out of.",
      "And above all, where the work already happens. Wally runs inside the accountant's inbox. IPRHQ puts actions in Word and in Chrome, exactly where an infringement gets spotted. An agent living in a separate tab stops being opened after two weeks, however good it is.",
      "Where they do not pay off: processes that fit into a handful of if-then rules. Classic automation is cheaper there, faster, and far easier to explain.",
    ],
  },
  {
    heading: "How do you stop an agent making mistakes?",
    paragraphs: [
      "You do not, entirely. So you design for them.",
      "Three things do most of the work: make it cite the source of every answer, make it stop and ask when unsure, and put an approval step before anything irreversible. That last one is thin on its own — approving without seeing why something is proposed is signing with your eyes shut.",
      "On IPRHQ the gain came precisely from that ranking: not forwarding every alert, but sorting threats by relevance so a team looks at what matters first. Decisions that took weeks moved to hours.",
    ],
  },
];

const faqs = [
  {
    question: "What is an AI agent?",
    answer:
      "An AI agent is a system that combines a language model with access to real systems, so it can work through a sequence of steps on its own: look something up, decide what is needed, take an action, and report back. The difference from a chatbot is that a chatbot answers and an agent does something — creates a record, drafts a document, submits a request. That difference makes agents more useful and riskier, which is why boundaries and approval steps belong with them.",
  },
  {
    question: "What is the difference between an AI agent and a chatbot?",
    answer:
      "A chatbot holds a conversation and gives an answer. An AI agent additionally performs actions in your systems and works through several steps itself, without a user driving each one. A chatbot that tells you how to file a leave request is a chatbot; a system that files it, notifies the approver, and reports the outcome is an agent. In practice they blend: many applications start as a chatbot and gain permissions one step at a time.",
  },
  {
    question: "How do you stop an AI agent making mistakes?",
    answer:
      "You do not prevent them entirely, so you design for them. Three things do most of the work: make the agent cite the source of every answer, make it stop and ask when unsure rather than guess, and build an approval step before anything irreversible. Alongside that, a test set built from your own edge cases lets you see whether each change makes things better or worse.",
  },
  {
    question: "When is an AI agent the wrong choice?",
    answer:
      "When your process fits into a handful of if-then rules. Classic automation is then cheaper, faster, and more reliable, and gives you a predictability a language model cannot. An agent earns its place where the input varies, where language has to be understood, or where the next step differs case by case.",
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
            keywords: ["what is an AI agent", "AI agent development"],
          }),
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", route: "home" },
            { name: "Blog", route: "blog" },
            { name: "What is an AI agent", route: ROUTE },
          ]),
        ]}
      />
      <ArticleLayout
        title={post.title}
        lead="The word “agent” is now stuck to almost every product. The useful distinction is one verb: a chatbot answers, an agent acts. Everything that gets interesting after that is not about what it can do, but about what you allow it to do."
        datePublished={post.datePublished}
        readingTime={post.readingTime}
        sections={sections}
        ctaTitle="Start with one process"
        ctaSubtitle="Name the work made of many steps and little judgement. That is almost always where the first agent that pays for itself sits."
      />
    </>
  );
}
