import { DecreaseIcon, IncreaseIcon } from "../../assets/icons/GrowthIcon";
import { cn } from "../../lib/utils";

export function Card({
  className,
  label,
  amount,
  sublabel,
  growth,
}: {
  className?: string;
  label: string;
  amount?: string;
  sublabel?: string;
  growth: "positive" | "negative";
}) {
  return (
    <div
      className={cn(
        "px-5 py-6 rounded-2xl min-w-40 dark:bg-blue-950 dark:text-gray-300",
        className
      )}
    >
      <h4 className="text-sm font-semibold">{label}</h4>
      <div className="mt-4 flex justify-between  items-center gap-6">
        <span className="text-3xl font-semibold">{amount}</span>
        <div className="flex gap-2 text-xs font-light">
          <span>{sublabel}</span>
          <span>
            {growth === "positive" ? <IncreaseIcon /> : <DecreaseIcon />}
          </span>
        </div>
      </div>
    </div>
  );
}
