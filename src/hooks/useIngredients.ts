import { ingredientsStore } from "@/stores/ingredientsStore";
import { recipeStore } from "@/stores/recipeStore";
import { quantityObjType } from "@/types";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export const useIngredients = () => {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 200);
  const [quantity, setQuantity] = useState<number | null>(null);
  const [quantityWithUnit, setQuantityWithUnit] = useState("");
  const [quantityObj, setQuantityObj] = useState<quantityObjType | null>(null);

  const ingredientsData = ingredientsStore();
  const setData = recipeStore((state) => state.setData);
  const dataIngredients = recipeStore((state) => state.data.ingredients);

  const handleAddIngredient = () => {
    if (!ingredientsData.currentIngredient) return;
    const data = {
      ingredientId: ingredientsData.currentIngredient?.id,
      name: ingredientsData.currentIngredient?.name,
      quantity,
      quantityWithUnit,
      quantityObj: {
        ...quantityObj,
        gramms:
          quantityObj?.name === "шт."
            ? ingredientsData.currentIngredient?.weight
            : quantityObj?.gramms,
      },
      unit: quantityWithUnit,
      weight: ingredientsData.currentIngredient?.weight,
    };
    const findIngredient = dataIngredients.find(
      (ingredient) =>
        ingredient.ingredientId === ingredientsData.currentIngredient?.id
    );
    ingredientsData.setCurrentIngredient({
      ...data,
      id: data.ingredientId,
      quantityObj: {
        ...quantityObj!,
        gramms: data.weight || quantityObj?.gramms!,
      },
    });

    // Добавляем ингредиент в общее состояние рецепта
    if (!findIngredient) {
      setData("ingredients", [...dataIngredients, data]);
    }

    // Сбрасываем количество
    setQuantity(null);
    setText("");
    setQuantityWithUnit("");
    ingredientsData.setCurrentIngredient(null);
    ingredientsData.addIngredient({
      ...data,
      id: data.ingredientId,
      quantityObj: quantityObj,
    });
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
