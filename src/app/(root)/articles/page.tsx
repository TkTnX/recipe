import ArticlesList from "@/components/Articles/ArticlesList";
import ButtonLink from "@/components/ui/buttons/buttonLink";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Интересные статьи",
  description: "Recipe - рецепты, статьи, мастерклассы, новости кулинарии",
};

const ArticlesPage = () => {
  return (
    <div className="mt-8  max-w-[600px] flex flex-col   w-full  mx-auto lg:mx-0 h-fit">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Интересные статьи</h2>
        <ButtonLink href="/new/article" isAdd>
          Создать статью
        </ButtonLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ArticlesList />
      </Suspense>
    </div>
  );
};

export default ArticlesPage;
