import { CaseStudyLayout } from "@/components/ui/case-study-layout";

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
    <CaseStudyLayout
      title="Rodi"
      subtitle="A privacy-focused bike computer app offering seamless route guidance and performance tracking."
      challenge="Cyclists often seek a reliable and free bike computer app that offers comprehensive route guidance, accurate performance tracking, and seamless integration with popular cycling platforms, all while ensuring privacy and avoiding intrusive ads or subscriptions."
      solution="As the founder, Rodi Digital (Tijs Martens) designed, implemented, and strategized the development of Rodi, a free bike computer application that prioritizes user privacy and experience above all else."
      keyFeatures={keyFeatures}
      impact={impactFeatures}
      ctaTitle="Ready to Build Your Mobile App?"
      ctaSubtitle="Let's create a privacy-focused mobile application that puts user experience first, without ads or subscriptions."
    />
  );
}
