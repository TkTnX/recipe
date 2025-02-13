import { prisma } from "@/prisma/prisma";
import { createClient } from "./server";

export const getUser = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (!data.user) return { user: null, error };

  const user = await prisma.user.findUnique({
    where: {
      supabaseAuthId: data.user.id,
    },
    omit: {
      password: true,
    },
  });

  if (!user) return { user: null, error };

  return { user, error };
};
