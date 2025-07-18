import { PageHeader } from "@/components/ui/page-header";
import { ContentCard } from "@/components/ui/content-card";
import { FeatureGrid } from "@/components/ui/feature-grid";

const keyFeatures = [
  {
    title: "Plan and Discover Routes",
    description:
      "Find routes online or create your own with platforms like Komoot or Strava and upload them to Rodi for turn-by-turn guidance.",
  },
  {
    title: "Navigate and Track",
    description:
      "Utilize the phone's GPS sensor to display valuable insights during rides, including distance, average speed, elevation, duration, and max speed.",
  },
  {
    title: "Enjoy a Free Experience",
    description:
      "Rodi stands out by offering a completely free service with no ads, no subscriptions, and no data sharing, prioritizing user privacy and experience.",
  },
];

const impactFeatures = [
  {
    title: "Unwavering Privacy Commitment",
    description:
      "By offering a completely free service with no ads, subscriptions, or data sharing, Rodi prioritizes user privacy and fosters trust within the cycling community.",
  },
  {
    title: "Empowering the Cycling Community",
    description:
      "Rodi has become an invaluable, accessible tool for cyclists, removing financial barriers and enabling broader participation in route exploration and performance tracking.",
  },
  {
    title: "Streamlined Cycling Experience",
    description:
      "Rodi simplifies route navigation and provides intuitive performance tracking, significantly enhancing the overall cycling experience for users.",
  },
];

export default function RodiCasePage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageHeader title="Rodi" subtitle="Bike Computer App" />
        <div className="space-y-12">
          <ContentCard
            title="Challenge"
            description="Cyclists often seek a reliable and free bike computer app that offers comprehensive route guidance, accurate performance tracking, and seamless integration with popular cycling platforms, all while ensuring privacy and avoiding intrusive ads or subscriptions."
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
