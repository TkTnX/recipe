import { createClient } from "@/lib/supabase/client";
import { User } from "@prisma/client";
import axios from "axios";
import { create } from "zustand";

interface IUserStore {
  user: (User & { favorites: { recipeId: string, ingredientId: string, articleId: string }[] }) | null;

  fetchUser: () => Promise<void>;
}

export const userStore = create<IUserStore>((set, get) => ({
  user: null,

  fetchUser: async () => {
    try {
      const supabase = createClient();

      const { data: supabaseUser } = await supabase.auth.getUser();

      if (!supabaseUser.user) set({ user: null });

      const user = await axios.get(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/user`
      );

      if (user.data.error) {
        set({ user: null });
      }

      set({ user: user.data });
    } catch (error) {
      console.log(error);
    }
  },
}));
