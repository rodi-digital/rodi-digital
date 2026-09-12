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
import { SITE_URL, siteGraph } from "@/lib/seo";

const DESCRIPTION =
  "Rodi Digital is an AI development agency in 's-Hertogenbosch (Den Bosch), the Netherlands. We build AI-powered applications, AI agents, cross-platform mobile apps, and high-conversion websites.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rodi Digital | AI, Mobile & Web Development Agency",
    template: "%s | Rodi Digital",
  },
  description: DESCRIPTION,
  keywords: [
    "AI development agency",
    "AI development Netherlands",
    "mobile app development",
    "web development agency",
    "cross-platform apps",
    "AI chatbots",
    "Netherlands digital agency",
    "custom software development",
  ],
  openGraph: {
    title: "Rodi Digital | AI, Mobile & Web Development Agency",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Rodi Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodi Digital | AI, Mobile & Web Development Agency",
    description: DESCRIPTION,
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="font-sans antialiased">
        {/* JSON-LD is valid anywhere in the document; keeping it in <body>
            avoids hand-rolling a <head> element in the App Router. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
        />
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
