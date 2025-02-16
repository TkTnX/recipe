import { InputHTMLAttributes } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  loading?: boolean;
  className?: string;
  label?: string;
}

const NewInformationInput = (props: FormInputProps) => {
  return (
    <label className={cn("flex flex-col gap-2", props.className)}>
      <p className="flex items-start font-semibold">
        {props.label}{" "}
        {props.required && <span className="text-[#ff961b] text-lg block -mt-2">*</span>}
      </p>
      <Input className="focus:border-[#ff961b] focus-visible:ring-0" {...props} />
    </label>
  );
};

export default NewInformationInput;
