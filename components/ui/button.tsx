import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
}

export function Button({ href, children, className, ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "bg-primary text-white px-6 py-2 rounded font-medium hover:bg-[#2d217c] transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
