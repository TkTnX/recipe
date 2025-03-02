import { InputHTMLAttributes } from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  loading?: boolean;
  className?: string;
  labelClassName?: string;
  label: string;
}

const FormInput = ({ labelClassName, ...props }: FormInputProps) => {
  return (
    <label
      className={cn(
        "font-light text-[#aaa] flex flex-col gap-2",
        labelClassName
      )}
      htmlFor={props.id}
    >
      {props.label}
      <Input
        className={cn("outline-none text-black", props.className)}
        {...props}
        disabled={props.loading}
      />
    </label>
  );
};

export default FormInput;
