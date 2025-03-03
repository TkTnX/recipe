"use client";
import { RecipeType } from "@/types";
import { recipeStore } from "@/stores/recipeStore";
import { useEffect, useState } from "react";
import ListItem from "../Recipes/ListItem";
import RecipesSkeleton from "../Recipes/RecipesSkeleton";
import { ingredientsStore } from "@/stores/ingredientsStore";
import { Ingredient } from "@prisma/client";
import SearchListEmpty from "./SearchListEmpty";

type Props = {
  params: { [key: string]: string };
};

const SearchList = ({ params }: Props) => {
  const { fetchRecipes, loading: recipeLoading, error } = recipeStore();
  const [loading, setLoading] = useState(true);
  const { fetchIngredients } = ingredientsStore();
  const paramsString = new URLSearchParams(params).toString();
  const [items, setItems] = useState<(Ingredient | RecipeType)[]>([]);
  useEffect(() => {
    const getItems = async () => {
      const recipes = await fetchRecipes(params);
      const ingredients = await fetchIngredients(params.search, null);
      if (recipes || ingredients) setItems([...recipes, ...ingredients]);
    };
    getItems();
  }, [paramsString]);

  useEffect(() => setLoading(recipeLoading), [recipeLoading]);

  if (error) return <p>Ошибка при получении рецептов</p>;
  return (
    <div className="mt-10 flex flex-col gap-8">
      {items.length > 0 && !loading ? (
        items.map((item) => (
          <ListItem type={item.type} key={item.id} item={item} />
        ))
      ) : loading ? (
        <RecipesSkeleton />
      ) : (
        <SearchListEmpty />
      )}
    </div>
  );
};

export default SearchList;
