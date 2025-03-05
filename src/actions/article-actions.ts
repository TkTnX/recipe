"use server";

import { newImage } from "@/lib/newImage";
import { getUser } from "@/lib/supabase/get-user";
import { prisma } from "@/prisma/prisma";

export const createArticle = async (prevState: any, formData: FormData) => {
  try {
    const { user } = await getUser();
    if (!user) return { success: false, error: "Вы должны быть авторизованы" };

    const body = Object.fromEntries(formData);
    if (!body)
      return { success: false, error: "Пожалуйста, заполните все поля" };

    const imagePublicUrl = await newImage(
      "article-covers",
      body.imageUrl as File
    );
    if (!imagePublicUrl)
      return {
        success: false,
        error: "Не удалось загрузить изображение",
        id: null,
      };

    const article = await prisma.article.create({
      data: {
        title: body.title as string,
        text: body.text as string,
        imageUrl: imagePublicUrl,
        type: "ARTICLE",
        authorId: user.id,
      },
    });
    return { success: true, error: "", id: article.id };
  } catch (error) {
    console.log((error as Error).message);
    return {
      success: false,
      error: (error as Error).message,
      id: null,
    };
  }
};
