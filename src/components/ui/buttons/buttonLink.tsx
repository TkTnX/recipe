import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

interface ButtonLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  isAdd?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  isAdd,
  ...props
}) => {
  return (
    <Link
      className={cn(
        "flex items-center gap-2 px-2 lg:px-4 py-2 rounded-full border border-black text-sm hover:bg-primary hover:border-primary transition",
        className
      )}
      {...props}
    >
      <span className={cn("", { "hidden md:block": isAdd })}>
        {props.children}
      </span>{" "}
      {isAdd && <PlusCircle strokeWidth={1} size={20} />}
    </Link>
  );
};

export default ButtonLink;
