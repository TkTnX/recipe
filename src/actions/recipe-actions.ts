"use server";
import { getUser } from "@/lib/supabase/get-user";
import { prisma } from "@/prisma/prisma";
import { revalidatePath } from "next/cache";

export const addToFavorites = async (formData: FormData) => {
  try {
    const id = formData.get("id") as string;
    if (!id) throw new Error("Id not found");
    const user = await getUser();
    if (!user.user) throw new Error("User not found");

    const recipe = await prisma.recipe.findUnique({
      where: { id },
    });

    if (!recipe) throw new Error("Recipe not found");

    const isLiked = await prisma.favoriteRecipe.findFirst({
      where: {
        recipeId: id,
        userId: user.user.id,
      },
    });

    if (isLiked) {
      await prisma.favoriteRecipe.delete({
        where: {
          id: isLiked.id,
        },
      });
    } else {
      await prisma.favoriteRecipe.create({
        data: {
          recipeId: id,
          userId: user.user.id,
        },
      });
    }

    revalidatePath(`/recipes/${id}`);
  } catch (error) {
    console.log(error);
  }
};
