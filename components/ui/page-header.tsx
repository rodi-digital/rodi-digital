import { H1 } from "@/components/ui/heading";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  badgeColor?: "blue" | "purple" | "green" | "pink" | "orange";
}

const badgeColors = {
  blue: "bg-blue-100 text-blue-800",
  purple: "bg-purple-100 text-purple-800",
  green: "bg-green-100 text-green-800",
  pink: "bg-pink-100 text-pink-800",
  orange: "bg-orange-100 text-orange-800",
};

export function PageHeader({
  title,
  subtitle,
  description,
  badge,
  badgeColor = "blue",
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      {badge && (
        <span
          className={`inline-block px-3 py-1 ${badgeColors[badgeColor]} text-sm font-semibold rounded-full mb-4`}
        >
          {badge}
        </span>
      )}
      <H1>{title}</H1>
      {subtitle && <p className="text-xl text-gray-600 mb-4">{subtitle}</p>}
      {description && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
