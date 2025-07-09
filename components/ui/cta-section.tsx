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

const variants = {
  purple: "bg-gradient-to-r from-purple-600 to-pink-600",
  blue: "bg-gradient-to-r from-blue-600 to-cyan-600",
  green: "bg-gradient-to-r from-green-600 to-teal-600",
  pink: "bg-gradient-to-r from-pink-600 to-rose-600",
  orange: "bg-gradient-to-r from-orange-600 to-red-600",
};

export function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = "purple",
}: CTASectionProps) {
  return (
    <div className={`${variants[variant]} text-white p-8 rounded-lg`}>
      <H3>{title}</H3>
      <p className="text-lg mb-6">{description}</p>
      {(primaryButton || secondaryButton) && (
        <div className="flex flex-col sm:flex-row gap-4">
          {primaryButton && (
            <a
              href={primaryButton.href}
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {primaryButton.text}
            </a>
          )}
          {secondaryButton && (
            <a
              href={secondaryButton.href}
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              {secondaryButton.text}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
