import { ingredientsStore } from "@/stores/ingredientsStore";
import { Ingredient } from "@prisma/client";

type Props = {
  ingredients: Ingredient[];
  clearText?: () => void;
  onAddId?: (id: string) => void;
};

const NewIngredientsDropdown = ({ ingredients, clearText, onAddId }: Props) => {
  const { setCurrentIngredient } = ingredientsStore();
  const onAddIngredient = (ingredient: Ingredient) => {
    const findIngredient = ingredients.find(
      (findIng) => findIng.id === ingredient.id
    );
    if (!findIngredient) return;
    setCurrentIngredient({
      id: ingredient.id,
      name: ingredient.name,
      quantity: null,
      unit: null,
      quantityObj: null,
      weight: ingredient.weight,
    });
    onAddId?.(ingredient.id);
    clearText?.();
  };
  return (
    <div className="absolute top-12 left-0 right-0 bg-white border rounded-lg border-primary flex flex-col items-start overflow-y-auto max-h-72 z-10">
      {ingredients.length > 0 ? (
        ingredients.map((ingredient) => (
          <button
            onClick={() => onAddIngredient(ingredient)}
            type="button"
            key={ingredient.id}
            className="p-3 hover:bg-[#f5f5f5] w-full text-left flex items-center gap-2"
          >
            {ingredient.name}
          </button>
        ))
      ) : (
        <p className="text-center p-3 w-full text-gray-500">
          Ничего не найдено
        </p>
      )}
    </div>
  );
};

export default NewIngredientsDropdown;
