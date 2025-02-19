import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const value = req.nextUrl.searchParams.get("value")?.toLowerCase();
    const ingredients = await prisma.ingredient.findMany({
      where: value ? { name: { contains: value } } : {},
    });

    if (!ingredients)
      return NextResponse.json({ error: "Ingredients not found" });

    return NextResponse.json(ingredients);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Ingredients not found" });
  }
};
