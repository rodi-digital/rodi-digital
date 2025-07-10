import { PageHeader } from "@/components/ui/page-header";
import { ContentCard } from "@/components/ui/content-card";
import { FeatureGrid } from "@/components/ui/feature-grid";

const keyFeatures = [
  {
    title: "Personalized Training Plans",
    description:
      "AI-generated, highly customized training plans based on individual needs, availability, and goals.",
  },
  {
    title: "Strava Integration",
    description:
      "Connects with Strava to analyze fitness data and tailor training recommendations.",
  },
  {
    title: "Adaptive Scheduling",
    description:
      "Plans adapt dynamically as the athlete's data and preferences change.",
  },
];

const impactFeatures = [
  {
    title: "Enhanced Time Efficiency",
    description:
      "Trai eliminates countless hours of manual planning and research, allowing athletes to focus entirely on their training.",
  },
  {
    title: "Optimized Performance",
    description:
      "Our AI-driven approach leads to more effective, enjoyable, and ultimately, higher-performing training experiences.",
  },
  {
    title: "Actionable Data-Driven Insights",
    description:
      "Trai leverages real training data for precise fitness assessment and continuous progress tracking, ensuring plans are always optimized.",
  },
];

export default function TraiCasePage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageHeader
          title="Trai"
          subtitle="AI-Powered Triathlon Training Plan Generator"
        />
        <div className="space-y-12">
          <ContentCard
            title="Challenge"
            description="Triathletes often struggle to create personalized and effective training plans that truly adapt to their individual needs, availability, preferences, and evolving goals. The challenge was to develop an intelligent system capable of automating the generation of highly customized and dynamic training schemas."
          />
          <ContentCard
            title="Solution"
            description="Trai leverages AI to generate personalized, adaptive training plans for triathletes, taking into account their unique requirements and performance data. Key features include:"
          >
            <FeatureGrid features={keyFeatures} />
          </ContentCard>
          <ContentCard
            title="Results & Impact"
            description="Trai empowers triathletes to optimize their training by providing them with dynamic, personalized plans that evolve with their progress and needs. This eliminates the guesswork and time commitment associated with manual plan creation, allowing athletes to focus on their training with confidence."
          >
            <FeatureGrid features={impactFeatures} columns={2} />
          </ContentCard>
        </div>
      </div>
    </div>
  );
}
