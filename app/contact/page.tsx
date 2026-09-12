import { ServiceHero } from "@/components/ui/service-hero";
import { ContactContent } from "@/components/ui/contact-content";
import { FAQSection } from "@/components/ui/faq-section";
import { JsonLd } from "@/components/ui/json-ld";
import {
  pageMetadata,
  faqPageSchema,
  breadcrumbSchema,
  contactPageSchema,
} from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Rodi Digital — Start Your Project",
  description:
    "Get in touch with Rodi Digital, an AI development agency in 's-Hertogenbosch (Den Bosch), the Netherlands, serving clients worldwide. Email hello@rodi-digital.com.",
  route: "contact",
  keywords: [
    "contact Rodi Digital",
    "hire a development agency",
    "start a digital project",
    "Netherlands software agency contact",
  ],
});

const contactFAQs = [
  {
    question: "How can I contact Rodi Digital?",
    answer:
      "You can easily get in touch with Rodi Digital through a few methods. The simplest way is to send them an email at hello@rodi-digital.com. Additionally, on their website there's a \"Let's Talk\" or contact form button – clicking that will either open a contact form or your email client to start a conversation. Rodi Digital is very responsive to inquiries; they encourage prospective clients to reach out with any project ideas or questions. Whether you choose email, or the website form, just provide a brief overview of what you're looking to achieve, and their team will be happy to discuss how they can help.",
  },
  {
    question: "Where is Rodi Digital located?",
    answer:
      "Rodi Digital is located in 's-Hertogenbosch \u2014 commonly known as Den Bosch \u2014 in The Netherlands. Their full address is Stationsweg 19, 5211 TV 's-Hertogenbosch, which is in the southern part of the Netherlands. Even though that's their physical location, remember that they work with clients all over. So if you're not nearby, that's perfectly okay – they collaborate with companies across Europe and worldwide. The team is accustomed to communicating remotely via email, video calls, and other online collaboration tools. If you are nearby or visiting, you could potentially arrange an in-person meeting at their office, but it's not necessary for starting a project.",
  },
  {
    question: "Do I need to be in the Netherlands to work with Rodi Digital?",
    answer:
      "Not at all. Rodi Digital works with clients internationally. While they are based in the Netherlands, they have successfully delivered projects for startups and enterprises across Europe and even globally. The nature of digital work means most collaboration can happen remotely – through video conferences, project management tools, and continuous online communication. Rodi Digital's collaborative approach is well-suited for remote work; they keep clients in the loop regardless of distance. So whether you're in London, New York, or anywhere in between, you can engage Rodi Digital for a project. They'll ensure that distance is not a barrier by adapting to time zones and using clear communication practices to make the partnership smooth.",
  },
  {
    question:
      "Does Rodi Digital work with startups as well as larger companies?",
    answer:
      "Yes, Rodi Digital is open to working with both startups and established companies. In fact, they have experience with the full spectrum – from helping startups build their very first digital product to collaborating with enterprises on sophisticated development projects. Their approach scales to the client's size: for startups, they can act as a nimble, strategic tech partner who guides you through the development process and helps you go to market fast; for larger organizations, they can integrate with existing teams and focus on specific digital transformation or innovation initiatives. The key commonality is that Rodi Digital focuses on delivering measurable value, whether the client is a two-person startup or a multinational firm. They understand the different needs and constraints of each; for example, a startup might need MVP development on a tight budget, whereas an enterprise might require stakeholder alignment and rigorous scalability considerations. Rodi Digital's portfolio (as seen in their case studies) indeed includes a mix of both, indicating they're adept at adjusting their style and process to suit the client's context. So regardless of your company's size, you can feel confident approaching Rodi Digital about your project.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <JsonLd
        data={[
          contactPageSchema(),
          faqPageSchema(contactFAQs),
          breadcrumbSchema([
            { name: "Home", route: "home" },
            { name: "Contact", route: "contact" },
          ]),
        ]}
      />
      <ServiceHero
        title="Let's Connect"
        subtitle="Have a digital project in mind? Want to explore how AI, mobile, or web can transform your business? We're here to help bring your vision to life."
      />

      <ContactContent />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about working with Rodi Digital"
        faqs={contactFAQs}
      />
    </div>
  );
}
