"use client";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import NewInformationInput from "./NewInformationInput";
import NewIngredientsSelect from "./NewIngredientsSelect";
import NewTypeOfMealSelect from "./NewTypeOfMealSelect";
import NewDifficultySelect from "./NewDifficultySelect";
import { recipeStore } from "@/stores/recipeStore";
import NewCreateIngredient from "./NewCreateIngredient";
import { addIngredient, ingredientsStore } from "@/stores/ingredientsStore";
import { useDebounce } from "use-debounce";
import NewIngredientsDropdown from "./NewIngredientsDropdown";
import { PlusCircle } from "lucide-react";
const NewIngredients = () => {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 500);
  const [quantity, setQuantity] = useState<number | null>(null);
  const [quantityWithUnit, setQuantityWithUnit] = useState("");
  const [quantityObj, setQuantityObj] = useState<{
    value: string;
    name: string;
    gramms: number;
  } | null>(null);
  const {
    fetchIngredients,
    ingredients,
    currentIngredient,
    setCurrentIngredient,
  } = ingredientsStore();
  const setData = recipeStore((state) => state.setData);
  const dataIngredients = recipeStore((state) => state.data.ingredients);

  const handleAddIngredient = () => {
    const findIngredient = dataIngredients.find(
      (ingredient) => ingredient.ingredientId === currentIngredient?.id
    );
    if (currentIngredient) {
      console.log(currentIngredient);

      setCurrentIngredient({
        id: currentIngredient.id,
        name: currentIngredient.name,
        quantity,
        unit: quantityWithUnit,
        quantityObj,
      });
    }

    if (!findIngredient) {
      setData("ingredients", [
        ...dataIngredients,
        {
          ingredientId: currentIngredient?.id,
          name: currentIngredient?.name,
          quantity,
          quantityWithUnit,
          quantityObj
        },
      ]);
    }
  };

  useEffect(() => {
    const getIngredients = async () => {
      await fetchIngredients(value, null);
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
            autoComplete="off"
          />
          {text !== "" && <NewIngredientsDropdown ingredients={ingredients} />}
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
            setQuantityObj={setQuantityObj}
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
        {currentIngredient && (
          <button
            type="button"
            onClick={handleAddIngredient}
            className="w-fit bg-primary px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80 transition"
          >
            Добавить ингредиент <PlusCircle strokeWidth={1} />
          </button>
        )}
      </div>
    </>
  );
};

export default NewIngredients;
