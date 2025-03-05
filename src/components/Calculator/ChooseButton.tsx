import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  state?: string;
}

const ChooseButton = ({ children, className, state, ...props }: Props) => {
  return (
    <button
      {...props}
      type="button"
      className={cn(
        "border border-inherit py-3 px-4 rounded-xl bg-white shadow-lg font-light transition",
        { "bg-[#f4fcf5] border-[#24bd3c]": state === props.value },
        className
      )}
    >
      {children}
    </button>
  );
};

export default ChooseButton;
