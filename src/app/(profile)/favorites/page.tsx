import FavoritesEmpty from "@/components/Favorites/FavoritesEmpty";
import RecipeItem from "@/components/Recipes/RecipeItem";
import { getUser } from "@/lib/supabase/get-user";
import { prisma } from "@/prisma/prisma";
import { RecipeType } from "@/types";

const FavoritesPage = async () => {
  const { user } = await getUser();

  const favorites = await prisma.favoriteRecipe.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      recipe: true,
    },
  });

  if (!favorites || favorites.length === 0) return <FavoritesEmpty />;

  return (
    <div className=" flex flex-col gap-8  max-w-[600px]  w-full  mx-auto lg:mx-0 h-fit">
      {favorites.map((favorite) => (
        <RecipeItem key={favorite.id} recipe={favorite.recipe as RecipeType} />
      ))}
    </div>
  );
};

export default FavoritesPage;
