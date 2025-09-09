import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { copy } from "@/lib/copy";


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
                alt={copy.footer.logoAlt}
              />
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {copy.footer.description}
              </p>
              <div className="text-gray-500 text-sm space-y-1">
                <p>{copy.contact.address.street}, {copy.contact.address.postalCode} {copy.contact.address.city}</p>
                <p>{copy.contact.address.country}</p>
                <p className="font-medium text-gray-600">
                  {copy.contact.email}
                </p>
                <p>VAT: {copy.contact.vat}</p>
              </div>
            </div>

            {/* Navigation Links - Each section takes 1 column */}
            {copy.footer.sections.map((section, index) => (
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
              {copy.site.copyright}
            </p>
            <Button href="/contact" className="bg-primary hover:bg-primary/90">
              {copy.footer.ctaButton}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
