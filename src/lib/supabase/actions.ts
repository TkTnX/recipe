"use server";

import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/prisma/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    return error.message;
    // redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    name: formData.get("name") as string,
  };

  const { error, data: supabaseUser } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        name: data.name,
        avatarUrl: "",
        bio: "",
      },
    },
  });

  if (error) {
    console.log(error);
    return error.message;
  }

  if (!supabaseUser || !supabaseUser.user) {
    return "Ошибка при регистрации пользователя в БД";
  }

  console.log(supabaseUser);

  const hashPassword = await bcrypt.hash(data.password, 10);

  const newUser = await prisma.user.create({
    data: {
      username: data.name,
      email: data.email,
      password: hashPassword,
      supabaseAuthId: supabaseUser.user.id,
    },
  });

  if (!newUser) {
    throw new Error("Ошибка при добавлении пользователя в БД");
  }
  revalidatePath("/", "layout");
  redirect("/login");
}
