interface Feature {
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <div className="flex flex-col gap-6">
      {features.map((feature, index) => (
        <div key={index}>
          <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
          <p className="text-gray-700 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
