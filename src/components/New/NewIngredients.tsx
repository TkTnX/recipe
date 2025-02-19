"use client";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import NewInformationInput from "./NewInformationInput";
import NewIngredientsSelect from "./NewIngredientsSelect";
import NewTypeOfMealSelect from "./NewTypeOfMealSelect";
import NewDifficultySelect from "./NewDifficultySelect";
import { recipeStore } from "@/stores/recipeStore";
import NewCreateIngredient from "./NewCreateIngredient";
import { ingredientsStore } from "@/stores/ingredientsStore";
import { useDebounce } from "use-debounce";
import NewIngredientsDropdown from "./NewIngredientsDropdown";
const NewIngredients = () => {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 500);
  const [quantity, setQuantity] = useState<number | null>(null);
  const [quantityWithUnit, setQuantityWithUnit] = useState("");
  const { fetchIngredients, ingredients, loading, error } = ingredientsStore();
  const setData = recipeStore((state) => state.setData);
  const handleChangeQuantity = () => {
    if (quantity) {
    }
  };

  useEffect(() => {
    const getIngredients = async () => {
      await fetchIngredients(value);
    };
    getIngredients();
  }, [value]);

  return (
    <>
      <h2 className="text-xl tracking-wider font-semibold uppercase mt-10">
        Ингредиенты
      </h2>
      <div className="flex gap-6 flex-col  border rounded-lg p-6 mt-4 ">
        <div className="relative">
          <NewInformationInput
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Например: Яблоко"
            name="ingredient"
          />
          {text !== "" && (
            <NewIngredientsDropdown ingredients={ingredients} />
          )}
        </div>
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
        <NewCreateIngredient>
          <button className="text-xs text-[#aaa] text-left group hover:text-black transition">
            Не нашли нужный ингредиент?{" "}
            <span className="bg-primary opacity-80 group-hover:opacity-100 text-black px-2 py-1 rounded transition">
              Добавьте его на сайт!
            </span>
          </button>
        </NewCreateIngredient>
      </div>
    </>
  );
};

export default NewIngredients;
