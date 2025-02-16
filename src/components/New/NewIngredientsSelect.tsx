"use client";
import { CONST_UNITS } from "@/constants";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { useState } from "react";

type Props = {
  quantity: number | null;
  setQuantityWithUnit: React.Dispatch<React.SetStateAction<string>>;
};

const NewIngredientsSelect = ({ quantity, setQuantityWithUnit }: Props) => {
  const [value, setValue] = useState("");
  const name = CONST_UNITS.find((item) => item.value === value)?.name;

  const onChange = (value: string) => {
    setValue(value);
    setQuantityWithUnit(`${quantity} ${name}`);
  };

  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className=" text-gray-500 text-xs">
        {value ? name : "Единица измерения"}
      </SelectTrigger>
      <SelectContent>
        {CONST_UNITS.map((item, index) => (
          <SelectItem value={item.value} key={index}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default NewIngredientsSelect;
