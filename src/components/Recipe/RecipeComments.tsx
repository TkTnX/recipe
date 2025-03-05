import RecipeAddComment from "./RecipeAddComment";
import RecipeComment from "./RecipeComment";
import { CommentType } from "@/types";

type Props = {
  comments: CommentType[];
  itemId: string;
  type: string
};

const RecipeComments = ({ comments, itemId, type }: Props) => {
  return (
    <div className="mt-4" id="comments">
      <p className="text-[#656262]">КОММЕНТАРИИ ({comments.length})</p>
      <RecipeAddComment type={type} itemId={itemId} />
      <div className="flex flex-col gap-4 mt-4">
        {comments.map((comment) => (
          <RecipeComment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default RecipeComments;
