import { newImage } from "@/lib/newImage";
import { createSteps } from "@/lib/steps";
import { getUser } from "@/lib/supabase/get-user";
import { prisma } from "@/prisma/prisma";
import { getFormData } from "@/utils/getFormData";
import { TypeOfMeal } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const author = await getUser();
    if (!author || !author.user) {
      return NextResponse.json({ error: "You must be authentificated" });
    }

    const formData = await req.formData();
    const {
      title,
      description,
      cookingTime,
      difficulty,
      typeOfMeal,
      kitchen,
      steps,
      imageUrl,
    } = getFormData(formData);

    //   ЗАГРУЗКА ПРЕВЬЮ ДЛЯ РЕЦЕПТА
    const imagePublicUrl = await newImage("recipe-covers", imageUrl as File);
    if (!imagePublicUrl)
      return NextResponse.json({ error: "Image is not uploaded" });

    const recipe = await prisma.recipe.create({
      data: {
        title: title as string,
        description: description as string,
        imageUrl: imagePublicUrl,

        calories: 0,
        proteins: 0,
        fats: 0,
        carbs: 0,
        cookingTime: Number(cookingTime),
        difficulty: Number(difficulty),
        typeOfMeal: typeOfMeal as TypeOfMeal,
        kitchen: kitchen as string,

        authorId: author.user.id,
      },
    });
    if (!recipe) return NextResponse.json({ error: "Recipe wasn't created!" });

    // Создание шагов
    const parsedSteps = JSON.parse(steps as string);

    await createSteps({ steps: parsedSteps, recipeId: recipe.id, formData });

    return NextResponse.json(recipe);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
};
