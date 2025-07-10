import { PageHeader } from "@/components/ui/page-header";
import { ServiceCard } from "@/components/ui/service-card";
import { Brain, Smartphone, Globe } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <PageHeader
          title="Our Services"
          description="We specialize in cutting-edge digital solutions that drive innovation and deliver measurable business value."
        />
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <ServiceCard
            title="AI-Enabled Applications"
            description="Harness the transformative power of Large Language Models to unlock new possibilities and intelligent automation."
            href="/services/ai-enabled-applications"
          />
          <ServiceCard
            title="Mobile Development"
            description="Fast, data-driven, and cost-effective mobile solutions using React Native and Expo for cross-platform development."
            href="/services/mobile"
          />
          <ServiceCard
            title="Web Development"
            description="Fast, responsive, and visually stunning web solutions tailored to your business needs."
            href="/services/web"
          />
        </div>
      </div>
    </div>
  );
}
