"use client";
import { RecipeType } from "@/types";
import { recipeStore } from "@/stores/recipeStore";
import { useEffect, useState } from "react";
import ListItem from "../Recipes/ListItem";
import RecipesSkeleton from "../Recipes/RecipesSkeleton";
import RecipesListMore from "../Recipes/RecipesListMore";
import { ingredientsStore } from "@/stores/ingredientsStore";
import { Ingredient } from "@prisma/client";
import SearchListEmpty from "./SearchListEmpty";

type Props = {
  params: { [key: string]: string };
};

const SearchList = ({ params }: Props) => {
  const {
    recipes: fetchedRecipes,
    fetchRecipes,
    loading,
    error,
  } = recipeStore();
  // TODO: Доделать (поиск по продуктам)
  const { fetchIngredients } = ingredientsStore();
  const paramsString = new URLSearchParams(params).toString();
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([]);
  const [items, setItems] = useState<(Ingredient | RecipeType)[]>([]);
  const [page, setPage] = useState(params.page || "1");
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    const getItems = async () => {
      const recipes = await fetchRecipes(params);

      const ingredients = await fetchIngredients(params.search, Number(page));
      if (recipes || ingredients) {
        setItems((prevItems) => [
          ...new Set([...prevItems, ...recipes, ...ingredients]),
        ]);
      }
    };
    getItems();
  }, [paramsString, page]);
  useEffect(() => {
    if (recipes.length < 5) setHasMore(false);
  }, [recipes]);

  if (error) return <p>Ошибка при получении рецептов</p>;
  console.log(items);
  if (!loading && !items) return <SearchListEmpty />;
  return (
    <div className="mt-10 flex flex-col gap-8">
      {items.length > 0 ? (
        items.map((item) => (
          <ListItem type={item.type} key={item.id} item={item} />
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

export default SearchList;
