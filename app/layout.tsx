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
  title: "Rodi Digital - Apps, AI & Websites built with you",
  description:
    "Digital partner specializing in AI-enabled applications, mobile development, and web platforms. Building the future together.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
