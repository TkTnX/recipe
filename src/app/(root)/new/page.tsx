import {
  NewCover,
  NewInformation,
  NewIngredients,
  NewSteps,
} from "@/components/New";

const AddRecipePage = () => {
  return (
    <div className="mt-8  max-w-[600px] flex flex-col   w-full  mx-auto lg:mx-0 h-fit">
      <h2 className="text-xl tracking-wider font-semibold uppercase">
        Оформление рецепта
      </h2>
      <form className="flex flex-col ">
        <NewCover />
        <NewInformation />
        <NewIngredients />
        <NewSteps />

        <button className="bg-primary px-8 py-4 rounded-full uppercase w-fit mx-auto mt-10">
          Отправить рецепт
        </button>
      </form>
      <p className="text-sm text-[#aaa] mt-2 text-center">
        Нажимая кнопку «Отправить рецепт», вы принимаете правила сервиса
      </p>
    </div>
  );
};

export default AddRecipePage;
