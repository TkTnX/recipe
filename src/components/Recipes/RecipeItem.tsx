import { RecipeType } from "@/types";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RecipeDeleteButton from "./RecipeDeleteButton";

type Props = {
  recipe: RecipeType;
  authorId?: string;
};

const RecipeItem = ({ recipe, authorId }: Props) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden block w-full relative">
      <Link
        href={`/recipes/${recipe.id}`}
        className="absolute inset-0 w-full h-full block z-10"
      />

      <div className="w-full h-[300px] relative">
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          fill
          className="object-cover"
        />
        <p className="absolute left-0 bottom-0 bg-primary p-1 text-xs rounded-t-sm">
          рецепт
        </p>
        <p className="text-white bg-[#3a3537c9] absolute right-2 bottom-2 p-1 flex items-center gap-1 text-xs rounded-md">
          <Clock color="white" size={14} strokeWidth={1} />
          {recipe.cookingTime} минут
        </p>
      </div>
      <div className="p-4">
        <h4 className="text-xl font-semibold ">{recipe.title}</h4>
        {authorId === recipe.authorId && (
          <RecipeDeleteButton recipeId={recipe.id} />
        )}
      </div>
    </div>
  );
};

export default RecipeItem;
