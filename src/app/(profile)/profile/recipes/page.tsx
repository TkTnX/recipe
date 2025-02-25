import ProfileRecipesEmpty from "@/components/Profile/ProfileRecipesEmpty";
import ListItem from "@/components/Recipes/ListItem";
import { getUser } from "@/lib/supabase/get-user";
import { prisma } from "@/prisma/prisma";
import { RecipeType } from "@/types";

const UserRecipesPage = async () => {
  const { user } = await getUser();

  const recipes = await prisma.recipe.findMany({
    where: { authorId: user?.id },
  });

  if (!recipes) return <ProfileRecipesEmpty />;

  return (
    <div className="flex flex-col gap-8">
      {recipes.map((recipe) => (
        <ListItem
          key={recipe.id}
          item={recipe as RecipeType}
          authorId={user?.id}
        />
      ))}
    </div>
  );
};

export default UserRecipesPage;
