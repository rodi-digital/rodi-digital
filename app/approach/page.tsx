import { PageHeader } from "@/components/ui/page-header";
import { ServiceCard } from "@/components/ui/service-card";
import { BarChart3, Users } from "lucide-react";

export default function ApproachPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <PageHeader
          title="Our Approach"
          description="We believe in building digital products through close collaboration and data-driven insights."
        />
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <ServiceCard
            title="Analytics"
            description="Beyond dashboards – driving growth through data. We embed analytics into every layer of product development."
            href="/approach/analytics"
          />
          <ServiceCard
            title="Collaboration"
            description="Your partner in digital product development. We don't just build for you; we build with you."
            href="/approach/collaboration"
          />
        </div>
      </div>
    </div>
  );
}
