import HeaderSearch from "@/components/Header/HeaderSearch";
import RecipesFilters from "@/components/Recipes/RecipesFilters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Рецепты - более 100 уникальных рецептов",
  description: "Recipe - рецепты, статьи, мастерклассы, новости кулинарии",
};

const RecipesPage = () => {
  return (
    <div className="mt-8 flex-1">
      <h2 className="text-3xl font-bold uppercase tracking-widest">Рецепты</h2>
          <HeaderSearch isRecipes className="w-full mx-0 mt-10" />
          <RecipesFilters />
    </div>
  );
};

export default RecipesPage;
