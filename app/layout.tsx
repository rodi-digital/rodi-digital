import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/navigation";
import { GradientBackground } from "@/components/ui/gradient-background";
import { PostHogProvider } from "@/components/PostHogProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodi Digital | AI, Mobile & Web Development Agency",
  description:
    "We help startups and enterprises build AI chatbots, cross-platform mobile apps, and high-conversion websites. Based in the Netherlands, serving clients worldwide.",
  keywords: [
    "AI development Netherlands",
    "mobile app development",
    "web development agency",
    "cross-platform apps",
    "AI chatbots",
    "Netherlands digital agency",
    "custom software development",
  ],
  openGraph: {
    title:
      "Rodi Digital | AI, Mobile & Web Development Agency in the Netherlands",
    description:
      "We help startups and enterprises build AI chatbots, cross-platform mobile apps, and high-conversion websites. Based in the Netherlands, serving clients worldwide.",
    url: "https://rodi-digital.com",
    siteName: "Rodi Digital",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rodi Digital",
  url: "https://rodi-digital.com",
  logo: "https://rodi-digital.com/rodi-digital-logo.svg",
  description:
    "AI, Mobile & Web Development Agency in the Netherlands specializing in AI chatbots, cross-platform mobile apps, and high-conversion websites",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stationsweg 19",
    addressLocality: "'s-Hertogenbosch",
    postalCode: "5211 TV",
    addressCountry: "NL",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+32499721771",
    contactType: "customer service",
    email: "hello@rodi-digital.com",
  },
  sameAs: ["https://www.linkedin.com/company/rodi-digital"],
  areaServed: ["NL", "EU", "US"],
  serviceType: [
    "AI Development",
    "Mobile App Development",
    "Web Development",
    "Cross-platform Development",
    "AI Chatbot Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <PostHogProvider>
          <GradientBackground>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </GradientBackground>
        </PostHogProvider>
      </body>
      <GoogleAnalytics gaId="G-TJNMYDCFDT" />
    </html>
  );
}
