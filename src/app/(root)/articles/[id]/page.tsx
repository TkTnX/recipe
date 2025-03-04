import { ItemControls } from "@/components/Recipe";
import { getArticleById } from "@/lib/article";

type Props = {
  params: Promise<{ id: string }>;
};

const ArticlePage = async ({ params }: Props) => {
  const id = (await params).id;

  const article = await getArticleById(id);

  if (!article) return <div>Article not found</div>;
    console.log(article);
    // TODO: Доделать возможность ставить лайки
  return (
    <div className="mt-8  max-w-[600px] flex flex-col   w-full  mx-auto lg:mx-0 h-fit">
      <h2 className="font-semibold text-3xl">{article.title}</h2>

      <ItemControls itemId={article.id} favorites={article._count.favorites} type="ARTICLE" />
    </div>
  );
};

export default ArticlePage;
