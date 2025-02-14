"use server";
import { createAdminClient } from "@/lib/supabase/server";
import { prisma } from "@/prisma/prisma";
import { UserType } from "@/types";
import { revalidatePath } from "next/cache";

export const updateUser = async (user: UserType, formData: FormData) => {
  try {
    const supabase = createAdminClient();

    let avatarUrl: File | string =
      (formData.get("avatarUrl") as File) || user.avatarUrl || "";
    if (avatarUrl.name !== "undefined") {
      console.log("avatarUrl", avatarUrl);
      const { data: uploadedFile, error: uploadedError } =
        await supabase.storage
          .from("images")
          .upload(`${new Date().getTime()}`, avatarUrl);

      if (uploadedError) throw new Error(uploadedError.message);

      const { data } = supabase.storage
        .from("images")
        .getPublicUrl(uploadedFile.path);

      avatarUrl = data.publicUrl;
    } else {
      avatarUrl = user.avatarUrl || "";
    }

    const data = {
      avatarUrl: (avatarUrl as string) || user.avatarUrl || "",
      username: (formData.get("username") as string) || user.username,
      email: (formData.get("email") as string) || user.email,
      bio: (formData.get("bio") as string) || user.bio || "",
    };

    console.log(data);

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data,
    });

    if (!updatedUser) throw new Error("Не удалось обновить пользователя");

    const { error } = await (
      await supabase
    ).auth.admin.updateUserById(user.supabaseAuthId, {
      email: data.email,
    });

    if (error) throw new Error(error.message);

    revalidatePath("/profile");
  } catch (error) {
    console.log(error);
  }
};
