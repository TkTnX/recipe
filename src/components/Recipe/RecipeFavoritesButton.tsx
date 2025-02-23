"use client";
import { addToFavorites } from "@/actions/recipe-actions";
import { cn } from "@/lib/utils";
import { userStore } from "@/stores/userStore";
import { Heart, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

type Props = {
  favorites: number;
  recipeId: string;
};

const initialState = {
  success: false,
  error: "",
};

const RecipeFavoritesButton = ({ favorites, recipeId }: Props) => {
  const { user } = userStore();
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [state, formAction, pending] = useActionState(
    addToFavorites,
    initialState
  );

  useEffect(() => {
    setIsLiked(
      user?.favorites.some((favorite) => favorite.recipeId === recipeId) ||
        false
    );
  }, [user]);

  const handleClick = async (formData: FormData) => {
    if (!user) return router.push("/login");

    try {
      setIsLiked(!isLiked);
      formAction(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action={handleClick}>
      <input type="hidden" value={recipeId} name="id" />
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
