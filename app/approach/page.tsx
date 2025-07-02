import { GradientBackground } from "@/components/ui/gradient-background"
import { PageHeader } from "@/components/ui/page-header"
import { ServiceCard } from "@/components/ui/service-card"
import { BarChart3, Users } from "lucide-react"

export default function ApproachPage() {
  return (
    <GradientBackground variant="blue">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PageHeader
          title="Our Approach"
          description="We believe in building digital products through close collaboration and data-driven insights."
        />

        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            title="Analytics"
            description="Beyond dashboards – driving growth through data. We embed analytics into every layer of product development."
            href="/approach/analytics"
            icon={BarChart3}
            iconColor="blue"
          />
          <ServiceCard
            title="Collaboration"
            description="Your partner in digital product development. We don't just build for you; we build with you."
            href="/approach/collaboration"
            icon={Users}
            iconColor="purple"
          />
        </div>
      </div>
    </GradientBackground>
  )
}
