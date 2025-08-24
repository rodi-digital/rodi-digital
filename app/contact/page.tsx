import { ServiceHero } from "@/components/ui/service-hero";
import { ContactContent } from "@/components/ui/contact-content";

export const metadata = {
  title: "Contact - Rodi Digital",
  description:
    "Get in touch with Rodi Digital to discuss your next digital project. We're here to help bring your ideas to life.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Let's Connect"
        subtitle="Have a digital project in mind? Want to explore how AI, mobile, or web can transform your business? We're here to help bring your vision to life."
      />

      <ContactContent />
    </div>
  );
}
