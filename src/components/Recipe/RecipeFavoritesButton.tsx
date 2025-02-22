"use client";
import { addToFavorites } from "@/actions/recipe-actions";
import { cn } from "@/lib/utils";
import { userStore } from "@/stores/userStore";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  favorites: number;
  recipeId: string;
};
const RecipeFavoritesButton = ({ favorites, recipeId }: Props) => {
  // TODO: Сделать нормальную работу с лайками
  const { user } = userStore();
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);

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
      await addToFavorites(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action={handleClick}>
      <input type="hidden" value={recipeId} name="id" />
      <button
        type="submit"
        className={cn(
          "flex items-center gap-2 text-[#656262] drop-shadow-2xl border rounded-lg px-3 py-2 justify-center",
          { "bg-red-500 text-white": isLiked }
        )}
      >
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
      </button>
    </form>
  );
};

export default RecipeFavoritesButton;
