import RecipesList from "@/components/Recipes/RecipesList";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Рецепты - более 100 уникальных рецептов",
  description: "Recipe - рецепты, статьи, мастерклассы, новости кулинарии",
};


const RecipesPage = async () => {
  return (
    <div className="max-w-[600px] flex flex-col   w-full  mx-auto lg:mx-0 h-fit">
      <Suspense fallback={<div>Loading...</div>}>
        <RecipesList />
      </Suspense>
    </div>
  );
};

export default RecipesPage;
