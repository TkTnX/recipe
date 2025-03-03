"use client";
import { RecipeType } from "@/types";
import RecipesListMore from "./RecipesListMore";
import { recipeStore } from "@/stores/recipeStore";
import { useEffect, useState } from "react";
import RecipesSkeleton from "./RecipesSkeleton";
import ListItem from "./ListItem";
import SearchListEmpty from "../Search/SearchListEmpty";

type Props = {
  params: { [key: string]: string };
};

const RecipesList = ({ params }: Props) => {
  const {
    recipes: fetchedRecipes,
    fetchRecipes,
    loading: recipeLoading,
    error,
  } = recipeStore();
  const [loading, setLoading] = useState(true);
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

  useEffect(() => setLoading(recipeLoading), [recipeLoading]);

  if (error) return <p>Ошибка при получении рецептов</p>;
  return (
    <div className="mt-10 flex flex-col gap-8">
      {recipes.length > 0 && fetchedRecipes.length > 0 ? (
        recipes.map((recipe) => (
          <ListItem type="RECIPE" key={recipe.id} item={recipe} />
        ))
      ) : loading ? (
        <RecipesSkeleton />
      ) : (
        <SearchListEmpty />
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
