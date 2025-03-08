import FavoritesEmpty from "@/components/Favorites/FavoritesEmpty";
import ListItem from "@/components/Recipes/ListItem";
import { getUser } from "@/lib/supabase/get-user";
import { prisma } from "@/prisma/prisma";
import { RecipeType } from "@/types";
import { Article, Ingredient } from "@/prisma/generated/client";

const FavoritesPage = async () => {
  const { user } = await getUser();

  const favorites = await prisma.favoriteItem.findMany({
    where: { userId: user?.id },
    include: { recipe: true, ingredient: true, article: true },
  });

  if (!favorites || favorites.length === 0) return <FavoritesEmpty />;
  return (
    <div className=" flex flex-col gap-8  max-w-[600px]  w-full  mx-auto lg:mx-0 h-fit">
      {favorites.map((favorite: any) => (
        <ListItem
          key={favorite.id}
          type={favorite.type}
          item={
            favorite.type === "RECIPE"
              ? (favorite.recipe as RecipeType)
              : favorite.type === "INGREDIENT"
              ? (favorite.ingredient as Ingredient)
              : (favorite.article as Article)
          }
        />
      ))}
    </div>
  );
};

export default FavoritesPage;
