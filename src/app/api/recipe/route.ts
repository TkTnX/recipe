import { getUser } from "@/lib/supabase/get-user";
import { createAdminClient } from "@/lib/supabase/server";
import { prisma } from "@/prisma/prisma";
import { TypeOfMeal } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const supabase = createAdminClient();
    const author = await getUser();
    if (!author || !author.user) {
      return NextResponse.json({ error: "You must be authentificated" });
    }

    const formData = await req.formData();
    const body = Object.fromEntries(formData.entries());

    if (!formData) return NextResponse.json({ error: "Body is empty" });

    if (Object.values(formData).some((value) => value === null)) {
      return NextResponse.json({ error: "Body contains null values" });
    }

    console.log(`body >>>`, body);
    //   ЗАГРУЗКА ПРЕВЬЮ ДЛЯ РЕЦЕПТА
    const { data: uploadedFile, error: uploadedError } = await supabase.storage
      .from("recipe-covers")
      .upload(`${new Date().getTime()}`, body.imageUrl);

    if (uploadedError) throw new Error(uploadedError.message);

    const publicUrl = supabase.storage
      .from("recipe-covers")
      .getPublicUrl(uploadedFile.path);

    if (!publicUrl)
      return NextResponse.json({ error: "Public url is not found" });

    body.imageUrl = publicUrl.data.publicUrl;

    const recipe = await prisma.recipe.create({
      data: {
        title: body.title as string,
        description: body.description as string,
        imageUrl: body.imageUrl as string,

        calories: 0,
        proteins: 0,
        fats: 0,
        carbs: 0,
        cookingTime: Number(body.cookingTime),
        difficulty: Number(body.difficulty),
        typeOfMeal: body.typeOfMeal as TypeOfMeal,
        kitchen: body.kitchen as string,

        authorId: author.user.id,
      },
    });

    console.log(recipe);
    if (!recipe) return NextResponse.json({ error: "Recipe wasn't created!" });
    return NextResponse.json(recipe);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
};
