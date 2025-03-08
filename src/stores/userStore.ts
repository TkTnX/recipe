import { createClient } from "@/lib/supabase/client";
import { User } from "@/prisma/generated/client";
import axios from "axios";
import { create } from "zustand";

interface IUserStore {
  user:
    | (User & {
        favorites: {
          recipeId: string;
          ingredientId: string;
          articleId: string;
        }[];
      })
    | null;

  fetchUser: () => Promise<void>;
}

export const userStore = create<IUserStore>((set, get) => ({
  user: null,

  fetchUser: async () => {
    try {
      const supabase = createClient();

      const { data: supabaseUser } = await supabase.auth.getUser();
      console.log(`supabaseUser`, supabaseUser.user);
      if (!supabaseUser.user) set({ user: null });

      const user = await axios.get(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/user`
      );

      console.log(user.data);

      if (user.data.error) {
        return set({ user: undefined });
      }

      set({ user: user.data });
    } catch (error) {
      console.log(error);
    }
  },
}));
