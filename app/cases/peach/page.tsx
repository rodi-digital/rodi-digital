import { GradientBackground } from "@/components/ui/gradient-background";
import { PageHeader } from "@/components/ui/page-header";
import { ContentCard } from "@/components/ui/content-card";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { CTASection } from "@/components/ui/cta-section";
import { Heading } from "@/components/ui/heading";
import { H3 } from "@/components/ui/heading";

const keyFeatures = [
  {
    title: "Personalized Education",
    description:
      "Educational articles personalized to the user's specific condition and needs",
    color: "pink" as const,
  },
  {
    title: "Symptom Tracking",
    description:
      "Track symptoms and share capabilities with friends, family, and healthcare professionals",
    color: "pink" as const,
  },
  {
    title: "Appointment Logging",
    description:
      "Log appointments for a clear overview of care plans and medical history",
    color: "pink" as const,
  },
];

const impactFeatures = [
  {
    title: "Empowered Decision Making",
    description:
      "Users can understand their options and actively participate in their care journey",
    color: "green" as const,
  },
  {
    title: "Improved Patient Engagement",
    description:
      "Enhanced communication between patients and healthcare providers",
    color: "green" as const,
  },
];

export default function PeachCasePage() {
  return (
    <GradientBackground variant="pink">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageHeader
          title="PEACHealth"
          subtitle="Formerly My Cancer Companion"
          badge="Digital Health / Cancer Support"
          badgeColor="pink"
        />

        <div className="space-y-12">
          <ContentCard
            title="Challenge"
            description="Individuals concerned about or living with illness often struggle to find trustworthy, up-to-date, and personalized health information. The challenge was to provide a reliable platform that empowers users to take charge of their care and participate in health decisions."
          />

          <ContentCard
            title="Solution"
            description="Rodi Digital developed PEACHealth, a free mobile application that provides personalized, expert-backed, and authoritative information for people concerned about or living with illness. The app consolidates guidance from world-renowned medical experts, making it accessible and tailored to individual needs."
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
            description="Built with modern mobile development frameworks and backend systems for content delivery and personalization:"
            variant="pink"
          />
        </div>
      </div>
    </GradientBackground>
  );
}
