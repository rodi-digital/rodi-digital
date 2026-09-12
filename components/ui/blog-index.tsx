"use client";

import Link from "next/link";
import * as motion from "motion/react-client";
import {
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "@/lib/scroll-animations";
import { postsByDate } from "@/lib/blog";
import { path as routePath } from "@/lib/routes";

const READ_LABEL = "Read the article →";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function BlogIndex() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="space-y-px"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {postsByDate.map((post, index) => (
            <motion.article
              key={post.route}
              className="group border-t border-border first:border-t-0"
              variants={staggerItem}
            >
              <Link
                href={routePath(post.route)}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 md:py-14 transition-colors duration-500 hover:bg-secondary/30"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    <span className="eyebrow text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="eyebrow">{post.topic}</span>
                  </div>
                  <time
                    dateTime={post.datePublished}
                    className="mt-3 block font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    {formatDate(post.datePublished)} ·{" "}
                    {post.readingTime}
                  </time>
                </div>

                <div className="lg:col-span-7 lg:col-start-6">
                  <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight leading-tight mb-4 transition-transform duration-500 group-hover:translate-x-2">
                    {post.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>
                  <span className="link-draw font-mono text-xs uppercase tracking-[0.18em] text-primary mt-5 inline-block">
                    {READ_LABEL}
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
