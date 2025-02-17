import { CONST_TYPE_OF_MEAL } from "@/constants";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { useState } from "react";
import { recipeStore } from "@/stores/recipeStore";

const NewTypeOfMealSelect = () => {
  const [value, setValue] = useState<string | null>(null);
  const name = CONST_TYPE_OF_MEAL.find((item) => item.value === value)?.name;
  const setData = recipeStore((state) => state.setData);

  const onChange = (value: string) => {
    setValue(value);
    setData("typeOfMeal", value);
  };

  return (
    <Select onValueChange={onChange} value={value || ""}>
      <SelectTrigger className=" text-gray-500 text-xs flex-1">
        {value ? name : "Приём пищи"}
      </SelectTrigger>
      <SelectContent>
        {CONST_TYPE_OF_MEAL.map((item, index) => (
          <SelectItem value={item.value} key={index}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default NewTypeOfMealSelect;
