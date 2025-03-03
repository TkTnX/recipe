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
    <div className="  max-w-[600px] flex flex-col   w-full  mx-auto lg:mx-0 h-fit">
      <RecipesList params={params} />
    </div>
  );
};

export default RecipesPage;
