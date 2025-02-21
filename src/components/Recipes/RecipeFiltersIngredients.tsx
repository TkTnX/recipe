import { ingredientsStore } from "@/stores/ingredientsStore";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import NewInformationInput from "../New/NewInformationInput";
import NewIngredientsDropdown from "../New/NewIngredientsDropdown";

const RecipeFiltersIngredients = () => {
  const { ingredients, fetchIngredients } = ingredientsStore();
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 500);
  useEffect(() => {
    const getIngredients = async () => {
      await fetchIngredients(value);
    };
    getIngredients();
  }, [value]);


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
