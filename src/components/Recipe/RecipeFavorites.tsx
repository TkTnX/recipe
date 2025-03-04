import { Type } from "@prisma/client";
import RecipeFavoritesButton from "./RecipeFavoritesButton";

type Props = {
  favorites: number;
  itemId: string;
  type: Type
};

const RecipeFavorites = ({ favorites, itemId, type }: Props) => {
  return (
    <div className="mt-4">
      <p className="text-[#656262]">СОХРАНИТЬ:</p>
      <RecipeFavoritesButton
        type={type}
        favorites={favorites}
        itemId={itemId}
      />
    </div>
  );
};

export default RecipeFavorites;
