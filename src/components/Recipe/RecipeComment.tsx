"use client";
import { deleteComment } from "@/actions/recipe-actions";
import { formActionInitialState } from "@/constants";
import { cn } from "@/lib/utils";
import { userStore } from "@/stores/userStore";
import { CommentType } from "@/types";
import { Trash } from "lucide-react";
import { useActionState } from "react";

const RecipeComment = ({ comment }: { comment: CommentType }) => {
  const { user } = userStore();

  const [status, formAction, pending] = useActionState(
    deleteComment,
    formActionInitialState
  );

  return (
    <div className={cn("relative", { "opacity-50": pending })}>
      <h6 className="text-sm font-semibold">{comment.author.username}</h6>
      <p className="mt-2 text-sm font-light">{comment.comment}</p>
      <p className="text-xs text-[#656262] mt-2">
        {new Date(comment.createdAt).toLocaleString("ru-RU")}
      </p>
      {user?.id === comment.authorId && (
        <form action={formAction}>
          <input type="hidden" value={comment.id} name={"id"} />
          <button className="absolute right-0 top-0">
            <Trash strokeWidth={1} size={16} />
          </button>
        </form>
      )}
    </div>
  );
};

export default RecipeComment;
