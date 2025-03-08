"use client";
import { useEffect, useState } from "react";
import IngredientItem from "./IngredientItem";
import { ingredientsStore } from "@/stores/ingredientsStore";
import IngredientsSkeleton from "./IngredientsSkeleton";
import { Ingredient } from "@/prisma/generated/client";
import IngredientsListLoadMore from "./IngredientsListLoadMore";

const IngredientsList = () => {
  const [page, setPage] = useState(1);
  const {
    ingredients: fetchedIngredients,
    fetchIngredients,
    loading,
    error,
  } = ingredientsStore();
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    const getIngredients = async () => {
      const newIngredients = await fetchIngredients("", page);
      setIngredients([...ingredients, ...newIngredients]);
    };

    getIngredients();
  }, [page]);

  if (error) return <p>Ошибка при загрузке ингредиентов</p>;

  return (
    <div className="mt-10">
      <div className="grid vsm:grid-cols-2 sm:grid-cols-3 gap-6 ">
        {!loading
          ? ingredients.map((ingredient: Ingredient) => (
              <IngredientItem key={ingredient.id} ingredient={ingredient} />
            ))
          : [...new Array(15)].map((_, i) => <IngredientsSkeleton key={i} />)}
      </div>

      {fetchedIngredients.length === 15 && (
        <IngredientsListLoadMore onClick={() => setPage(page + 1)} />
      )}
    </div>
  );
};

export default IngredientsList;
