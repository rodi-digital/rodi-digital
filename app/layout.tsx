import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/navigation";
import { GradientBackground } from "@/components/ui/gradient-background";
import { PostHogProvider } from "@/components/PostHogProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { fontVariables } from "@/lib/fonts";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rodi Digital | AI, Mobile & Web Development Agency",
    template: "%s | Rodi Digital",
  },
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
    url: SITE_URL,
    siteName: "Rodi Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rodi Digital | AI, Mobile & Web Development Agency in the Netherlands",
    description:
      "We help startups and enterprises build AI chatbots, cross-platform mobile apps, and high-conversion websites. Based in the Netherlands, serving clients worldwide.",
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
  url: SITE_URL,
  logo: `${SITE_URL}/rodi-digital-logo.svg`,
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
    contactType: "customer service",
    email: "hello@rodi-digital.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/rodi-digital",
    "https://github.com/rodi-digital",
  ],
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
    <html lang="en" className={fontVariables}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <PostHogProvider>
          <GradientBackground>
            <Navigation />
            <main className="relative z-10">{children}</main>
            <Footer />
          </GradientBackground>
          <CustomCursor />
        </PostHogProvider>
        {/* Must live inside <body>. As a direct child of <html> after </body>
            this is invalid HTML, and the browser relocates it while parsing —
            which leaves the DOM not matching what React rendered. */}
        <GoogleAnalytics gaId="G-TJNMYDCFDT" />
      </body>
    </html>
  );
}
