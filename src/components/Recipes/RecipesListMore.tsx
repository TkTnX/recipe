"use client";
import Button from "../ui/buttons/button";
import { useSearchParams } from "next/navigation";
import { RecipeType } from "@/types";
import { recipeStore } from "@/stores/recipeStore";
import { articlesStore } from "@/stores/articlesStore";
import { Article, Type } from "@prisma/client";
type Params<T> = {
  setPage: (page: string) => void;
  page: string;
  setItems: React.Dispatch<React.SetStateAction<T[]>>;
  items: T[];
  setHasMore: (hasMore: boolean) => void;
  type: Type;
};

const RecipesListMore = <T,>({
  setPage,
  page,
  setItems,
  items,
  setHasMore,
  type,
}: Params<T>) => {
  const searchParams = useSearchParams();
  const { fetchRecipes } = recipeStore();
  const { fetchArticles } = articlesStore();
  const params = new URLSearchParams(searchParams.toString());
  const onClick = async () => {
    setPage(String(Number(page) + 1));
    params.set("page", String(Number(page) + 1));
    const newItems =
      type === "RECIPE"
        ? await fetchRecipes(Object.fromEntries(params.entries()))
        : await fetchArticles(Number(page) + 1);
    if (newItems.length < 5) setHasMore(false);

    if (newItems) setItems([...items, ...(newItems as T[])]);
  };

  return (
    <Button
      className="uppercase rounded-sm mx-auto px-2 py-3"
      onClick={onClick}
    >
      ПРИГОТОВИТЬ ЕЩЁ
    </Button>
  );
};

export default RecipesListMore;
