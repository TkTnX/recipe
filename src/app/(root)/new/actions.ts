"use server";

import { createAdminClient } from "@/lib/supabase/server";

export const createRecipe = async (formData: FormData) => {
  try {
    const supabase = createAdminClient();

    //   Upload recipe cover
    let imageUrl: File | string = (formData.get("imageUrl") as File) || "";
    const { data: upload, error: uploadedError } = await supabase.storage
      .from("recipe-covers")
      .upload(`${new Date().getTime()}`, imageUrl);

    if (uploadedError) throw new Error(uploadedError.message);

    const { data: uploadedFile } = supabase.storage
      .from("recipe-covers")
      .getPublicUrl(upload.path);
    imageUrl = uploadedFile.publicUrl;

    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      imageUrl: imageUrl,
      calories: formData.get("calories"),
      proteins: formData.get("proteins"),
      fats: formData.get("fats"),
      carbs: formData.get("carbs"),
      cookingTime: formData.get("cookingTime"),
      difficulty: formData.get("difficulty"),
      typeOfMeal: formData.get("typeOfMeal"),
      kitchen: formData.get("kitchen"),
      authorId: formData.get("authorId"),
      ingredients: JSON.parse(formData.get("ingredients") as string),
    };
  } catch (error) {
    console.log(error);
  }
};
