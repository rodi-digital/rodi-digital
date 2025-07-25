import { H1 } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { StickyCard, StickyCards } from "@/components/ui/sticky-cards";

const cards: StickyCard[] = [
  {
    title: "Mobile apps",
    description:
      "Validate your app idea quickly and cost-effectively by building and launching a mobile app with speed. We specialize in building intuitive and high-performing mobile applications for rapid idea validation and full-scale deployment.",
  },
  {
    title: "Web Development",
    description:
      "We build fast, responsive websites that look great and perform even better. Whether you need a custom web application, a CMS-powered platform, or a pixel-perfect Webflow site, we’ve got you covered.",
  },
  {
    title: "Ai powered applications",
    description:
      "Unlock the power of future-forward technology: improve search functionality, personalize customer interactions, and gain valuable insights for strategic decision-making.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between mt-20">
      <div className="flex flex-col items-start max-w-4xl mx-auto w-full px-8 mt-8">
        <H1>Apps, AI & Websites Built With You.</H1>
        <p className="text-3xl text-gray-700 mb-2 text-left max-w-2xl">
          We create digital products driven by analytics and built through close
          collaboration.
        </p>
        <p className="text-3xl text-gray-700 mb-6 text-left max-w-2xl">
          Your vision and our expertise are the ingredients for changing the
          game.
        </p>
        <Button href="#contact" className="mb-16">
          Get in touch
        </Button>
      </div>

      <StickyCards minHeight={1000} cardContent={cards} />
    </div>
  );
}
