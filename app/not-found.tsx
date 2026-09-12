import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 text-center">
      <p className="eyebrow text-primary">404</p>
      <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] max-w-2xl">
        This page doesn&apos;t exist
      </h1>
      <p className="text-lg text-muted-foreground max-w-md">
        The link may be out of date. Try the homepage, or tell us what you were
        looking for.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.18em]"
        >
          Home →
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-3 border border-border font-mono text-xs uppercase tracking-[0.18em] hover:border-primary hover:text-primary transition-colors"
        >
          Contact →
        </Link>
      </div>
    </div>
  );
}
