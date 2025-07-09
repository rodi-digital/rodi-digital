import React from "react";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
}

const baseStyles = {
  1: "text-5xl font-bold text-gray-900 mb-8",
  2: "text-3xl font-bold text-gray-900 mb-6",
  3: "text-2xl font-bold text-gray-900 mb-4",
};

export function Heading({
  level = 1,
  children,
  className = "",
  ...props
}: HeadingProps) {
  const Tag = `h${level}`;
  return React.createElement(
    Tag as string,
    { className: `${baseStyles[level]} ${className}`.trim(), ...props },
    children
  );
}

export function H1({
  children,
  className = "",
  ...props
}: Omit<HeadingProps, "level">) {
  return (
    <Heading level={1} className={className} {...props}>
      {children}
    </Heading>
  );
}

export function H2({
  children,
  className = "",
  ...props
}: Omit<HeadingProps, "level">) {
  return (
    <Heading level={2} className={className} {...props}>
      {children}
    </Heading>
  );
}

export function H3({
  children,
  className = "",
  ...props
}: Omit<HeadingProps, "level">) {
  return (
    <Heading level={3} className={className} {...props}>
      {children}
    </Heading>
  );
}

export default Heading;
