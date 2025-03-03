import { Metadata } from "next";
import "./../globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderSearch from "@/components/Header/HeaderSearch";
import RecipesFilters from "@/components/Recipes/RecipesFilters";

export const metadata: Metadata = {
  title: "Результаты поиска",
  description: "Recipe - рецепты, статьи, мастерклассы, новости кулинарии",
};

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <div className="max-w-[600px] flex flex-col   w-full  mx-auto lg:mx-0 h-fit mt-8">
        <h2 className="text-3xl font-bold uppercase tracking-widest">
          Рецепты
        </h2>

        <HeaderSearch isRecipes className="mt-10" />
        <RecipesFilters />

        {children}
      </div>
    </>
  );
}
