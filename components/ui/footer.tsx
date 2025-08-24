import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      {
        label: "AI-Powered Applications",
        href: "/services/ai-enabled-applications",
      },
      { label: "Mobile Development", href: "/services/mobile" },
      { label: "Web Development", href: "/services/web" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Approach", href: "/approach" },
      { label: "Analytics", href: "/approach/analytics" },
      { label: "Collaboration", href: "/approach/collaboration" },
      { label: "Case Studies", href: "/cases" },
    ],
  },
  {
    title: "Cases",
    links: [
      { label: "All Cases", href: "/cases" },
      { label: "PEACHealth", href: "/cases/peach" },
      { label: "Rodi", href: "/cases/rodi" },
      { label: "Trai", href: "/cases/trai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "llms.txt", href: "/llms.txt" },
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
                alt="Logo of Rodi Digital"
              />
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                We create digital products that stand the test of time, using
                data and analytics to drive your growth.
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
