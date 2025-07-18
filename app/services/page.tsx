import { PageHeader } from "@/components/ui/page-header";
import { ServiceCard } from "@/components/ui/service-card";

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageHeader
          title="Our Services"
          description="We specialize in cutting-edge digital solutions designed to drive innovation, enhance user experiences, and deliver measurable business value."
        />
        <div className="flex flex-col gap-16 mt-8">
          <ServiceCard
            title="AI-Enabled Applications"
            description="Harness the transformative power of Large Language Models (LLMs) to unlock new possibilities, intelligent automation, and advanced insights for your business."
            href="/services/ai-enabled-applications"
          />
          <ServiceCard
            title="Mobile Development"
            description="Deliver fast, data-driven, and cost-effective mobile solutions with our expertise in React Native and Expo for seamless cross-platform development."
            href="/services/mobile"
          />
          <ServiceCard
            title="Web Development"
            description="Crafting fast, responsive, and visually stunning web solutions precisely tailored to your unique business needs."
            href="/services/web"
          />
        </div>
      </div>
    </div>
  );
}
