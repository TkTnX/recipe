import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  isPending?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  isDisabled,
  isPending,
  className,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled || isPending}
      className={cn(
        `bg-primary flex items-center gap-2 px-8 py-4 rounded-full  w-fit   disabled:bg-gray-500 disabled:cursor-not-allowed transition disabled:opacity-50 ${className}`
      )}
      {...props}
    >
      {isPending ? <Loader2 className="animate-spin" /> : props.children}
    </button>
  );
};

export default Button;
