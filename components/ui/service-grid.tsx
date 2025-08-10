import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  description: string;
  href: string;
}

interface ServiceGridProps {
  services: Service[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <section className="py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <span className="text-sm text-gray-400 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="text-4xl font-light text-black mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <Button href={service.href} className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-square bg-gray-50 rounded-2xl border border-gray-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}