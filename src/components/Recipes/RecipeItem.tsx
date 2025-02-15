import { RecipeType } from "@/types";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RecipeItem = ({ recipe }: { recipe: RecipeType }) => {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="rounded-lg shadow-md overflow-hidden block w-full"
    >
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
      <h4 className="text-xl font-semibold p-4">{recipe.title}</h4>
    </Link>
  );
};

export default RecipeItem;
