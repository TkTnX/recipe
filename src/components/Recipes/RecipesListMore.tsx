"use client";
import Button from "../ui/buttons/button";
import { useSearchParams } from "next/navigation";
import { RecipeType } from "@/types";
import { recipeStore } from "@/stores/recipeStore";
type Params = {
  setPage: (page: string) => void;
  page: string;
  setRecipes: (recipes: RecipeType[]) => void;
  recipes: RecipeType[];
  setHasMore: (hasMore: boolean) => void;
};

const RecipesListMore = ({
  setPage,
  page,
  setRecipes,
  recipes,
  setHasMore,
}: Params) => {
  const searchParams = useSearchParams();
  const { fetchRecipes } = recipeStore();
  const params = new URLSearchParams(searchParams.toString());
  const onClick = async () => {
    setPage(String(Number(page) + 1));
    params.set("page", String(Number(page) + 1));
    const newRecipes = await fetchRecipes(Object.fromEntries(params.entries()));
    if (newRecipes.length < 5) setHasMore(false);

    if (newRecipes) {
      setRecipes([...recipes, ...newRecipes]);
    }
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
