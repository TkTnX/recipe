"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import NewInformationInput from "./NewInformationInput";
import NewIngredientsSelect from "./NewIngredientsSelect";

const NewIngredients = () => {
  const [quantity, setQuantity] = useState<number | null>(null);
  const [quantityWithUnit, setQuantityWithUnit] = useState("");
  return (
    <>
      <h2 className="text-xl tracking-wider font-semibold uppercase mt-10">
        Ингредиенты
      </h2>
      {/* // TODO: ПОЛУЧЕНИЕ ИНГРЕДИЕНТОВ  */}
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
      </div>
    </>
  );
};

export default NewIngredients;
