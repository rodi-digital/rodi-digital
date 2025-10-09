import { ServiceHero } from "@/components/ui/service-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { FinalCTA } from "@/components/ui/final-cta";
import { FAQSection } from "@/components/ui/faq-section";

const collaborativePrinciples = [
  {
    title: "Close partnership",
    description:
      "We embed ourselves into your team so progress feels seamless. Your success is our success.",
  },
  {
    title: "Frequent updates and live demos",
    description:
      "No more waiting months to see results. You get regular updates and live demos that show how your product is evolving, with room for feedback at every step.",
  },
  {
    title: "Continuous synchronization",
    description:
      "We hold short sync sessions to keep ideas moving in the right direction. This prevents misalignment and wasted effort.",
  },
  {
    title: "Open feedback loop",
    description:
      "Honest feedback is how good products become great. We encourage open conversations so we can adapt and refine quickly.",
  },
];

const collaborationFAQs = [
  {
    question: "Why is collaboration important in a development project?",
    answer:
      "Collaboration is crucial because successful digital products are never built in isolation. If an agency just takes requirements and disappears, you risk getting something that isn't what you envisioned. Rodi Digital recognizes this, noting that great products grow out of close teamwork, clear communication, and shared goals. When client and developer collaborate, the final product more accurately reflects the client's needs and avoids costly misunderstandings. Additionally, collaboration brings together the client's domain knowledge and Rodi's technical expertise, leading to smarter solutions. In short, working collaboratively ensures everyone is on the same page throughout the project, which increases the chances of success and satisfaction on both sides.",
  },
  {
    question: "How does Rodi Digital collaborate with clients?",
    answer:
      "Rodi Digital takes a very hands-in-hand approach with its clients. They strive to embed themselves as an extension of your team. This means from day one you'll notice a close partnership mentality – they are readily accessible and progress feels like a joint effort. The team schedules frequent updates and live demos of the product as it's being developed, so you can actually see features in action and give feedback in real time. Instead of traditional long update meetings once in a while, Rodi Digital prefers continuous synchronization through short, regular check-ins. This keeps ideas aligned and ensures nothing veers off track. They also maintain an open feedback loop, encouraging you to be candid about what you like or want changed. If something isn't quite right, they adapt quickly rather than sticking to a rigid plan. Essentially, Rodi Digital's collaboration style is proactive and transparent: you'll always know the project status and have ample opportunity to shape the outcome with your input.",
  },
  {
    question: "What can I expect during a project with Rodi Digital?",
    answer:
      "You can expect to be involved and informed at every stage. With Rodi Digital, there are no \"black box\" development periods where you wonder what's happening. They will provide regular progress updates and show you working versions (or features) of your product frequently, so you can actually experience how it's coming along. Communication will be frequent – you might have weekly (or even more frequent) check-in calls or chats, depending on what's needed. You can also expect them to solicit your feedback often; they truly want to hear if something could be better or if you have new ideas. Because of this, the project stays very much aligned with your vision all the way through. In practical terms, the timeline is broken into short iterations or milestones, and at each one you'll review progress. If changes are needed, Rodi Digital incorporates them swiftly (rather than waiting until the end). By the time the project is done, nothing will come as a surprise because you've been part of the journey from start to finish. Clients often find this process not only delivers a better product, but also makes the whole experience more enjoyable and less stressful.",
  },
  {
    question: "How does Rodi Digital handle feedback and changes?",
    answer:
      "Rodi Digital handles feedback with an open and flexible attitude. They actively encourage you to share your thoughts – positive or negative – as early and as often as possible. When you provide feedback or request a change, they respond quickly by discussing it with you and then adjusting the plan or the product accordingly. Because they operate in short development cycles, there's built-in time to refine things continuously. They also conduct frequent live demos, which serves as a natural point for feedback: you'll see a feature and can immediately say if it meets your needs or if you'd like tweaks. This continuous synchronization and open dialogue means issues are caught and resolved early, before they snowball. The team prides itself on honesty and transparency – if something isn't feasible or could impact the timeline, they will tell you, and then work on an alternative. Ultimately, Rodi Digital's process ensures that by project's end, most feedback has already been incorporated along the way, so the final product aligns with your expectations with no last-minute surprises.",
  },
  {
    question:
      "What is the benefit of Rodi Digital's collaborative approach for clients?",
    answer:
      "The collaborative approach makes the entire experience of building a digital product easier, faster, and more rewarding for clients. One big benefit is peace of mind – you're not left in the dark; you always know how the project is progressing and can influence it. This reduces the anxiety that often comes with outsourcing development. It can also shorten timelines, because being in sync means fewer do-overs or misunderstandings (everyone moves in the right direction from the start). By working as one unified team with you, Rodi Digital ensures the product truly fits your vision and needs when it's delivered. Clients often feel a sense of ownership and pride in the final product because they've been part of its creation. Additionally, the partnership tends to be more enjoyable – instead of a stiff client-vendor relationship, it feels like collaborators solving problems together. In the end, Rodi Digital's collaborative method not only yields a better product, but also a happier client.",
  },
];

export default function CollaborationPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Collaboration"
        subtitle="Working with an agency can feel like handing over control and just hoping for the best. Deadlines slip, feedback gets lost, and you end up with something that is not quite what you imagined. We believe the only way to build the right product is to build it together with you."
      />

      <TwoColumnSection
        title="Building Together"
        content="Successful digital products are never built in isolation. They grow out of close teamwork, clear communication, and shared goals. We work side by side with your team so that every decision reflects your vision and supports your business objectives."
      />

      <MinimalCardGrid
        title="Our Collaborative Principles"
        description="Partnership means more than meetings and status updates. It means creating a rhythm of communication and feedback that keeps everyone aligned and confident."
        cards={collaborativePrinciples}
        columns="2"
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about our collaborative approach"
        faqs={collaborationFAQs}
      />

      <FinalCTA
        title="Ready to collaborate?"
        subtitle="Let's work as one team to create a product that truly fits your vision. With the right partnership, building becomes easier, faster, and more rewarding."
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View Our Approach", href: "/approach" }}
      />
    </div>
  );
}
