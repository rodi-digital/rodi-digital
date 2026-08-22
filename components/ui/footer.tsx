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
    <footer className="relative z-10 border-t border-border">
      {/* Marquee ticker */}
      <div className="border-b border-border overflow-hidden py-3">
        <div className="marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
              {[
                "AI Engineering",
                "Mobile · iOS · Android",
                "Web Platforms",
                "Built With You",
                "s-Hertogenbosch · NL",
                "Serving EU & US",
                "Data-Driven",
                "Conversational Agents",
              ].map((t) => (
                <span key={t} className="flex items-center gap-8">
                  <span className="text-primary">✦</span>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/rodi-digital-logo.svg"
                width={140}
                height={61}
                alt="Rodi Digital — AI, Mobile & Web Development Agency Netherlands"
              />
              <span className="hidden sm:flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-primary rounded-full" />
                <span className="eyebrow">NL · Online</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
              Leading AI, mobile &amp; web development agency in the Netherlands.
              We build cross-platform mobile apps, AI chatbots, and high-conversion
              websites for startups and enterprises across Europe and worldwide.
            </p>
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground space-y-2">
              <p className="text-foreground">Stationsweg 19, 5211 TV &apos;s-Hertogenbosch</p>
              <p>The Netherlands</p>
              <a
                href="mailto:hello@rodi-digital.com"
                className="link-draw inline-block text-primary mt-3"
              >
                hello@rodi-digital.com
              </a>
              <p className="pt-2">VAT: NL867887370B01</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="eyebrow mb-5">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="link-draw text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
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

        {/* Big wordmark */}
        <div className="border-t border-border py-10 overflow-hidden">
          <h2 className="font-display text-[18vw] leading-[0.8] tracking-tighter text-foreground/[0.06] select-none">
            RODI DIGITAL
          </h2>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            © 2024 Rodi Digital. Built with you.
          </p>
          <div className="flex items-center gap-6">
            <span className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary rounded-full" />
              All Systems Operational
            </span>
            <Button href="/contact" className="px-4 py-2">
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
