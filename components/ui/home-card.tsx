import { H3 } from "./heading";
import { cn } from "../../lib/utils";
import { glassBackground } from "./glass-background";

type HomeCardProps = {
  title: string;
  body: string;
  className?: string;
};

export const HomeCard = ({ title, body, className = "" }: HomeCardProps) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl max-w-[400px] sticky",
        glassBackground,
        className
      )}
    >
      <H3>{title}</H3>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};
