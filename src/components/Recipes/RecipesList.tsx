"use client";
import { RecipeType } from "@/types";
import RecipesListMore from "./RecipesListMore";
import { recipeStore } from "@/stores/recipeStore";
import { useEffect, useState } from "react";
import RecipesSkeleton from "./RecipesSkeleton";
import ListItem from "./ListItem";

// TODO: ЗНАЧЕНИЕ (ШТУК) СЕЙЧАС РАВНО 250, нужно что-то придумать, так как если я выбираю 2 шт яиц, то там точно не будет 250 грамм

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

  useEffect(() => {
    if(recipes.length < 5) setHasMore(false);
  }, [recipes])

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
