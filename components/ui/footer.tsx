import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { path as routePath, type RouteKey } from "@/lib/routes";

type Column = { title: string; links: { label: string; route: RouteKey }[] };

const COLUMNS: Column[] = [
  {
    title: "Development Services",
    links: [
      { label: "All Development Services", route: "services" },
      { label: "AI-Powered Applications", route: "servicesAi" },
      { label: "Mobile App Development", route: "servicesMobile" },
      { label: "Web Development", route: "servicesWeb" },
    ],
  },
  {
    title: "Our Approach",
    links: [
      { label: "Development Process", route: "approach" },
      { label: "Data Analytics", route: "approachAnalytics" },
      { label: "Client Collaboration", route: "approachCollaboration" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { label: "All Case Studies", route: "cases" },
      { label: "AI Assistant for Accountants", route: "caseWally" },
      { label: "AI IP Management Platform", route: "caseIprhq" },
      { label: "AI Sleep Companion", route: "caseLoop" },
    ],
  },
  {
    title: "Blog",
    links: [
      { label: "All Articles", route: "blog" },
      { label: "What AI Development Costs", route: "blogCost" },
      { label: "What Is an AI Agent?", route: "blogAgents" },
      { label: "Choosing an AI Agency", route: "blogAgency" },
    ],
  },
];

const COPY = {
  blurb:
    "AI development agency in 's-Hertogenbosch (Den Bosch), the Netherlands. We build AI-powered applications, AI agents, cross-platform mobile apps, and high-conversion websites for startups and enterprises across Europe and worldwide.",
  country: "The Netherlands",
  companyTitle: "Company",
  contact: "Contact Agency",
  resources: "AI Resources",
  rights: "© 2024 Rodi Digital. Built with you.",
  status: "All Systems Operational",
  cta: "Let's Talk",
  marquee: [
    "AI Development Agency",
    "Mobile · iOS · Android",
    "Web Platforms",
    "Built With You",
    "Den Bosch · NL",
    "Serving EU & US",
    "Data-Driven",
    "Conversational Agents",
  ],
};

export function Footer() {
  const copy = COPY;
  const columns = COLUMNS;

  return (
    <footer className="relative z-10 border-t border-border">
      {/* Marquee ticker */}
      <div className="border-b border-border overflow-hidden py-3">
        <div className="marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-8 px-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap"
            >
              {copy.marquee.map((t) => (
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
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/rodi-digital-logo.svg"
                width={140}
                height={61}
                alt="Rodi Digital — AI development agency, 's-Hertogenbosch"
              />
              <span className="hidden sm:flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-primary rounded-full" />
                <span className="eyebrow">NL · Online</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
              {copy.blurb}
            </p>
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground space-y-2">
              <p className="text-foreground">
                Stationsweg 19, 5211 TV &apos;s-Hertogenbosch
              </p>
              <p>{copy.country}</p>
              <a
                href="mailto:hello@rodi-digital.com"
                className="link-draw inline-block text-primary mt-3"
              >
                hello@rodi-digital.com
              </a>
              <p className="pt-2">VAT: NL867887370B01</p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {columns.map((section) => (
              <div key={section.title}>
                <h4 className="eyebrow mb-5">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.route}>
                      <Link
                        href={routePath(link.route)}
                        className="link-draw text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="eyebrow mb-5">{copy.companyTitle}</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={routePath("contact")}
                    className="link-draw text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {copy.contact}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/llms.txt"
                    className="link-draw text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {copy.resources}
                  </Link>
                </li>
              </ul>
            </div>
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
            {copy.rights}
          </p>
          <div className="flex items-center gap-6">
            <span className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-primary rounded-full" />
              {copy.status}
            </span>
            <Button href={routePath("contact")} className="px-4 py-2">
              {copy.cta}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
