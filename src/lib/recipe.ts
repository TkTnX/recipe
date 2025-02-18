import { prisma } from "@/prisma/prisma";

// Получение рецепта по ID
export const getRecipeById = async (id: string) => {
  return await prisma.recipe.findUnique({
    where: { id },
    include: {
      author: {
        select: {
          username: true,
          bio: true,
          avatarUrl: true,
        },
      },
      ingredients: true,
      steps: true,
      comments: {
        include: {
          author: { select: { username: true, avatarUrl: true } },
        },
      },
      _count: {
        select: {
          favorites: true,
          comments: true,
        },
      },
    },
  });
};


