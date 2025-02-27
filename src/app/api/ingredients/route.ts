import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const value = req.nextUrl.searchParams.get("value")?.toLowerCase();
    const page = req.nextUrl.searchParams.get("page") || null;
    const ids = req.nextUrl.searchParams.get("ids")?.split(",") || null;
    const ingredients = await prisma.ingredient.findMany({
      where: value
        ? { name: { contains: value, mode: "insensitive" } }
        : ids
        ? { id: { in: ids } }
        : {},
      orderBy: { name: "asc" },
      take: 15,
      skip: page ? (Number(page) - 1) * 15 : 0,
    });

    if (!ingredients)
      return NextResponse.json({ error: "Ingredients not found" });

    return NextResponse.json(ingredients);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Ingredients not found" });
  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const unit = body.quantityWithUnit.split(" ")[1];

    const ingredient = await prisma.recipeIngredient.create({
      data: {
        recipeId: body.recipeId,
        ingredientId: body.ingredientId,
        quantity: body.quantity,
        quantityWithUnit: `${body.quantity} ${unit}`,
      },
    });

    if (!ingredient)
      return NextResponse.json({ error: "Unable to create ingredient" });

    return NextResponse.json(ingredient);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Unable to create ingredient" });
  }
};
