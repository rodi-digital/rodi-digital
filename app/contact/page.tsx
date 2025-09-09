import { ServiceHero } from "@/components/ui/service-hero";
import { ContactContent } from "@/components/ui/contact-content";
import { copy } from "@/lib/copy";

export const metadata = {
  title: "Contact - Rodi Digital",
  description:
    "Get in touch with Rodi Digital to discuss your next digital project. We're here to help bring your ideas to life.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title={copy.contactPage.hero.title}
        subtitle={copy.contactPage.hero.subtitle}
      />

      <ContactContent />
    </div>
  );
}
