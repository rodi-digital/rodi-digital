interface Feature {
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {features.map((feature, index) => (
        <div key={index} className={`p-4 rounded-lg`}>
          <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
          <p className="text-gray-700 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
