import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { H2 } from "@/components/ui/heading";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center mb-6">
        <H2>{title}</H2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className={`font-semibold`}>Learn more →</div>
    </Link>
  );
}
