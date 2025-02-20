import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ isDisabled, className, ...props }) => {
  return (
    <button
      disabled={isDisabled}
      className={cn(
        `bg-primary flex items-center gap-2 px-8 py-4 rounded-full  w-fit   disabled:bg-gray-500 disabled:cursor-not-allowed transition disabled:opacity-50 ${className}`
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
