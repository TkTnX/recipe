"use client";
import { RecipeType } from "@/types";
import { recipeStore } from "@/stores/recipeStore";
import { useEffect, useState } from "react";
import ListItem from "../Recipes/ListItem";
import RecipesSkeleton from "../Recipes/RecipesSkeleton";
import { ingredientsStore } from "@/stores/ingredientsStore";
import { Article, Ingredient } from "@prisma/client";
import SearchListEmpty from "./SearchListEmpty";
import { articlesStore } from "@/stores/articlesStore";

type Props = {
  params: { [key: string]: string };
};

const SearchList = ({ params }: Props) => {
  const { fetchRecipes, loading: recipeLoading, error } = recipeStore();
  const { fetchArticles, articles, loading: articleLoading } = articlesStore();
  const { fetchIngredients, loading: ingredientLoading } = ingredientsStore();
  const [loading, setLoading] = useState(true);
  const paramsString = new URLSearchParams(params).toString();
  const [items, setItems] = useState<(Ingredient | RecipeType | Article)[]>([]);
  useEffect(() => {
    const getItems = async () => {
      let recipes: RecipeType[] = [];
      let ingredients: Ingredient[] = [];
      let articles: Article[] = [];
      switch (params.type) {
        case "RECIPE":
          recipes = await fetchRecipes(params);
          break;
        case "INGREDIENT":
          ingredients = await fetchIngredients(params.search, null);
          break;
        case "ARTICLE":
          articles = await fetchArticles(params.search, null);
          break;
        default:
          recipes = await fetchRecipes(params);
          ingredients = await fetchIngredients(params.search, null);
          articles = await fetchArticles(params.search, null);
          break;
      }

      setItems([...recipes, ...ingredients, ...articles]);
    };
    getItems();
  }, [paramsString]);
  useEffect(() => {
    const loading = articleLoading || recipeLoading || ingredientLoading;
    setLoading(loading);
  }, [recipeLoading, articleLoading, ingredientLoading]);

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
