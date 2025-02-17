"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import NewInformationInput from "./NewInformationInput";
import NewIngredientsSelect from "./NewIngredientsSelect";
import NewTypeOfMealSelect from "./NewTypeOfMealSelect";
import NewDifficultySelect from "./NewDifficultySelect";
import { recipeStore } from "@/stores/recipeStore";

const NewIngredients = () => {
  const [quantity, setQuantity] = useState<number | null>(null);
  const [quantityWithUnit, setQuantityWithUnit] = useState("");
  // todo: set data dodelat'
  const setData = recipeStore(state => state.setData)
  const handleChangeQuantity = () => {
    if (quantity) {

    }
  }

  return (
    <>
      <h2 className="text-xl tracking-wider font-semibold uppercase mt-10">
        Ингредиенты
      </h2>
      <div className="flex gap-6 flex-col  border rounded-lg p-6 mt-4 ">
        <NewInformationInput
          placeholder="Например: 1 яблоко"
          name="ingredient"
        />
        <div className="flex items-center gap-6">
          <Input
            value={quantity || ""}
            onChange={(e) => setQuantity(+e.target.value)}
            type="number"
            className="w-fit max-w-[100px]"
            placeholder="Кол-во"
          />
          <NewIngredientsSelect
            setQuantityWithUnit={setQuantityWithUnit}
            quantity={quantity}
          />
        </div>
        <div className="flex flex-col vsm:flex-row items-center gap-5">
          <NewDifficultySelect />

          <NewTypeOfMealSelect />
        </div>
      </div>
    </>
  );
};

export default NewIngredients;
