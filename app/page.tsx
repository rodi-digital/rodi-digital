import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { H1, H3 } from "@/components/ui/heading";
import { HomeCard } from "@/components/ui/home-card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto">
          <H1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 leading-tight mb-8">
            Apps, AI & Websites built with you.
          </H1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl">
            Your digital partner specializing in AI-enabled applications, mobile
            development, and web solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/approach"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors group"
            >
              Our Approach
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
            >
              View Cases
            </Link>
          </div>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="flex flex-col items-center w-full mx-auto max-w-md gap-0 relative">
          <HomeCard
            className="top-24 z-10"
            title={"Mobile apps"}
            body={
              "HValidate your app idea quickly and cost-effectively by building and launching a mobile app with speed. We specialize in building intuitive and high-performing mobile applications for idea validation and full-scale deployment."
            }
          />
          <HomeCard
            className="top-24 z-20"
            title={"Web development"}
            body={
              "We build fast, responsive websites that look great and perform even better. Whether you need a custom web-app, a CMS-powered platform, or a pixel-perfect Webflow site, we’ve got you covered."
            }
          />
          <HomeCard
            className="top-24 z-30"
            title={"AI powered applications"}
            body={
              "Unlock the power of the technology of the future: improve search functionality, personalize customer interactions, and gain valuable insights for strategic decision-making."
            }
          />
          <div className="h-[2000px]" />
        </div>
      </div>
    </div>
  );
}
