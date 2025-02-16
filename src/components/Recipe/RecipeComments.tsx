import RecipeAddComment from "./RecipeAddComment";
import RecipeComment from "./RecipeComment";
import { CommentType } from "@/types";

type Props = {
  comments: CommentType[];
  recipeId: string;
};

const RecipeComments = ({ comments, recipeId }: Props) => {
  return (
    <div className="mt-4">
      <p className="text-[#656262]">КОММЕНТАРИИ ({comments.length})</p>
      <RecipeAddComment recipeId={recipeId} />
      <div className="flex flex-col gap-4 mt-4">
        {comments.map((comment) => (
          <RecipeComment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default RecipeComments;
