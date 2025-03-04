import { Type } from "@prisma/client";
import RecipeComments from "./RecipeComments";
import RecipeFavorites from "./RecipeFavorites";
import { CommentType } from "@/types";

type Props = {
  type: Type;
  favorites: number;
  itemId: string;
  itemComments: CommentType[];
};

const ItemFooter = ({ type, favorites, itemId, itemComments }: Props) => {
  return (
    <div className="mt-10 border border-primary p-4 rounded-lg">
      <h4 className="text-2xl font-semibold tracking-wider">
        {type === "RECIPE" ? "ПОНРАВИЛСЯ РЕЦЕПТ?" : "ПОНРАВИЛАСЬ СТАТЬЯ?"}
      </h4>
      <RecipeFavorites type={type} favorites={favorites} itemId={itemId} />
      <RecipeComments type={type} itemId={itemId} comments={itemComments} />
    </div>
  );
};

export default ItemFooter;
