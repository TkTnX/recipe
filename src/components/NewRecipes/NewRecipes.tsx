import { getNewRecipes } from "@/lib/recipe";
import RecipeItem from "../Recipes/RecipeItem";
import { RecipeType } from "@/types";
import Link from "next/link";

const NewRecipes = async () => {
  const recipes = await getNewRecipes();
  return (
    <div className="mt-10 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium tracking-wider">САМОЕ НОВОЕ</h2>
        <Link
          href={"/recipes"}
          className="text-sm text-[#aaa]  inline-block hover:text-black transition underline"
        >
          Все рецепты
        </Link>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe as RecipeType} />
        ))}
      </div>
    </div>
  );
};

export default NewRecipes;
