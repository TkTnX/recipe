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


// Search Form

export const SearchSubmit = (e: React.FormEvent<HTMLFormElement>, replace: (url: string) => void) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    if (search) {
      replace(`/recipes?search=${search}`);
    } else {
      replace("/recipes");
    }
  };