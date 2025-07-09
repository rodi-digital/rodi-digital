import Link from "next/link";
import { H1 } from "@/components/ui/heading";
import { HomeCard } from "@/components/ui/home-card";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between mt-20">
      {/* Hero Section */}
      <main className="flex flex-col items-start max-w-4xl mx-auto w-full px-8 mt-8">
        <H1 className="text-5xl md:text-7xl font-extrabold text-[#181848] leading-tight mb-4 text-left">
          Apps, AI & Websites built with you.
        </H1>
        <p className="text-2xl text-gray-700 mb-6 text-left max-w-2xl">
          We create digital products with a focus on future proofing, with
          analytics as the growth-engine.
        </p>
        <Link
          href="#contact"
          className="bg-[#3f1e9d] text-white px-6 py-2 rounded font-medium hover:bg-[#2d217c] transition-colors mb-16"
        >
          Get in touch
        </Link>
      </main>

      {/* Service Cards - sticky/overlapping effect restored */}
      <section className="py-12 px-4">
        <div
          className="flex flex-col items-center w-full mx-auto max-w-md relative gap-8"
          style={{ minHeight: "700px" }}
        >
          <HomeCard
            className="sticky top-36 z-10"
            title="Mobile apps"
            body="Validate your app idea quickly and cost-effectively by building and launching a mobile app with speed. We specialize in building intuitive and high-performing mobile applications for idea validation and full-scale deployment."
          />
          <HomeCard
            className="sticky top-36 z-20"
            title="Web Development"
            body="We build fast, responsive websites that look great and perform even better. Whether you need a custom web-app, a CMS-powered platform, or a pixel-perfect Webflow site, we’ve got you covered."
          />
          <HomeCard
            className="sticky top-36 z-30"
            title="Ai powered applications"
            body="Unlock the power of the technology of the future: improve search functionality, personalize customer interactions, and gain valuable insights for strategic decision-making."
          />
        </div>
      </section>
    </div>
  );
}
