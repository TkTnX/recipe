"use server";
import { getUser } from "@/lib/supabase/get-user";
import { prisma } from "@/prisma/prisma";
import { Type } from "@prisma/client";
import { revalidatePath } from "next/cache";

const modelMap = {
  RECIPE: prisma.recipe,
  INGREDIENT: prisma.ingredient,
  ARTICLE: prisma.article,
} as const;

const keyMap = {
  RECIPE: "recipeId",
  INGREDIENT: "ingredientId",
  ARTICLE: "articleId",
} as const;

export const addToFavorites = async (prevState: any, formData: FormData) => {
  try {
    // * TODO: При всём функционале лайка облегчить код
    const id = formData.get("id") as string;
    if (!id) return { success: false, error: "Id not found" };

    const type = formData.get("type") as Type;
    const user = await getUser();
    if (!user.user) return { success: false, error: "User not found" };

    const model = modelMap[type] as any;
    const key = keyMap[type];

    if (!model || !key) return { success: false, error: "Model not found" };

    const item = await model.findUnique({ where: { id } });
    if (!item) return { success: false, error: "Item not found" };

    const where = { [key]: id, userId: user.user.id };
    const isLiked = await prisma.favoriteItem.findFirst({ where });

    isLiked
      ? await prisma.favoriteItem.delete({ where: { id: isLiked.id } })
      : await prisma.favoriteItem.create({ data: { ...where, type } });

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
    const type = formData.get("type") as Type;
    if (!type) return { success: false, error: "Type not found" };

    const comment = formData.get("comment") as string;
    if (!comment || comment === "")
      return { success: false, error: "Comment not found" };

    const user = await getUser();
    if (!user.user) return { success: false, error: "User not found" };

    const model = modelMap[type] as any;
    const key = keyMap[type];

    if (!model || !key) return { success: false, error: "Model not found" };
    const item = await model.findUnique({ where: { id } });
    if (!item) return { success: false, error: "Item not found" };

    await prisma.comment.create({
      data: { comment, authorId: user.user.id, [key]: id, type },
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
    const comment = await prisma.comment.findUnique({ where: { id } });
    if (!comment) return { success: false, error: "Comment not found", id };

    await prisma.comment.delete({ where: { id } });

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
