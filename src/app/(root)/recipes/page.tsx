import HeaderSearch from "@/components/Header/HeaderSearch";
import RecipesFilters from "@/components/Recipes/RecipesFilters";
import RecipesList from "@/components/Recipes/RecipesList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Рецепты - более 100 уникальных рецептов",
  description: "Recipe - рецепты, статьи, мастерклассы, новости кулинарии",
};

type Props = {
  searchParams: Promise<{ [key: string]: string }>;
};

const RecipesPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  return (
    <div className="mt-8  max-w-[600px] flex flex-col   w-full  mx-auto lg:mx-0 h-fit">
      <h2 className="text-3xl font-bold uppercase tracking-widest">Рецепты</h2>
      <HeaderSearch isRecipes className="mt-10" />
      <RecipesFilters />
      <RecipesList params={params} />
    </div>
  );
};

export default RecipesPage;
