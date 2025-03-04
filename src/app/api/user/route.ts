import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const supabase = await createClient();

    const { data: supabaseUser } = await supabase.auth.getUser();

    const user = await prisma.user.findFirst({
      where: {
        supabaseAuthId: supabaseUser.user?.id,
      },
      include: {
        favorites: {
          select: {
            recipeId: true,
            ingredientId: true,
            articleId: true,
          },
        },
      },
      omit: {
        password: true,
      },
    });

    if (!user) return NextResponse.json({ error: "User not found 1" });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "User not found 2" });
  }
};
