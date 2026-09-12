"use client";

import Link from "next/link";
import * as motion from "motion/react-client";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "@/lib/scroll-animations";
import { Button } from "@/components/ui/button";
import { path as routePath } from "@/lib/routes";

export type ArticleSection = {
  heading: string;
  /** Body copy. The first paragraph under a question-style heading is the one
   *  answer engines tend to lift, so keep it short and direct. */
  paragraphs: string[];
  bullets?: { title: string; text: string }[];
};

const LABELS = {
  blog: "Blog",
  published: "Published",
  updated: "Updated",
  backToBlog: "All articles",
  cta: "Start a conversation",
  ctaSecondary: "See our work",
};

/** Renders a date as a locale-appropriate string without pulling in a library. */
function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
}

interface ArticleLayoutProps {
  title: string;
  lead: string;
  datePublished: string;
  dateModified?: string;
  readingTime: string;
  sections: ArticleSection[];
  ctaTitle: string;
  ctaSubtitle: string;
}

export function ArticleLayout({
  title,
  lead,
  datePublished,
  dateModified,
  readingTime,
  sections,
  ctaTitle,
  ctaSubtitle,
}: ArticleLayoutProps) {
  const labels = LABELS;
  const shown = dateModified ?? datePublished;
  const dateLabel = dateModified ? labels.updated : labels.published;

  return (
    <article className="min-h-screen">
      <header className="pt-48 md:pt-56 pb-16 md:pb-20">
        <motion.div
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="eyebrow mb-8 flex flex-wrap items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <Link href={routePath("blog")} className="link-draw">
              § {labels.blog}
            </Link>
            <span className="text-border">/</span>
            <time dateTime={shown}>
              {dateLabel} {formatDate(shown)}
            </time>
            <span className="text-border">/</span>
            <span>{readingTime}</span>
          </div>

          <h1 className="text-[10vw] md:text-[5.5vw] font-display tracking-tight text-foreground mb-10 leading-[0.95] max-w-5xl">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-display">
            {lead}
          </p>
        </motion.div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="border-t border-border"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {sections.map((section, i) => (
            <motion.section
              key={section.heading}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-14 md:py-20 border-b border-border"
              variants={staggerItem}
            >
              <div className="lg:col-span-4">
                <div className="flex items-start gap-4 lg:sticky lg:top-32">
                  <span className="eyebrow text-primary mt-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight tracking-tight">
                    {section.heading}
                  </h2>
                </div>
              </div>

              <div className="lg:col-span-7 lg:col-start-6 space-y-6">
                {section.paragraphs.map((p, pi) => (
                  <p
                    key={pi}
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                  >
                    {p}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="space-y-5 pt-2">
                    {section.bullets.map((b) => (
                      <li
                        key={b.title}
                        className="border-l border-border pl-5 py-1"
                      >
                        <strong className="block font-display text-xl text-foreground mb-1.5 tracking-tight">
                          {b.title}
                        </strong>
                        <span className="text-muted-foreground leading-relaxed">
                          {b.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.section>
          ))}
        </motion.div>

        <motion.div
          className="py-20 md:py-28 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-tight leading-[0.95] mb-8 max-w-3xl mx-auto">
            {ctaTitle}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href={routePath("contact")} className="w-full sm:w-auto">
              {labels.cta}
            </Button>
            <Button
              href={routePath("cases")}
              variant="outline"
              className="w-full sm:w-auto"
            >
              {labels.ctaSecondary}
            </Button>
          </div>
          <div className="mt-12">
            <Link
              href={routePath("blog")}
              className="link-draw font-mono text-xs uppercase tracking-[0.18em] text-primary"
            >
              ← {labels.backToBlog}
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
