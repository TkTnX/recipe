import { prisma } from "@/prisma/prisma";

export const getArticleById = async (id: string) => {
  return await prisma.article.findUnique({
    where: { id },
    include: {
      author: {
        select: {
          username: true,
          bio: true,
          avatarUrl: true,
        },
      },

      comments: {
        include: {
          author: { select: { username: true, avatarUrl: true } },
        },
        orderBy: {
          createdAt: "desc",
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
