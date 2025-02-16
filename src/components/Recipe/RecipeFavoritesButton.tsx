import { Heart } from "lucide-react";

type Props = {
  favorites: number;
  recipeId: string;
};
const RecipeFavoritesButton = ({ favorites, recipeId }: Props) => {
  return (
    <button className="flex items-center gap-2 text-[#656262] drop-shadow-2xl border rounded-lg px-3 py-2 justify-center">
      В избранное <div className="w-[1px] h-3 bg-[#aaa]" />
      <span className="flex items-center gap-2">
        <Heart fill="#ff5252" color="#ff5252" size={16} /> {favorites}
      </span>
    </button>
  );
};

export default RecipeFavoritesButton;
