import { cn } from "@/lib/utils";

type Props = { title: string; className?: string };

const CalculatorTitle = ({ title, className }: Props) => {
  return (
    <h3
      className={cn(
        "tracking-wider font-semibold flex items-center gap-2",
        className
      )}
    >
      <div className="h-2 w-2 bg-primary inline-block rounded-full" />
      {title}
    </h3>
  );
};

export default CalculatorTitle;
