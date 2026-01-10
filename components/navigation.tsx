"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { fadeIn } from "@/lib/scroll-animations";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

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
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const navigation = [
    {
      name: "Approach",
      href: "/approach",
      children: [
        { name: "Analytics", href: "/approach/analytics" },
        { name: "Collaboration", href: "/approach/collaboration" },
      ],
    },
    {
      name: "Services",
      href: "/services",
      children: [
        {
          name: "AI-Powered Applications",
          href: "/services/ai-enabled-applications",
        },
        { name: "Mobile", href: "/services/mobile" },
        { name: "Web", href: "/services/web" },
      ],
    },
    {
      name: "Cases",
      href: "/cases",
      children: [
        { name: "IPRHQ", href: "/cases/iprhq" },
        { name: "DiffGraph", href: "/cases/diffgraph" },
        { name: "Wally", href: "/cases/wally" },
        { name: "PEACHealth", href: "/cases/peach" },
        { name: "Rodi", href: "/cases/rodi" },
        { name: "Trai", href: "/cases/trai" },
      ],
    },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/40 backdrop-blur-md border-white/20 py-2"
          : "backdrop-blur-sm py-12"
      )}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      custom={0.2}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/rodi-digital-logo.svg"
                width={scrolled ? 80 : 150}
                height={scrolled ? 40 : 80}
                alt="Rodi Digital - AI, Mobile & Web Development Agency Netherlands"
                className="transition-all duration-300"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
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
                    "flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    "hover:bg-gray-100/50 hover:text-gray-900",
                    scrolled ? "text-gray-700" : "text-gray-600"
                  )}
                >
                  <span>{item.name}</span>
                  {item.children && (
                    <motion.div
                      animate={{
                        rotate: activeDropdown === item.name ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  )}
                </Link>

                {/* Animated Dropdown */}
                {item.children && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-gray-100/50 overflow-hidden"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{
                      opacity: activeDropdown === item.name ? 1 : 0,
                      y: activeDropdown === item.name ? 0 : -10,
                      scale: activeDropdown === item.name ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{
                      pointerEvents:
                        activeDropdown === item.name ? "auto" : "none",
                    }}
                  >
                    <div className="p-2">
                      {item.children.map((child, childIndex) => (
                        <motion.div
                          key={child.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: activeDropdown === item.name ? 1 : 0,
                            x: activeDropdown === item.name ? 0 : -10,
                          }}
                          transition={{
                            duration: 0.2,
                            delay:
                              activeDropdown === item.name
                                ? childIndex * 0.05
                                : 0,
                          }}
                        >
                          <Link
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-colors duration-150"
                          >
                            {child.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Let's Chat CTA */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.8}
              className="ml-4"
            >
              <Link
                href="/contact"
                className={cn(
                  "px-6 py-2 rounded-md font-medium transition-all duration-200",
                  "bg-primary text-white hover:bg-primary/90",
                  "text-sm"
                )}
              >
                Let's Chat
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-100/50 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="px-2 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100/50 mt-4 rounded-b-2xl">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{
                  duration: 0.3,
                  delay: isOpen ? index * 0.1 : 0,
                }}
              >
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="mt-2 ml-4 space-y-1">
                    {item.children.map((child, childIndex) => (
                      <motion.div
                        key={child.name}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{
                          opacity: isOpen ? 1 : 0,
                          x: isOpen ? 0 : -15,
                        }}
                        transition={{
                          duration: 0.2,
                          delay: isOpen
                            ? index * 0.1 + childIndex * 0.05 + 0.1
                            : 0,
                        }}
                      >
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
