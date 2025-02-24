"use server";
import { getUser } from "@/lib/supabase/get-user";
import { prisma } from "@/prisma/prisma";
import { revalidatePath } from "next/cache";

export const addToFavorites = async (prevState: any, formData: FormData) => {
  try {
    const id = formData.get("id") as string;
    if (!id) return { success: false, error: "Id not found" };

    const type = formData.get("type");
    const user = await getUser();
    if (!user.user) return { success: false, error: "User not found" };
    const item = await (type === "recipe"
      ? prisma.recipe.findUnique({ where: { id } })
      : prisma.ingredient.findUnique({ where: { id } }));
    if (!item) return { success: false, error: "Recipe not found" };

    const where =
      type === "recipe"
        ? { recipeId: id, userId: user.user.id }
        : { ingredientId: id, userId: user.user.id };
    const isLiked = await prisma.favoriteItem.findFirst({ where });
    console.log(isLiked);

    if (isLiked) {
      await prisma.favoriteItem.delete({
        where: {
          id: isLiked.id,
        },
      });
    } else {
      await prisma.favoriteItem.create({
        data: {
          [type === "recipe" ? "recipeId" : "ingredientId"]: id,
          userId: user.user.id,
          type: type === "recipe" ? "RECIPE" : "INGREDIENT",
        },
      });
    }

    revalidatePath(`/recipes/${id}`);
    return { success: true, error: "" };
  } catch (error) {
    console.log(error);
    return { success: false, error: (error as Error).message };
  }
};

export const addComment = async (
  prevState: { success: boolean; error: string },
  formData: FormData
) => {
  try {
    const id = formData.get("id") as string;
    if (!id) return { success: false, error: "Id not found" };

    const comment = formData.get("comment") as string;
    if (!comment || comment === "")
      return { success: false, error: "Comment not found" };

    const user = await getUser();
    if (!user.user) return { success: false, error: "User not found" };

    const recipe = await prisma.recipe.findUnique({ where: { id } });
    if (!recipe) return { success: false, error: "Recipe not found" };

    const newComment = await prisma.recipeComment.create({
      data: {
        comment,
        authorId: user.user.id,
        recipeId: id,
      },
    });

    revalidatePath(`/recipes/${id}`);
    return { success: true, error: "" };
  } catch (error) {
    console.log(error);
    return { success: false, error: (error as Error).message };
  }
};

export const deleteComment = async (
  prevState: { success: boolean; error: string },
  formData: FormData
) => {
  try {
    const id = formData.get("id") as string;
    const comment = await prisma.recipeComment.findUnique({ where: { id } });
    if (!comment) return { success: false, error: "Comment not found", id };

    await prisma.recipeComment.delete({ where: { id } });

    revalidatePath(`/recipes/${comment.recipeId}`);
    return { success: true, error: "", id };
  } catch (error) {
    console.log(error);
    return { success: false, error: (error as Error).message };
  }
};

export const deleteRecipe = async (formData: FormData) => {
  try {
    const { user } = await getUser();
    if (!user) throw new Error("User not found");

    const id = formData.get("id") as string;

    const recipe = await prisma.recipe.delete({
      where: { id, authorId: user.id },
    });

    if (!recipe) throw new Error("Recipe not found");

    revalidatePath("/profile/recipes");
  } catch (error) {
    console.log(error);
  }
};
