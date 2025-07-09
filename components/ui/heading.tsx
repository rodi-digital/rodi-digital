import React from "react";
import { cn } from "../../lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export function H1({
  children,
  className = "",
  ...props
}: Omit<HeadingProps, "level">) {
  return (
    <h1 className={cn("text-5xl  text-gray-900 mb-8", className)} {...props}>
      {children}
    </h1>
  );
}

export function H2({
  children,
  className = "",
  ...props
}: Omit<HeadingProps, "level">) {
  return (
    <h2
      className={cn("text-3xl font-bold text-gray-900 mb-6", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  className = "",
  ...props
}: Omit<HeadingProps, "level">) {
  return (
    <h3
      className={cn("text-2xl font-bold text-gray-900 mb-4", className)}
      {...props}
    >
      {children}
    </h3>
  );
}
