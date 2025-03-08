import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const value = req.nextUrl.searchParams.get("value")?.toLowerCase();
    const page = req.nextUrl.searchParams.get("page") || null;
    const articles = await prisma.article.findMany({
      where: { title: { contains: value, mode: "insensitive" } },
      take: 5,
      skip: page ? (Number(page) - 1) * 5 : 0,
    });

    if (!articles) return NextResponse.json({ error: "Articles not found" });

    return NextResponse.json(articles);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Articles not found" });
  }
};
