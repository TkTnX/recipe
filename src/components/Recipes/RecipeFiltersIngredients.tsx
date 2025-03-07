import { ingredientsStore } from "@/stores/ingredientsStore";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import NewInformationInput from "../New/NewInformationInput";
import NewIngredientsDropdown from "../New/NewIngredientsDropdown";

type Props = {
  ingIds: string[];
  setIngIds: React.Dispatch<React.SetStateAction<string[]>>;
};

const RecipeFiltersIngredients = ({ ingIds, setIngIds }: Props) => {
  const { ingredients, fetchIngredients } = ingredientsStore();
  const [ingredientsInQuery, setIngredientsInQuery] = useState<string[]>([]);
  const { currentIngredient } = ingredientsStore();
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 500);
  useEffect(() => {
    const getIngredients = async () => {
      await fetchIngredients(value, null);
    };
    getIngredients();
  }, [value]);

  useEffect(() => {
    if (currentIngredient && currentIngredient.id) {
      setIngIds([...ingIds, currentIngredient.id]);
      setIngredientsInQuery([...ingredientsInQuery, currentIngredient.name]);
    }
  }, [currentIngredient?.id]);
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
      <ul className="mt-4 text-sm text-gray-500 flex flex-col gap-2 list-disc pl-5">
        {ingredientsInQuery.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeFiltersIngredients;
