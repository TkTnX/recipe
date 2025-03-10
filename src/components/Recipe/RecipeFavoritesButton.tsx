"use client";
import { addToFavorites } from "@/actions/recipe-actions";
import { formActionInitialState } from "@/constants";
import { cn } from "@/lib/utils";
import { userStore } from "@/stores/userStore";
import { Type } from "@/prisma/generated/client";
import { Heart, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

type Props = {
  favorites: number;
  itemId: string;
  type: Type;
  className?: string;
};



const RecipeFavoritesButton = ({
  favorites,
  itemId,
  className,
  type,
}: Props) => {
  const { user } = userStore();
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [state, formAction, pending] = useActionState(
    addToFavorites,
    formActionInitialState
  );

  useEffect(() => {
    setIsLiked(
      user?.favorites.some((favorite) => {
        if (type === "RECIPE") {
          return favorite.recipeId === itemId;
        } else if (type === "INGREDIENT") {
          return favorite.ingredientId === itemId;
        } else {
          return favorite.articleId === itemId
        }
      }) || false
    );
  }, [user]);

  const handleClick = async (formData: FormData) => {
    if (!user) return router.push("/login");
    try {
      formData.append("type", type);
      setIsLiked(!isLiked);
      formAction(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action={handleClick} className={className}>
      <input type="hidden" value={itemId} name="id" />
      <button
        disabled={pending}
        type="submit"
        className={cn(
          "flex items-center gap-2 text-[#656262] drop-shadow-2xl border rounded-lg px-3 py-2 justify-center disabled:opacity-50 disabled:pointer-events-none min-w-[170px]",
          { "bg-red-500 text-white": isLiked }
        )}
      >
        {pending ? (
          <Loader2 className="animate-spin" />
        ) : (
          <>
            В {isLiked ? "избранном" : "избранное"}
            <div className="w-[1px] h-3 bg-[#aaa]" />
            <span className="flex items-center gap-2">
              <Heart
                fill={isLiked ? "#fff" : "#ff5252"}
                color={isLiked ? "#fff" : "#ff5252"}
                size={16}
              />{" "}
              {favorites}
            </span>
          </>
        )}
      </button>
    </form>
  );
};

export default RecipeFavoritesButton;
