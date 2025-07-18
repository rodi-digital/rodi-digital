import { PageHeader } from "@/components/ui/page-header";
import { ServiceCard } from "@/components/ui/service-card";

export default function ApproachPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageHeader
          title="How we work"
          description="At Rodi Digital, we believe that exceptional digital products are born from a synergy of close collaboration and deep, data-driven insights."
        />
        <div className="flex flex-col gap-16 mt-8">
          <ServiceCard
            title="Analytics at the core"
            description="We go beyond traditional dashboards, embedding analytics into every layer of product development to drive continuous growth and informed decision-making."
            href="/approach/analytics"
          />
          <ServiceCard
            title="Collaboration"
            description="We don’t just build for you; we build with you. Our collaborative approach ensures a seamless partnership throughout your digital product development journey."
            href="/approach/collaboration"
          />
        </div>
      </div>
    </div>
  );
}
