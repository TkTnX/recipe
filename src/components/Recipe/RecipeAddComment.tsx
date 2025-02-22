"use client";
import { addComment } from "@/actions/recipe-actions";
import Button from "../ui/buttons/button";
import { Textarea } from "../ui/textarea";
import { useFormStatus } from "react-dom";

const RecipeAddComment = ({ recipeId }: { recipeId: string }) => {
  return (
    <form action={addComment} className="mt-5">
      <input type="hidden" value={recipeId} name={"id"} />
      <Textarea
        name="comment"
        placeholder="Добавить комментарии"
        className="outline-none border-none bg-[#f8f8f8]"
      />
      <div className="flex flex-col-reverse vsm:flex-row items-center justify-between mt-3 gap-2 vsm:gap-0">
        <p className="text-[#aaa] text-xs vsm:w-2/3">
          Обратите внимание: комментарии проверяются модераторами. Нажимая
          “Отправить”, вы принимаете условия Пользовательского соглашения
          Recipe.ru
        </p>
        <Button
          type="submit"
          className="rounded px-4 py-2 w-full justify-center vsm:w-fit"
        >
          ОТПРАВИТЬ
        </Button>
      </div>
    </form>
  );
};

export default RecipeAddComment;
