import { CreateStep, TYPE_OF_MEAL } from "@/types";
import { create } from "zustand";
import axios from "axios";
import { RecipeStep } from "@prisma/client";

// TODO: Возможность добавлять шаги
// TODO: У каждого ингредиента должна быть своя калорийность, при создании сумировать эти данные и выводить для рецепта
// TODO: Возможность добавлять продукты

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
  },
  steps: initialSteps,
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
  steps: CreateStep[];

  setData: (key: string, data: any) => void;
  createRecipe: () => Promise<void>;
  addStep: (step: CreateStep) => void;
  deleteStep: (id: number) => void;
  editStep: (id: number, data: CreateStep) => void;
}

export const recipeStore = create<RecipeState>((set, get) => ({
  data: initialState.data,
  steps: initialState.steps,

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

      const steps = get().steps;
      formData.append("steps", JSON.stringify(steps));

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/recipe`,
        formData
      );
      return res.data;
    } catch (error) {
      console.log(error);
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
