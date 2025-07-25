import { HomeCard } from "./home-card";

export type StickyCard = {
  title: string;
  description: string;
};

type StickyCardsProps = {
  minHeight: number;
  cardContent: StickyCard[];
};

export const StickyCards = ({ minHeight, cardContent }: StickyCardsProps) => {
  return (
    <section className="py-12 px-4">
      <div
        className="flex flex-col items-center w-full mx-auto max-w-md relative gap-12"
        style={{ minHeight: "1000px" }}
      >
        {cardContent.map((card) => (
          <HomeCard
            key={card.title}
            className="sticky top-36 z-10"
            title={card.title}
            body={card.description}
          />
        ))}
      </div>
    </section>
  );
};
