"use server";

import { newImage } from "@/lib/newImage";
import { prisma } from "@/prisma/prisma";

const parseNumber = (num: string) => Number(num.replace(",", "."));

export const createIngredient = async (prevState: any, formData: FormData) => {
  try {
    const body = Object.fromEntries(formData);
    console.log(body);
    if (!body)
      return { error: "Пожалуйста, заполните все поля", success: false };

    if ((body.imageUrl as File).size === 0)
      return { error: "Пожалуйста, добавьте изображение", success: false };

    const imageUrl = await newImage("ingredients", body.imageUrl as File);
    if (!imageUrl)
      return { error: "Изображение не загрузилось", success: false };
    const ingredient = await prisma.ingredient.create({
      data: {
        name: body.name as string,
        imageUrl,
        description: body.description as string,
        calories: parseNumber(body.calories as string),
        proteins: parseNumber(body.proteins as string),
        fats: parseNumber(body.fats as string),
        carbs: parseNumber(body.carbs as string),
        weight: parseNumber(body.weight as string) || 100,
        type: "INGREDIENT",
      },
    });

    if (!ingredient)
      return { error: "Не удалось создать ингредиент", success: false };

    return { success: true, error: "" };
  } catch (error) {
    console.error(
      "Error occurred:",
      error instanceof Error ? error.message : error
    );
    return { error: "Не удалось создать ингредиент", success: false };
  }
};
