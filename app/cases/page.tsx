import { PageHeader } from "@/components/ui/page-header";
import { ServiceCard } from "@/components/ui/service-card";
import { Heart, Bike, Zap } from "lucide-react";

export default function CasesPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <PageHeader
          title="Our Case Studies"
          description="Explore how Rodi Digital has partnered with clients to transform their visions into successful, impactful digital products."
        />
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <ServiceCard
            title="PEACHealth"
            description="Empowering individuals with personalized, expert-backed health information through a free mobile application, fostering informed decision-making and improved patient engagement."
            href="/cases/peach"
          />
          <ServiceCard
            title="Rodi"
            description="A free, privacy-focused bike computer app offering seamless route guidance, comprehensive performance tracking, and Strava integration, all without ads or subscriptions."
            href="/cases/rodi"
          />
          <ServiceCard
            title="Trai"
            description="An AI-powered triathlon training plan generator that delivers personalized, adaptive training schemas, optimizing performance and simplifying planning for athletes."
            href="/cases/trai"
          />
        </div>
      </div>
    </div>
  );
}
