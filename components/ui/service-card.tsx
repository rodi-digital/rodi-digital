import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { H2 } from "@/components/ui/heading";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  iconColor: "blue" | "purple" | "green" | "pink" | "orange";
}

const iconColors = {
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
  pink: "bg-pink-100 text-pink-600",
  orange: "bg-orange-100 text-orange-600",
};

const linkColors = {
  blue: "text-blue-600 group-hover:text-blue-700",
  purple: "text-purple-600 group-hover:text-purple-700",
  green: "text-green-600 group-hover:text-green-700",
  pink: "text-pink-600 group-hover:text-pink-700",
  orange: "text-orange-600 group-hover:text-orange-700",
};

export function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  iconColor,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center mb-6">
        <div className={`p-3 ${iconColors[iconColor]} rounded-lg mr-4`}>
          <Icon className="h-8 w-8" />
        </div>
        <H2>{title}</H2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className={`${linkColors[iconColor]} font-semibold`}>
        Learn more →
      </div>
    </Link>
  );
}
