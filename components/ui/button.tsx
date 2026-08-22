import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonAsLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
}

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export function Button({ children, className, variant = "default", ...props }: ButtonProps) {
  const baseClasses =
    "group relative inline-flex items-center justify-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed";

  const variantClasses = {
    default:
      "bg-primary text-primary-foreground hover:shadow-[0_0_28px_-4px_hsl(var(--primary))] hover:-translate-y-0.5",
    outline:
      "border border-border text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5",
    ghost: "text-foreground hover:text-primary",
  };

  const classes = cn(baseClasses, variantClasses[variant], className);

  const content = (
    <>
      <span>{children}</span>
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLinkProps;
    return (
      <Link href={href} className={classes} {...(linkProps as any)}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
