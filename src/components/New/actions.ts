"use server";

import { newImage } from "@/lib/newImage";
import { prisma } from "@/prisma/prisma";

export const createIngredient = async (formData: FormData) => {
  try {
    const body = Object.fromEntries(formData);

    if (!body) throw new Error("Invalid body");

    const imageUrl = await newImage("ingredients", body.imageUrl as File);

    if (!imageUrl) throw new Error("Image is not uploaded");

    const ingredient = await prisma.ingredient.create({
      data: {
        name: body.name as string,
        imageUrl,
        description: body.description as string,
        calories: Number(body.calories),
        proteins: Number(body.proteins),
        fats: Number(body.fats),
        carbs: Number(body.carbs),
      },
    });

    if (!ingredient) throw new Error("Ingredient was not created");
  } catch (error) {
    console.log(error);
  }
};
