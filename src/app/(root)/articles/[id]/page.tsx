import {
  ItemAuthor,
  ItemControls,
  RecipeBreadcrumbs,
} from "@/components/Recipe";
import ItemFooter from "@/components/Recipe/ItemFooter";
import { getArticleById } from "@/lib/article";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

const ArticlePage = async ({ params }: Props) => {
  const id = (await params).id;

  const article = await getArticleById(id);

  if (!article) return <div>Article not found</div>;
  return (
    <div className="mt-8  max-w-[600px] flex flex-col   w-full  mx-auto lg:mx-0 h-fit">
      <RecipeBreadcrumbs
        title={article.title}
        secondStep={{ name: "Статьи", href: "/articles" }}
      />
      <h2 className="font-semibold text-3xl mt-5">{article.title}</h2>

      <ItemControls
        itemId={article.id}
        favorites={article._count.favorites}
        type="ARTICLE"
      />

      <div className="relative w-full h-[270px] mt-4">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <p className="mt-4 font-light  leading-8">{article.text}</p>
      <ItemAuthor author={article.author} />

      {/* FAVORITES & COMMENTS */}
      <ItemFooter
        type="ARTICLE"
        favorites={article._count.favorites}
        itemId={article.id}
        itemComments={article.comments}
      />
    </div>
  );
};

export default ArticlePage;
