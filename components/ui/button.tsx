import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonAsLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary";
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary";
}

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export function Button({ children, className, variant = "default", ...props }: ButtonProps) {
  const baseClasses = "px-6 py-2 rounded font-medium transition-colors inline-block text-center disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    default: "bg-primary text-white hover:bg-[#2d217c]",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    className
  );

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLinkProps;
    return (
      <Link
        href={href}
        className={classes}
        {...(linkProps as any)}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  return (
    <button
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
