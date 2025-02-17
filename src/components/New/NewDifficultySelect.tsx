import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { useState } from "react";
import { getDifficultyHats } from "@/utils/getDifficultyHats";
import { recipeStore } from "@/stores/recipeStore";

const NewDifficultySelect = () => {
  const [value, setValue] = useState<string | null>(null);
  const values = ["1", "2", "3", "4", "5"];
  const setData = recipeStore((state) => state.setData);

  const onChange = (value: string) => {
    setValue(value);
    setData("difficulty", value);
  };

  return (
    <Select
      name="difficulty"
      onValueChange={onChange}
      value={String(value) || "1"}
    >
      <SelectTrigger className=" text-gray-500 text-xs flex-1">
        {value ? (
          <div className="flex items-center gap-2">
            {getDifficultyHats(value).yellowHats}
          </div>
        ) : (
          "Сложность от 1 до 5"
        )}
      </SelectTrigger>
      <SelectContent>
        {values.map((item, index) => (
          <SelectItem
            value={item}
            key={index}
            className="flex items-center gap-2"
          >
            <div className="flex items-center">
              {getDifficultyHats(item).yellowHats}
              {getDifficultyHats(item).greyHats}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default NewDifficultySelect;
