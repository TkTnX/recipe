"use client";
import { ArrowDownUp, Settings2Icon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { CONST_SORT } from "@/constants";
import RecipesFiltersModal from "./RecipesFiltersModal";

const RecipesFilters = () => {
  return (
    <div className="mt-4 flex items-center gap-3">
      <Select>
        <SelectTrigger className="w-fit flex items-center gap-2 rounded-full border-black outline-none">
          <ArrowDownUp strokeWidth={1} />
          СОРТИРОВКА
        </SelectTrigger>
        <SelectContent>
          {CONST_SORT.map((item, index) => (
            <SelectItem value={item.value} key={index}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <RecipesFiltersModal>
        <button className="flex items-center gap-2 border border-black rounded-full py-2 px-3">
          <Settings2Icon strokeWidth={1} />
          ФИЛЬТРЫ
        </button>
      </RecipesFiltersModal>
    </div>
  );
};

export default RecipesFilters;
