import { NewRecipeForm } from "@/components/New";

const AddRecipePage = () => {
  return (
    <div className="mt-8  max-w-[600px] flex flex-col   w-full  mx-auto lg:mx-0 h-fit">
      <h2 className="text-xl tracking-wider font-semibold uppercase">
        Оформление рецепта
      </h2>
      <NewRecipeForm />
      <p className="text-sm text-[#aaa] mt-2 text-center">
        Нажимая кнопку «Отправить рецепт», вы принимаете правила сервиса
      </p>
    </div>
  );
};

export default AddRecipePage;
