import { GradientBackground } from "@/components/ui/gradient-background"
import { PageHeader } from "@/components/ui/page-header"
import { ServiceCard } from "@/components/ui/service-card"
import { Brain, Smartphone, Globe } from "lucide-react"

export default function ServicesPage() {
  return (
    <GradientBackground variant="green">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <PageHeader
          title="Our Services"
          description="We specialize in cutting-edge digital solutions that drive innovation and deliver measurable business value."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="AI-Enabled Applications"
            description="Harness the transformative power of Large Language Models to unlock new possibilities and intelligent automation."
            href="/services/ai-enabled-applications"
            icon={Brain}
            iconColor="purple"
          />
          <ServiceCard
            title="Mobile Development"
            description="Fast, data-driven, and cost-effective mobile solutions using React Native and Expo for cross-platform development."
            href="/services/mobile"
            icon={Smartphone}
            iconColor="blue"
          />
          <ServiceCard
            title="Web Development"
            description="Building robust and engaging online experiences, from SaaS platforms to marketing sites and CMS-powered websites."
            href="/services/web"
            icon={Globe}
            iconColor="green"
          />
        </div>
      </div>
    </GradientBackground>
  )
}
