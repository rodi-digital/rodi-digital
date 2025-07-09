import type React from "react";
import { H2 } from "@/components/ui/heading";
interface ContentCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export function ContentCard({
  title,
  description,
  children,
  className = "",
}: ContentCardProps) {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md ${className}`}>
      <H2>{title}</H2>
      <p className="text-gray-700 mb-6">{description}</p>
      {children}
    </div>
  );
}
