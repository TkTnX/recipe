"use client";
import { CONST_UNITS } from "@/constants";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { useEffect, useState } from "react";
import { quantityObjType } from "@/types";
import { ingredientsStore } from "@/stores/ingredientsStore";

type Props = {
  quantity: number | null;
  setQuantityWithUnit: React.Dispatch<React.SetStateAction<string>>;
  setQuantityObj: React.Dispatch<React.SetStateAction<quantityObjType | null>>;
};

const NewIngredientsSelect = ({
  quantity,
  setQuantityWithUnit,
  setQuantityObj,
}: Props) => {
  const [value, setValue] = useState("");
  const name = CONST_UNITS.find((item) => item.value === value)?.name;
  const currentIngredient = ingredientsStore(
    (state) => state.currentIngredient
  );

  const onChange = (value: string) => {
    const selectedName = CONST_UNITS.find((item) => item.value === value)?.name;
    const item = CONST_UNITS.find((item) => item.value === value);
    setQuantityObj(item ? item : null);
    setValue(value);
    setQuantityWithUnit(`${quantity} ${selectedName}`);
  };

  useEffect(() => {
    !quantity && setValue("");
  }, [quantity]);

  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className=" text-gray-500 text-xs">
        {value ? name : "Единица измерения"}
      </SelectTrigger>
      <SelectContent>
        {CONST_UNITS.map((item, index) => (
          <SelectItem value={item.value} key={index}>
            {item.name} (
            {item?.name === "шт." ? currentIngredient?.weight : item.gramms} г в
            ед.)
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default NewIngredientsSelect;
