import NewArticleForm from "@/components/Articles/NewArticleForm";

const CreateArticlePage = () => {
  return (
    <div className="mt-8  max-w-[600px] flex flex-col   w-full  mx-auto lg:mx-0 h-fit">
      <h2 className="text-xl tracking-wider font-semibold uppercase">
        Написание статьи
      </h2>
      <NewArticleForm />
      <p className="text-sm text-[#aaa] mt-2 text-center">
        Нажимая кнопку «Создать статью», вы принимаете правила сервиса
      </p>
    </div>
  );
};

export default CreateArticlePage;
