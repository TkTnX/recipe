import Button from "../ui/buttons/button";
import { Textarea } from "../ui/textarea";

const RecipeAddComment = ({ recipeId }: { recipeId: string }) => {
  return (
    <form className="mt-5">
      <Textarea
        placeholder="Добавить комментарии"
        className="outline-none border-none bg-[#f8f8f8]"
      />
      <div className="flex flex-col-reverse vsm:flex-row items-center justify-between mt-3 gap-2 vsm:gap-0">
        <p className="text-[#aaa] text-xs vsm:w-2/3">
          Обратите внимание: комментарии проверяются модераторами. Нажимая
          “Отправить”, вы принимаете условия Пользовательского соглашения
          Recipe.ru
        </p>
        <Button className="rounded px-4 py-2 w-full justify-center vsm:w-fit">
          ОТПРАВИТЬ
        </Button>
      </div>
    </form>
  );
};

export default RecipeAddComment;
