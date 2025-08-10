import { CaseStudyLayout } from "@/components/ui/case-study-layout";

const keyFeatures = [
  {
    title: "Personalized Education",
    description:
      "Educational articles personalized to the user's specific condition and needs",
  },
  {
    title: "Symptom Tracking",
    description:
      "Track and share symptoms with friends, family, and healthcare professionals",
  },
  {
    title: "Appointment Logging",
    description:
      "Log appointments for a clear overview of care plans and medical history",
  },
];

const impactFeatures = [
  {
    title: "Empowered Decision Making",
    description:
      "Empowers users to understand their options and actively participate in their care journey",
  },
  {
    title: "Improved Patient Engagement",
    description:
      "Fosters enhanced communication between patients and healthcare providers through shared insights and progress tracking.",
  },
];

export default function PeachCasePage() {
  return (
    <CaseStudyLayout
      title="PEACHealth"
      subtitle="Living longer and better through personalized, expert-backed health information."
      challenge="In an overwhelming landscape of health information, individuals concerned about or living with illness often face significant challenges in finding trustworthy, up-to-date, and personalized guidance. This lack of reliable resources can lead to anxiety, confusion, and hinder their ability to actively participate in crucial health decisions. The challenge was to develop a platform that cuts through this noise, empowering users with credible information and fostering proactive engagement in their care."
      solution="Rodi Digital developed PEACHealth, a free mobile application that provides personalized, expert-backed, and authoritative information for people concerned about or living with illness. The app consolidates guidance from world-renowned medical experts by leveraging a network of trusted sources, making it accessible and tailored to individual needs."
      keyFeatures={keyFeatures}
      impact={impactFeatures}
      technologySection={{
        title: "Technology Stack",
        content: "Built with modern mobile development frameworks (e.g., React Native, Expo) and robust backend systems for seamless content delivery and personalized user experiences."
      }}
      ctaTitle="Ready to Build Your Health Solution?"
      ctaSubtitle="Let's create a digital health platform that empowers users with personalized, expert-backed information."
    />
  );
}
