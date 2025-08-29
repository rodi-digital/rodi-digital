import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

const footerLinks = [
  {
    title: "Development Services",
    links: [
      { label: "All Development Services", href: "/services" },
      {
        label: "AI Chatbot Development",
        href: "/services/ai-enabled-applications",
      },
      { label: "Mobile App Development", href: "/services/mobile" },
      { label: "Web Development Netherlands", href: "/services/web" },
    ],
  },
  {
    title: "Our Approach",
    links: [
      { label: "Development Process", href: "/approach" },
      { label: "Data Analytics", href: "/approach/analytics" },
      { label: "Client Collaboration", href: "/approach/collaboration" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { label: "All Case Studies", href: "/cases" },
      { label: "Healthcare Mobile App", href: "/cases/peach" },
      { label: "Sports App Development", href: "/cases/rodi" },
      { label: "AI Fitness Platform", href: "/cases/trai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact Agency", href: "/contact" },
      { label: "AI Resources", href: "/llms.txt" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Company Info - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <Image
                className="mb-6"
                src="/rodi-digital-logo.svg"
                width={120}
                height={60}
                alt="Rodi Digital - Netherlands AI and Mobile App Development Agency"
              />
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Leading AI, mobile & web development agency in the Netherlands. 
                We build cross-platform mobile apps, AI chatbots, and high-conversion 
                websites for startups and enterprises across Europe and worldwide.
              </p>
              <div className="text-gray-500 text-sm space-y-1">
                <p>Stationsweg 19, 5211 TV 's-Hertogenbosch</p>
                <p>The Netherlands</p>
                <p className="font-medium text-gray-600">
                  hello@rodi-digital.com
                </p>
                <p>VAT: NL867887370B01</p>
              </div>
            </div>

            {/* Navigation Links - Each section takes 1 column */}
            {footerLinks.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-600 text-sm hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Rodi Digital. Built with you.
            </p>
            <Button href="/contact" className="bg-primary hover:bg-primary/90">
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
