import Link from "next/link";
import { H2 } from "@/components/ui/heading";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group rounded-xl md:max-w-[35vw]">
      <H2>{title}</H2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className={`font-semibold`}>Learn more →</div>
    </Link>
  );
}
