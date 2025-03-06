import { calculatorData } from "@/types";
import { create } from "zustand";

interface CalculatorStore {
  data: calculatorData;
  calories: null | number;

  proteins: null | number;
  fats: null | number;
  carbs: null | number;

  setData: (key: string, value: string) => void;
  setEnergyInfo: (
    proteins: number,
    fats: number,
    carbs: number,
    calories: number
  ) => void;
}

export const calculatorStore = create<CalculatorStore>((set, get) => ({
  calories: null,
  proteins: null,
  fats: null,
  carbs: null,
  data: {
    gender: "male",
    activity: "low",
    goal: "lose",
    type: "benedict",
    age: null,
    length: null,
    weight: null,
  },
  setData: (key, data) =>
    set((state) => ({ data: { ...state.data, [key]: data } })),
  setEnergyInfo: (proteins, fats, carbs, calories) =>
    set({ proteins, fats, carbs, calories: Number(calories.toFixed(1)) }),
}));
