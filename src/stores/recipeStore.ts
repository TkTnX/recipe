import { TYPE_OF_MEAL } from "@/types";
import { create } from "zustand";
import axios from "axios";
const initialState = {
  title: null,
  description: null,
  imageUrl: {} as File,

  cookingTime: null,
  difficulty: null,
  typeOfMeal: null,
  kitchen: null,
};

interface RecipeState {
  data: {
    title: string | null;
    description: string | null;
    imageUrl: File;

    cookingTime: number | null;
    difficulty: "1" | "2" | "3" | "4" | "5" | null;
    typeOfMeal: TYPE_OF_MEAL | null;
    kitchen: string | null;
  };
  setData: (key: string, data: any) => void;
  createRecipe: () => Promise<void>;
}

export const recipeStore = create<RecipeState>((set, get) => ({
  data: initialState,

  setData: (key, data) =>
    set((state) => ({ data: { ...state.data, [key]: data } })),

  createRecipe: async () => {
    try {
      const { imageUrl, ...otherData } = get().data;
      const formData = new FormData();

      if (imageUrl instanceof File) {
        formData.append("imageUrl", imageUrl);
      }

      Object.entries(otherData).forEach(([key, value]) => {
        if (value !== null) {
          formData.append(key, String(value));
        }
      });

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/recipe`,
        formData
      );
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
}));
