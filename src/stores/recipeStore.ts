import { CreateStep, quantityObjType, RecipeType, TYPE_OF_MEAL } from "@/types";
import { create } from "zustand";
import axios from "axios";
import { Ingredient } from "@prisma/client";


// * TODO: При добавлении ингредиента value у "Единицы измерения" сбрасывать
// TODO: Проверить добавление веса при добавлении ингредиента

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
  recipes: RecipeType[];
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
      quantityObj: quantityObjType | null;
      weight: number | null;
    }[];
  };
  steps: CreateStep[];

  fetchRecipes: (params: Record<string, string>) => Promise<RecipeType[]>;
  setData: (key: string, data: any) => void;
  formReset: () => void;
  createRecipe: () => Promise<any>;
  addStep: (step: CreateStep) => void;
  deleteStep: (id: number) => void;
  editStep: (id: number, data: CreateStep) => void;
}

export const recipeStore = create<RecipeState>((set, get) => ({
  loading: false,
  error: false,
  recipes: [],
  data: initialState.data,
  steps: initialState.steps,

  fetchRecipes: async (params) => {
    set({ loading: true, error: false });
    try {
      const paramsString = new URLSearchParams(params).toString();
      const recipes = await axios.get(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/recipe?${paramsString}`
      );
      set({ recipes: recipes.data, loading: false });
      return recipes.data;
    } catch (error) {
      console.log(error);
      set({ error: true, loading: false });
    }
  },

  setData: (key, data) =>
    set((state) => ({ data: { ...state.data, [key]: data } })),

  formReset: () => set({ data: initialState.data }),
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

      if (ingredients.length === 0)
        throw new Error("Добавьте от 1 ингредиента");

      // ПОДСЧЁТ КБЖУ
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/ingredients?ids=${ingredients
          .map((ing) => ing.ingredientId)
          .join(",")}`
      );

      const energyInfo = { carbs: 0, proteins: 0, fats: 0, calories: 0 };
      const CPFC = ["calories", "proteins", "fats", "carbs"] as const;
      let totalWeight = 0; // Добавляем переменную для хранения общего веса блюда

      data.forEach((ing: Ingredient) => {
        const findIng = ingredients.find((i) => i.ingredientId === ing.id);
        if (findIng) {
          let weightInGrams;
          if (findIng.quantityWithUnit.includes("шт.")) {
            weightInGrams =
              findIng.quantity * (findIng.quantityObj?.gramms! || 1);
          } else {
            weightInGrams =
              findIng.quantity * (findIng.quantityObj?.gramms || 1);
          }
          totalWeight += weightInGrams; // Считаем общий вес
          // Подсчёт КБЖУ для всего блюда
          CPFC.forEach((key) => {
            energyInfo[key] += (ing[key] / 100) * weightInGrams;
          });
        }
      });

      CPFC.forEach((key) => {
        energyInfo[key] = (energyInfo[key] / totalWeight) * 100
      })
    
      CPFC.forEach((key) => {
        formData.append(key, String(energyInfo[key].toFixed(2)));
      })


      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/recipe`,
        formData
      );

      if (!res.data) throw new Error("Recipe not created");

      // СОЗДАНИЕ ИНГРЕДИЕНТОВ В БД
      ingredients.forEach(async (ingredient) => {
        await axios.post(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/ingredients`,
          {
            ...ingredient,
            recipeId: res.data.id,
            quantity: ingredient.quantity,
          }
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
