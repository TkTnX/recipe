import { Heart } from "lucide-react";

const RecipeFavorites = ({favorites}: {favorites: number}) => {
  return (
    <div className="mt-4">
      <p className="text-[#656262]">СОХРАНИТЬ:</p>
      <button className="flex items-center gap-2 text-[#656262] drop-shadow-2xl border rounded-lg px-3 py-2">
        В избранное <div className="w-[1px] h-3 bg-[#aaa]" />
        <span className="flex items-center gap-2">
          <Heart fill="#ff5252" color="#ff5252" /> {favorites}
        </span>
      </button>
    </div>
  );
}

export default RecipeFavorites