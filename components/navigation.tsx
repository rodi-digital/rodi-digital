"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
          name: "AI-Enabled Applications",
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
        { name: "PEACHealth", href: "/cases/peach" },
        { name: "Rodi", href: "/cases/rodi" },
        { name: "Trai", href: "/cases/trai" },
      ],
    },
  ];

  return (
    <div className="w-full flex justify-center pt-4">
      <nav
        className={cn(
          "fixed z-50",
          "max-w-6xl w-full mx-auto bg-white/60 backdrop-blur-sm border border-white/50 rounded-full shadow-lg p-2 text-white before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Rodi Digital
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
