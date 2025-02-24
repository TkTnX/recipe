import RecipeFavoritesButton from "./RecipeFavoritesButton";

type Props = {
  favorites: number;
  recipeId: string;
};

const RecipeFavorites = ({ favorites, recipeId }: Props) => {
  return (
    <div className="mt-4">
      <p className="text-[#656262]">СОХРАНИТЬ:</p>
      <RecipeFavoritesButton
        type="recipe"
        favorites={favorites}
        itemId={recipeId}
      />
    </div>
  );
};

export default RecipeFavorites;
