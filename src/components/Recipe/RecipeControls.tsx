import { MessageSquareTextIcon } from "lucide-react";
import RecipeFavoritesButton from "./RecipeFavoritesButton";

type Props = {
  favorites: number;
  recipeId: string;
};

const RecipeControls = ({ favorites, recipeId }: Props) => {
  return (
    <div className="flex flex-col vsm:flex-row vsm:items-center gap-2 mt-5">
      <RecipeFavoritesButton type="recipe" favorites={favorites} itemId={recipeId} />
      <a
        href="#comments"
        className="flex items-center gap-2 text-[#656262] drop-shadow-2xl border rounded-lg px-3 py-2 justify-center"
      >
        Комментарии <MessageSquareTextIcon size={16} color="#3fc554" />
      </a>
    </div>
  );
};

export default RecipeControls;
