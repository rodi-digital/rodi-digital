import { PageHeader } from "@/components/ui/page-header";
import { ServiceCard } from "@/components/ui/service-card";
import { Heart, Bike, Zap } from "lucide-react";

export default function CasesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <PageHeader
          title="Case Studies"
          description="Discover how we've helped clients transform their ideas into successful digital products."
        />
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <ServiceCard
            title="PEACHealth"
            description="A free mobile application providing personalized, expert-backed health information for people concerned about or living with illness."
            href="/cases/peach"
          />
          <ServiceCard
            title="Rodi"
            description="A free bike computer app that provides route guidance, performance tracking, and Strava integration without ads or subscriptions."
            href="/cases/rodi"
          />
          <ServiceCard
            title="Trai"
            description="AI-powered triathlon training plan generator for personalized, adaptive training."
            href="/cases/trai"
          />
        </div>
      </div>
    </div>
  );
}
