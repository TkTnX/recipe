import { newImage } from "@/lib/newImage";
import { createSteps } from "@/lib/steps";
import { getUser } from "@/lib/supabase/get-user";
import { prisma } from "@/prisma/prisma";
import { getFormData } from "@/utils/getFormData";
import {
  getCaloriesFilter,
  getOrderBy,
  getTimeFilter,
  getTypeOfMealFilter,
} from "@/utils/recipes";
import { Prisma, TypeOfMeal } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const params = req.nextUrl.searchParams;
    const sort = params.get("sort") || "default";
    const time = params.get("time") || null;
    const typeOfMeal = params.get("typeOfMeal") || null;
    const search = params.get("search") || null;
    const calories = params.get("calories") || null;
    const page = Number(params.get("page")) || 1;
    const orderBy = getOrderBy(sort);
    const ingIds = params.getAll("ingIds") || [];

    const where: Prisma.RecipeWhereInput = {
      calories: getCaloriesFilter(calories),
      cookingTime: getTimeFilter(time),
      typeOfMeal: getTypeOfMealFilter(typeOfMeal),
      title: search ? { contains: search, mode: "insensitive" } : {},
      ingredients:
        ingIds.length > 0
          ? { some: { ingredient: { id: { in: ingIds[0].split(",") } } } }
          : {},
    };

    const recipes = await prisma.recipe.findMany({
      where,
      orderBy,
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
      },
      take: 5,
      skip: (page - 1) * 5,
    });

    return NextResponse.json(recipes);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" });
  }
};

export const POST = async (req: NextRequest) => {
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
      calories,
      carbs,
      proteins,
      fats,
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

        calories: Number(calories),
        proteins: Number(proteins),
        fats: Number(fats),
        carbs: Number(carbs),
        cookingTime: Number(cookingTime),
        difficulty: Number(difficulty),
        typeOfMeal: typeOfMeal as TypeOfMeal,
        kitchen: kitchen as string,

        authorId: author.user.id,
        type: "RECIPE",
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
