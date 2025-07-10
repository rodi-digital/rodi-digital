import { PageHeader } from "@/components/ui/page-header";
import { ContentCard } from "@/components/ui/content-card";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { CTASection } from "@/components/ui/cta-section";
import { H3 } from "@/components/ui/heading";

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
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageHeader
          title="PEACHealth"
          subtitle="Formerly My Cancer Companion"
        />
        <div className="space-y-12">
          <ContentCard
            title="Challenge"
            description="In an overwhelming landscape of health information, individuals concerned about or living with illness often face significant challenges in finding trustworthy, up-to-date, and personalized guidance. This lack of reliable resources can lead to anxiety, confusion, and hinder their ability to actively participate in crucial health decisions. The challenge was to develop a platform that cuts through this noise, empowering users with credible information and fostering proactive engagement in their care."
          />
          <ContentCard
            title="Solution"
            description="Rodi Digital developed PEACHealth, a free mobile application that provides personalized, expert-backed, and authoritative information for people concerned about or living with illness. The app consolidates guidance from world-renowned medical experts by leveraging a network of trusted sources, making it accessible and tailored to individual needs."
          >
            <H3>Key Features</H3>
            <FeatureGrid features={keyFeatures} />
          </ContentCard>
          <ContentCard
            title="Results & Impact"
            description="PEACHealth empowers users to live longer and better by providing them with the knowledge and tools to manage their health effectively. It simplifies access to credible health information, fostering informed decision-making and improved patient engagement."
          >
            <FeatureGrid features={impactFeatures} columns={2} />
          </ContentCard>
          <CTASection
            title="Key Technologies Used"
            description="Built with modern mobile development frameworks (e.g., React Native, Expo) and robust backend systems for seamless content delivery and personalized user experiences."
            variant="pink"
          />
        </div>
      </div>
    </div>
  );
}
