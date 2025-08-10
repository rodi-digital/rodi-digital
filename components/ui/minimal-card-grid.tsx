interface Card {
  title: string;
  description: string;
}

interface MinimalCardGridProps {
  title: string;
  description: string;
  cards: Card[];
  columns?: "2" | "3";
}

export function MinimalCardGrid({ 
  title, 
  description, 
  cards, 
  columns = "3" 
}: MinimalCardGridProps) {
  const gridCols = columns === "2" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  
  return (
    <section className="py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-light text-black mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            {description}
          </p>
        </div>
        
        <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="border-b border-gray-200 pb-6 mb-6 group-hover:border-gray-400 transition-colors">
                <span className="text-sm text-gray-400 font-mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-black">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}