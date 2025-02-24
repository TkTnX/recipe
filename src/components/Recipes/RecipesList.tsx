"use client";
import { RecipeType } from "@/types";
import RecipeItem from "./RecipeItem";
import RecipesListMore from "./RecipesListMore";
import { recipeStore } from "@/stores/recipeStore";
import { useEffect, useState } from "react";
import RecipesSkeleton from "./RecipesSkeleton";

type Props = {
  params: { [key: string]: string };
};

const RecipesList = ({ params }: Props) => {
  const {
    recipes: fetchedRecipes,
    fetchRecipes,
    loading,
    error,
  } = recipeStore();
  const paramsString = new URLSearchParams(params).toString();
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [page, setPage] = useState(params.page || "1");
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    const getRecipes = async () => {
      const recipes = await fetchRecipes(params);

      if (recipes) {
        setRecipes(recipes);
      }
    };
    getRecipes();
  }, [paramsString]);

  if (error) return <p>Ошибка при получении рецептов</p>;
  return (
    <div className="mt-10 flex flex-col gap-8">
      {recipes.length > 0 && fetchedRecipes.length > 0 ? (
        recipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : loading ? (
        <RecipesSkeleton />
      ) : (
        <div className="mt-6">
          <h4 className="text-2xl font-semibold">
            К сожалению, мы ничего не нашли по вашему запросу.
          </h4>
          <p className="mt-3">Попробуйте ввести другой запрос</p>
        </div>
      )}
      {hasMore && (
        <RecipesListMore
          setPage={setPage}
          page={page}
          setRecipes={setRecipes}
          recipes={recipes}
          setHasMore={setHasMore}
        />
      )}
    </div>
  );
};

export default RecipesList;
