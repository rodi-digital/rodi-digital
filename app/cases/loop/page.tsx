import { CaseStudyLayout } from "@/components/ui/case-study-layout";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Loop Sleep — AI Sleep Companion for Loop Earplugs",
  description:
    "Loop Sleep is an intelligent sleep companion for Loop Earplugs: conversational onboarding, AI-generated sleep rituals, and persistent storytelling. Built while part of the team at Nimble.",
  path: "/cases/loop",
  keywords: [
    "AI sleep app",
    "Loop Earplugs",
    "conversational onboarding",
    "AI-generated audio",
    "Nimble case study",
  ],
});

const keyFeatures = [
  {
    title: "Conversational Onboarding & Nightly Check-in",
    description:
      "The experience starts with a real conversation — what kind of night it is, what's on your mind, what you need. No forms, no generic prompts. The same check-in is also the retention mechanism: the moment the app proves it remembers you.",
  },
  {
    title: "AI-Generated Sleep Rituals",
    description:
      "From each conversation, a fully personalised audio experience is built on the spot — adaptive soundscapes, layered noise textures (white, brown, pink), and a coaching voice guiding the wind-down. No two nights are quite the same.",
  },
  {
    title: "Sleep Journal",
    description:
      "Every session is saved with a poetic, AI-generated name — “Soft Horizon Drift”, “Midnight Forest Calm” — turning the history into a collection of experiences rather than a log.",
  },
  {
    title: "Persistent Storytelling",
    description:
      "The app builds a profile over time, surfacing the sessions that helped most and gently coaching toward better sleep, so the companion feels like it knows you.",
  },
  {
    title: "Evidence-Based Knowledge Layer",
    description:
      "Expert knowledge bases (CBT-I patterns, breathing protocols, sleep hygiene) inform the coaching without the app ever needing to become a medical product.",
  },
  {
    title: "Streaming Audio First Impression",
    description:
      "Switching to streaming TTS — audio begins playing while the rest is still being created — removed the most friction-heavy moment in the journey. In a bedtime context, the ritual has to start feeling right immediately.",
  },
];

const impactFeatures = [
  {
    title: "Shipped On Time, Within Budget",
    description:
      "Loop Sleep V1.0 launched to customers in February 2026, on time and within budget — a focused four-week build with a ruthlessly scoped must-have list.",
  },
  {
    title: "Validated for Scale",
    description:
      "The standalone app gathered enough validation for Loop to take the next step: merging the generative audio experience into the core Loop mobile app and closer to its existing customer base.",
  },
  {
    title: "Habit-Forming Retention",
    description:
      "Content fatigue is the central retention challenge for audio-first sleep apps. The conversational entry point became the reason people come back — when it works, the app feels like it remembers you.",
  },
  {
    title: "Foundation for an Ecosystem",
    description:
      "Loop earned its place in millions of bedrooms with a physical product. Loop Sleep is the first step in making that presence intelligent — positioning sleep personalisation within the brand's broader product ecosystem.",
  },
];

export default function LoopCasePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/cases" },
          { name: "Loop Sleep", path: "/cases/loop" },
        ])}
      />
      <CaseStudyLayout
      title="Loop Sleep"
      subtitle="Making sleep effortless — an intelligent sleep companion for Loop Earplugs."
      challenge="Loop is a globally recognised Belgian brand that turned a functional product — the earplug — into something people actually want to wear. With a loyal following, Loop had already won the bedroom. The next step was to make that presence count every single night. The challenge was to shape and build a digital companion for the Loop sleep experience: not a generic wellness app, but a personal, adaptive ritual that stays genuinely useful night after night. Sleep and wellbeing apps are largely static — pre-recorded libraries, generic coaching scripts, and one-size-fits-all experiences that run out of novelty within days. That gap was a clear opening for a brand already in millions of bedrooms to become an intelligent, habit-forming companion."
      solution="Built while part of the team at Nimble, in collaboration with Loop, Loop Sleep is a full design and build from concept to a live product, delivered in weeks. It starts with a conversational onboarding and nightly check-in, from which a fully personalised audio ritual is generated on the spot — adaptive soundscapes, layered noise textures, and a coaching voice guiding the wind-down. Every session is saved to a sleep journal with a poetic, AI-generated name, while persistent storytelling builds a profile over time and gently coaches toward better sleep. An evidence-based knowledge layer (CBT-I patterns, breathing protocols, sleep hygiene) informs the coaching without the app ever becoming a medical product. V1.0 was deliberately scoped to ship fast and learn from real behaviour: streaming TTS so audio begins playing while the rest is still being created, and a ruthlessly prioritised must-have list that launched in four weeks."
      keyFeatures={keyFeatures}
      impact={impactFeatures}
      technologySection={{
        title: "Technology & Approach",
        content:
          "AI-generated audio with streaming text-to-speech (audio begins playing while the rest is generated), adaptive soundscapes with layered noise textures, conversational AI onboarding, persistent user profiling, and an evidence-based knowledge layer (CBT-I patterns, breathing protocols, sleep hygiene). Built as a focused V1.0 in four weeks with a ruthlessly scoped must-have list — every feature that didn't make the launch window was explicitly deferred, not dropped, shaping a team and codebase ready to move fast in the next phase.",
      }}
      ctaTitle="Ready to Build an Intelligent Companion?"
      ctaSubtitle="Let's build a digital product that turns a ritual into a habit — using AI where it actually adds value, and learning from real users before scaling."
      projectLinks={[
        {
          text: "Visit Loop Earplugs",
          href: "https://www.loopearplugs.com/",
        },
        {
          text: "View Nimble Showcase",
          href: "https://www.nimblestudio.com/showcases/showcase-loop",
        },
      ]}
    />
    </>
  );
}
