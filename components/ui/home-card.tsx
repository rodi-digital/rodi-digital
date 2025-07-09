import { H3 } from "./heading";
import { cn } from "../../lib/utils";

type HomeCardProps = {
  title: string;
  body: string;
  className?: string;
};

export const HomeCard = ({ title, body, className = "" }: HomeCardProps) => {
  return (
    <div
      className={cn(
        "text-center p-8 bg-white/50 backdrop-blur-sm rounded-xl max-w-[400px] sticky",
        className
      )}
    >
      <H3>{title}</H3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};
