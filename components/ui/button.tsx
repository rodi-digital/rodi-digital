import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary";
}

export function Button({ href, children, className, variant = "default", ...props }: ButtonProps) {
  const baseClasses = "px-6 py-2 rounded font-medium transition-colors inline-block text-center";
  
  const variantClasses = {
    default: "bg-primary text-white hover:bg-[#2d217c]",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
  };

  return (
    <Link
      href={href}
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
