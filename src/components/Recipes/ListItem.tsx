import { RecipeType } from "@/types";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RecipeDeleteButton from "./RecipeDeleteButton";
import { cn } from "@/lib/utils";
import { Ingredient, Type } from "@prisma/client";

type Props<T extends RecipeType | Ingredient> = {
  item: T;
  authorId?: string;
  type: Type;
};

const ListItem = <T extends RecipeType | Ingredient>({
  item,
  authorId,
  type,
}: Props<T>) => {
  const isRecipe = type === "RECIPE";
  if (!item) return null;
  return (
    <div className="rounded-lg shadow-md overflow-hidden block w-full relative">
      <Link
        href={`/${isRecipe ? "recipes" : "ingredients"}/${item.id}`}
        className="absolute inset-0 w-full h-full block z-10"
      />

      <div className="w-full h-[300px] relative">
        <Image
          src={item.imageUrl}
          alt={"title" in item ? item.title : item.name}
          fill
          className="object-cover"
        />
        <p
          className={cn(
            "absolute left-0 bottom-0 bg-primary p-1 text-xs rounded-se-lg",
            { "bg-green-500 text-white": !isRecipe }
          )}
        >
          {isRecipe ? "рецепт" : "продукт"}
        </p>
        {isRecipe && (
          <p className="text-white bg-[#3a3537c9] absolute right-2 bottom-2 p-1 flex items-center gap-1 text-xs rounded-md">
            <Clock color="white" size={14} strokeWidth={1} />
            {"cookingTime" in item && item.cookingTime} минут
          </p>
        )}
      </div>
      <div className="p-4">
        <h4 className="text-xl font-semibold ">
          {"title" in item ? item.title : item.name}
        </h4>
        {"authorId" in item && isRecipe && authorId === item.authorId && (
          <RecipeDeleteButton recipeId={item.id} />
        )}
      </div>
    </div>
  );
};

export default ListItem;
