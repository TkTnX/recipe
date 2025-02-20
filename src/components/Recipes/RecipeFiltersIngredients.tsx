import { ingredientsStore } from "@/stores/ingredientsStore";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import NewInformationInput from "../New/NewInformationInput";
import NewIngredientsDropdown from "../New/NewIngredientsDropdown";
import { useRecipes } from "@/hooks/useRecipes";
import { useSearchParams } from "next/navigation";

const RecipeFiltersIngredients = () => {
  const { ingredients, fetchIngredients } = ingredientsStore();
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 500);
  const handleChangeFilter = useRecipes();
  const searchParams = useSearchParams();
  useEffect(() => {
    const getIngredients = async () => {
      await fetchIngredients(value);
    };
    getIngredients();
  }, [value]);

  const onClick = (id: string) => {
    // TODO: Доделать добавление
    // const ingredientIdsQuery = searchParams.get("ingredientIds") as string;
    // const ingredientIds = ingredientIdsQuery.split(",").map(Number);
    // console.log(ingredientIds);
  };

  return (
    <div>
      <NewInformationInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Например: Яблоко"
        autoComplete="off"
        label="Добавить ингредиент"
      />
      {text !== "" && <NewIngredientsDropdown ingredients={ingredients} />}
    </div>
  );
};

export default RecipeFiltersIngredients;
