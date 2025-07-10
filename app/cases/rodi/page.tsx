import { PageHeader } from "@/components/ui/page-header";
import { ContentCard } from "@/components/ui/content-card";
import { FeatureGrid } from "@/components/ui/feature-grid";

const keyFeatures = [
  {
    title: "Plan and Discover Routes",
    description:
      "Find routes online or create your own with platforms like Komoot or Strava and upload them to Rodi for turn-by-turn guidance.",
    color: "blue" as const,
  },
  {
    title: "Navigate and Track",
    description:
      "Utilize the phone's GPS sensor to display valuable insights during rides, including distance, average speed, elevation, duration, and max speed.",
    color: "blue" as const,
  },
  {
    title: "Enjoy a Free Experience",
    description:
      "Rodi stands out by offering a completely free service with no ads, no subscriptions, and no data sharing, prioritizing user privacy and experience.",
    color: "blue" as const,
  },
];

const impactFeatures = [
  {
    title: "Privacy First",
    description:
      "No ads, subscriptions, or data sharing - prioritizing user privacy.",
    color: "green" as const,
  },
  {
    title: "Community Impact",
    description:
      "Created a valuable tool for the cycling community without financial barriers.",
    color: "green" as const,
  },
  {
    title: "Enhanced Experience",
    description:
      "Simplified route navigation and performance tracking for better cycling.",
    color: "green" as const,
  },
];

export default function RodiCasePage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageHeader title="Rodi" subtitle="Bike Computer App" />
        <div className="space-y-12">
          <ContentCard
            title="Challenge"
            description="Cyclists often need a reliable and free bike computer app that can guide them on routes, track their performance, and integrate with popular cycling platforms without ads, subscriptions, or data sharing."
          />
          <ContentCard
            title="Solution"
            description="As the founder, Rodi Digital (Tijs Martens) designed, implemented, and strategized the development of Rodi, a free bike computer application. Rodi allows users to enjoy the following features:"
          >
            <FeatureGrid features={keyFeatures} />
          </ContentCard>
          <ContentCard
            title="Results & Impact"
            description="Rodi provides cyclists with a comprehensive, user-friendly, and privacy-focused bike computer solution. Its commitment to being free and ad-less has created a valuable tool for the cycling community, empowering users to explore new routes, track their progress, and share their passion without financial barriers or privacy concerns."
          >
            <FeatureGrid features={impactFeatures} columns={2} />
          </ContentCard>
        </div>
      </div>
    </div>
  );
}
