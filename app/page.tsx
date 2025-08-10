"use client";

import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "@/lib/scroll-animations";
import { HomeHero } from "@/components/ui/home-hero";
import { MinimalCardGrid } from "@/components/ui/minimal-card-grid";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { FinalCTA } from "@/components/ui/final-cta";

const services = [
  {
    title: "Mobile Apps",
    description:
      "Validate your app idea quickly and cost-effectively by building and launching a mobile app with speed. We specialize in building intuitive and high-performing mobile applications for rapid idea validation and full-scale deployment.",
  },
  {
    title: "Web Development",
    description:
      "We build fast, responsive websites that look great and perform even better. Whether you need a custom web application, a CMS-powered platform, or a pixel-perfect Webflow site, we've got you covered.",
  },
  {
    title: "AI-Powered Applications",
    description:
      "Unlock the power of future-forward technology: improve search functionality, personalize customer interactions, and gain valuable insights for strategic decision-making.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HomeHero
        title="Apps, AI & Websites Built With You"
        subtitle={[
          "We create digital products driven by analytics and built through close collaboration.",
        ]}
        ctaText="Get in touch"
        ctaHref="/contact"
      />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 1.5 }}
      >
        <MinimalCardGrid
          title="What We Build"
          description="From mobile apps to AI-powered platforms, we create digital solutions that drive real business value."
          cards={services}
          columns="3"
        />

        <TwoColumnSection
          title="Data-Driven Development"
          content="At Rodi Digital, we believe that exceptional digital products are born from a synergy of close collaboration and deep, data-driven insights. We don't just build for you; we build with you, ensuring every decision is backed by real data and user feedback."
          primaryCTA={{ text: "Our Approach", href: "/approach" }}
          secondaryCTA={{ text: "Case Studies", href: "/cases" }}
        />

        <FinalCTA
          title="Ready to Build Something Amazing?"
          subtitle="Let's collaborate to create a digital product that not only meets your needs but exceeds your expectations and drives measurable business growth."
          primaryCTA={{ text: "Start Your Project", href: "/contact" }}
          secondaryCTA={{ text: "View Our Services", href: "/services" }}
        />
      </motion.div>
    </div>
  );
}
