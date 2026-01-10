import { HomeHero } from "@/components/ui/home-hero";
import { TwoColumnSection } from "@/components/ui/two-column-section";
import { FinalCTA } from "@/components/ui/final-cta";
import { DetailedServicesGrid } from "@/components/ui/detailed-services-grid";
import { FAQSection } from "@/components/ui/faq-section";
import { reader } from "@/lib/keystatic-reader";

export default async function HomePage() {
  // Fetch service cards for home page
  const serviceCards = (await reader.collections['service-cards'].all())
    .filter(card => 
      card.entry.published && 
      (card.entry.context === 'home-services' || card.entry.context === 'both')
    )
    .sort((a, b) => a.entry.order - b.entry.order);

  const services = serviceCards.map(card => ({
    title: card.entry.title,
    description: card.entry.description,
    items: card.entry.items || [],
  }));

  // Fetch FAQs for home section
  const homeFAQs = (await reader.collections.faqs.all())
    .filter(faq => faq.entry.published && faq.entry.section === 'home')
    .sort((a, b) => a.entry.order - b.entry.order)
    .map(faq => ({
      question: faq.entry.question,
      answer: faq.entry.answer,
    }));
  return (
    <div className="min-h-screen">
      <HomeHero
        title="Apps, AI, and Websites Built with You"
        subtitle={[
          "We create digital products that stand the test of time, using data and analytics to drive your growth.",
        ]}
        ctaText="Let's Talk"
        ctaHref="/contact"
      />

      <DetailedServicesGrid
        title="Our Services"
        subtitle="What We Build"
        services={services}
      />

      <TwoColumnSection
        title="Data-Driven Development"
        content="At Rodi Digital, we believe that exceptional digital products are born from a synergy of close collaboration and deep, data-driven insights. We don't just build for you; we build with you, ensuring every decision is backed by real data and user feedback."
        primaryCTA={{ text: "Our Approach", href: "/approach" }}
        secondaryCTA={{ text: "Case Studies", href: "/cases" }}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our services and approach"
        faqs={homeFAQs}
      />

      <FinalCTA
        title="Ready to Build Something Amazing?"
        subtitle="Let's collaborate to create a digital product that not only meets your needs but exceeds your expectations and drives measurable business growth."
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View Our Services", href: "/services" }}
      />
    </div>
  );
}
