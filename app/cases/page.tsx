import { GradientBackground } from "@/components/ui/gradient-background"
import { PageHeader } from "@/components/ui/page-header"
import { ServiceCard } from "@/components/ui/service-card"
import { Heart, Bike, Zap } from "lucide-react"

export default function CasesPage() {
  return (
    <GradientBackground variant="orange">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <PageHeader
          title="Case Studies"
          description="Discover how we've helped clients transform their ideas into successful digital products."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="PEACHealth"
            description="A free mobile application providing personalized, expert-backed health information for people concerned about or living with illness."
            href="/cases/peach"
            icon={Heart}
            iconColor="pink"
          />
          <ServiceCard
            title="Rodi"
            description="A free bike computer app that provides route guidance, performance tracking, and Strava integration without ads or subscriptions."
            href="/cases/rodi"
            icon={Bike}
            iconColor="blue"
          />
          <ServiceCard
            title="Trai"
            description="An AI-powered triathlon training plan generator that creates personalized 2-week training schemas based on Strava data and user preferences."
            href="/cases/trai"
            icon={Zap}
            iconColor="purple"
          />
        </div>
      </div>
    </GradientBackground>
  )
}
