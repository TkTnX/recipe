import { CreateStep, RecipeType, TYPE_OF_MEAL } from "@/types";
import { create } from "zustand";
import axios from "axios";

const initialSteps = [
  { id: 1, description: "", imageUrl: null },
  { id: 2, description: "", imageUrl: null },
  { id: 3, description: "", imageUrl: null },
];

const initialState = {
  data: {
    title: null,
    description: null,
    imageUrl: {} as File,

    cookingTime: null,
    difficulty: null,
    typeOfMeal: null,
    kitchen: null,
    ingredients: [],
  },
  steps: initialSteps,
};

interface RecipeState {
  loading: boolean;
  error: boolean;
  data: {
    title: string | null;
    description: string | null;
    imageUrl: File;

    cookingTime: number | null;
    difficulty: "1" | "2" | "3" | "4" | "5" | null;
    typeOfMeal: TYPE_OF_MEAL | null;
    kitchen: string | null;
    ingredients: {
      ingredientId: string;
      name: string;
      quantity: number;
      quantityWithUnit: string;
    }[];
  };
  steps: CreateStep[];

  setData: (key: string, data: any) => void;
  createRecipe: () => Promise<any>;
  addStep: (step: CreateStep) => void;
  deleteStep: (id: number) => void;
  editStep: (id: number, data: CreateStep) => void;
}

export const recipeStore = create<RecipeState>((set, get) => ({
  loading: false,
  error: false,
  data: initialState.data,
  steps: initialState.steps,

  setData: (key, data) =>
    set((state) => ({ data: { ...state.data, [key]: data } })),

  createRecipe: async () => {
    try {
      set({ loading: true, error: false });
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

      const steps = get().steps;
      formData.append("steps", JSON.stringify(steps));

      steps.forEach((step, index) => {
        if (step.imageUrl instanceof File) {
          formData.append(`steps[${index}][imageUrl]`, step.imageUrl);
        }
      });

      const ingredients = get().data.ingredients;

      if(ingredients.length === 0) throw new Error("Добавьте от 1 ингредиента");

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/recipe`,
        formData
      );

      if (!res.data) throw new Error("Recipe not created");

      // СОЗДАНИЕ ИНГРЕДИЕНТОВ В БД
      ingredients.forEach(async (ingredient) => {
        await axios.post(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/ingredients`,
          { ...ingredient, recipeId: res.data.id }
        );
      });

      set({ loading: false });
      return res.data;
    } catch (error) {
      console.log(error);
      set({ error: true });
      return error;
    } finally {
      set({ loading: false });
    }
  },

  addStep: (step) => {
    set((state) => ({
      steps: [...state.steps, step],
    }));
  },

  deleteStep: (id) => {
    set((state) => ({
      steps: state.steps.filter((step) => step.id !== id),
    }));
  },

  editStep: (id, data) => {
    set((state) => ({
      steps: state.steps.map((step) => {
        if (step.id === id) {
          return data;
        } else {
          return step;
        }
      }),
    }));
  },
}));
