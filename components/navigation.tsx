"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { fadeIn } from "@/lib/scroll-animations";
import { path as routePath, type RouteKey } from "@/lib/routes";

const NAV: {
  name: string;
  route: RouteKey;
  children?: { name: string; route: RouteKey }[];
}[] = [
  {
    name: "Approach",
    route: "approach",
    children: [
      { name: "Analytics", route: "approachAnalytics" },
      { name: "Collaboration", route: "approachCollaboration" },
    ],
  },
  {
    name: "Services",
    route: "services",
    children: [
      { name: "AI-Powered Applications", route: "servicesAi" },
      { name: "Mobile", route: "servicesMobile" },
      { name: "Web", route: "servicesWeb" },
    ],
  },
  {
    name: "Cases",
    route: "cases",
    children: [
      { name: "IPRHQ", route: "caseIprhq" },
      { name: "DiffGraph", route: "caseDiffgraph" },
      { name: "Wally", route: "caseWally" },
      { name: "PEACHealth", route: "casePeach" },
      { name: "Rodi", route: "caseRodi" },
      { name: "Trai", route: "caseTrai" },
      { name: "Rodi Sites", route: "caseRodiSites" },
      { name: "Loop Sleep", route: "caseLoop" },
    ],
  },
  { name: "Blog", route: "blog" },
];

const CTA = "Let\u2019s Chat";
const LOGO_ALT = "Rodi Digital — AI development agency, 's-Hertogenbosch";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (itemName: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 150);
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const navigation = NAV.map((item) => ({
    name: item.name,
    href: routePath(item.route),
    children: item.children?.map((c) => ({
      name: c.name,
      href: routePath(c.route),
    })),
  }));

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border py-3"
          : "py-6"
      )}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      custom={0.2}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={1}>
            <Link href={routePath("home")} className="flex items-center group">
              <Image
                src="/rodi-digital-logo.svg"
                width={scrolled ? 90 : 130}
                height={scrolled ? 39 : 56}
                alt={LOGO_ALT}
                className="transition-all duration-300"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={0.4 + index * 0.1}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors duration-200",
                    "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="text-primary/60">0{index + 1}</span>
                  <span>{item.name}</span>
                  {item.children && (
                    <motion.div
                      animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={12} />
                    </motion.div>
                  )}
                </Link>

                {item.children && (
                  <motion.div
                    className="absolute top-full left-0 mt-3 w-72 bg-background-elevated/95 backdrop-blur-xl border border-border overflow-hidden"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{
                      opacity: activeDropdown === item.name ? 1 : 0,
                      y: activeDropdown === item.name ? 0 : -8,
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{ pointerEvents: activeDropdown === item.name ? "auto" : "none" }}
                  >
                    <div className="p-2">
                    <div className="eyebrow px-3 py-2 border-b border-border mb-1">
                      Index / {item.name}
                    </div>
                      {item.children.map((child, childIndex) => (
                        <motion.div
                          key={child.name}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{
                            opacity: activeDropdown === item.name ? 1 : 0,
                            x: activeDropdown === item.name ? 0 : -8,
                          }}
                          transition={{
                            duration: 0.2,
                            delay: activeDropdown === item.name ? childIndex * 0.04 : 0,
                          }}
                        >
                          <Link
                            href={child.href}
                            className="flex items-center justify-between px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors duration-150"
                          >
                            <span>{child.name}</span>
                            <span className="font-mono text-[10px] text-primary/50">↗</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.8}
              className="ml-3"
            >
              <Link
                href={routePath("contact")}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:shadow-[0_0_24px_-4px_hsl(var(--primary))]"
              >
                <span className="h-1.5 w-1.5 bg-primary-foreground/80 rounded-full" />
                {CTA}
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div className="md:hidden" variants={fadeIn} initial="hidden" animate="visible" custom={1}>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="px-2 pt-4 pb-6 bg-background-elevated/95 backdrop-blur-xl border border-border mt-4">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -16 }}
                transition={{ duration: 0.3, delay: isOpen ? index * 0.06 : 0 }}
                className="border-b border-border/60 last:border-b-0"
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-4 font-mono text-sm uppercase tracking-[0.14em] text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-primary/60 text-xs">0{index + 1}</span>
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-6 mb-2 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
            <Link
              href={routePath("contact")}
              className="mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.18em]"
              onClick={() => setIsOpen(false)}
            >
              {CTA} →
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
