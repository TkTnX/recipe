"use client";

import { articlesStore } from "@/stores/articlesStore";
import { Article } from "@/prisma/generated/client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import ListItem from "../Recipes/ListItem";
import RecipesListMore from "../Recipes/RecipesListMore";
import RecipesSkeleton from "../Recipes/RecipesSkeleton";
const ArticlesList = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(params.get("page") || "1");
  const [articles, setArticles] = useState<Article[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const { error, fetchArticles, loading: articleLoading } = articlesStore();

  useEffect(() => {
    const getArticles = async () => {
      const articles = await fetchArticles("", Number(page));
      if (articles) setArticles(articles);
    };
    getArticles();
  }, []);

  useEffect(() => setLoading(articleLoading), [articleLoading]);

  if (error) return <div>Ошибка при получении статей</div>;
  if (loading)
    return (
      <div className="mt-10">
        <RecipesSkeleton />
      </div>
    );
  return (
    <div className="mt-10 flex flex-col gap-8">
      {articles.map((article): any => (
        <ListItem key={article.id} item={article} type="ARTICLE" />
      ))}
      {hasMore && (
        <Suspense>
          <RecipesListMore
            setPage={setPage}
            page={page}
            setItems={setArticles}
            items={articles}
            setHasMore={setHasMore}
            type="ARTICLE"
          />
        </Suspense>
      )}
    </div>
  );
};

export default ArticlesList;
