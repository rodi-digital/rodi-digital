import { H1 } from "@/components/ui/heading";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <H1>{title}</H1>
      {subtitle && <p className="text-xl text-gray-600 mb-4">{subtitle}</p>}
      {description && (
        <p className="text-xl text-gray-600 mx-auto">{description}</p>
      )}
    </div>
  );
}
