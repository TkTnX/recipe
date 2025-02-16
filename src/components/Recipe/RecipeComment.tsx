import { CommentType } from "@/types";

const RecipeComment = ({ comment }: { comment: CommentType }) => {
  return (
    <div className="">
      <h6 className="text-sm font-semibold">{comment.author.username}</h6>
      <p className="mt-2 text-sm font-light">{comment.comment}</p>
      <p className="text-xs text-[#656262] mt-2">
        {new Date(comment.createdAt).toLocaleString("ru-RU")}
      </p>
    </div>
  );
};

export default RecipeComment;
