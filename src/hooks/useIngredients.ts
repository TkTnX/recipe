import { ingredientsStore } from "@/stores/ingredientsStore";
import { recipeStore } from "@/stores/recipeStore";
import { quantityObjType } from "@/types";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export const useIngredients = () => {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 500);
  const [quantity, setQuantity] = useState<number | null>(null);
  const [quantityWithUnit, setQuantityWithUnit] = useState("");
  const [quantityObj, setQuantityObj] = useState<quantityObjType | null>(null);

  const ingredientsData = ingredientsStore();
  const setData = recipeStore((state) => state.setData);
  const dataIngredients = recipeStore((state) => state.data.ingredients);

    // TODO: Пофиксить баг, при котором после добавления 2 ингредиента граммовка не изменяется (возможно очищать значения после нажатия кнопки добавить ингредиент)
  const handleAddIngredient = () => {
    if (!ingredientsData.currentIngredient) return;

    const findIngredient = dataIngredients.find(
      (ingredient) =>
        ingredient.ingredientId === ingredientsData.currentIngredient?.id
    );
    ingredientsData.setCurrentIngredient({
      id: ingredientsData.currentIngredient.id,
      name: ingredientsData.currentIngredient.name,
      quantity,
      unit: quantityWithUnit,
      quantityObj,
    });

    // Добавляем ингредиент в общее состояние рецепта
    if (!findIngredient) {
      setData("ingredients", [
        ...dataIngredients,
        {
          ingredientId: ingredientsData.currentIngredient?.id,
          name: ingredientsData.currentIngredient?.name,
          quantity,
          quantityWithUnit,
          quantityObj,
        },
      ]);
    }

    // Сбрасываем количество
    setQuantity(null);
  };

  useEffect(() => {
    const getIngredients = async () => {
      await ingredientsData.fetchIngredients(value, null);
    };
    getIngredients();
  }, [value]);

  return {
    text,
    setText,
    quantity,
    setQuantity,
    quantityWithUnit,
    setQuantityWithUnit,
    quantityObj,
    setQuantityObj,
    ingredientsData,
    handleAddIngredient,
  };
};
