import { create } from "zustand";
import axios from "axios";
import { Ingredient } from "@prisma/client";

export type addIngredient = {
  id: string;
  name: string;
  quantity: number | null;
  unit: string | null;
};

interface IngredientsStore {
  loading: boolean;
  error: boolean;
  ingredients: Ingredient[];
  currentIngredient: addIngredient | null;

  fetchIngredients: (value: string) => Promise<void>;
  setCurrentIngredient: (ingredient: addIngredient) => void;
}

export const ingredientsStore = create<IngredientsStore>((set, get) => ({
  loading: false,
  error: false,
  ingredients: [],
  currentIngredient: null,

  fetchIngredients: async (value: string) => {
    try {
      set({ loading: true });

      const ingredients = await axios.get(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/ingredients?value=${value}`
      );

      if (!ingredients) throw new Error("Ingredients not found");

      set({ ingredients: ingredients.data });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  setCurrentIngredient: (ingredient) => {
    set({ currentIngredient: ingredient });
  },
}));
