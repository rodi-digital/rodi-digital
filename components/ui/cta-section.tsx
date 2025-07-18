import { H3 } from "@/components/ui/heading";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: "purple" | "blue" | "green" | "pink" | "orange";
}

export function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = "purple",
}: CTASectionProps) {
  return (
    <div>
      <H3>{title}</H3>
      <p className="text-lg mb-6">{description}</p>
      {(primaryButton || secondaryButton) && (
        <div className="flex flex-col sm:flex-row gap-4">
          {primaryButton && (
            <a
              href={primaryButton.href}
              className="inline-flex items-center px-6 py-3 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {primaryButton.text}
            </a>
          )}
          {secondaryButton && (
            <a
              href={secondaryButton.href}
              className="inline-flex items-center px-6 py-3 border-2  font-semibold rounded-lg"
            >
              {secondaryButton.text}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
