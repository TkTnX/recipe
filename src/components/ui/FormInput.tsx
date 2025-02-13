import { InputHTMLAttributes } from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  loading?: boolean;
  className?: string;
  label: string;
}

const FormInput = (props: FormInputProps) => {
  return (
    <label
      className="font-light text-[#aaa] flex flex-col gap-2"
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
