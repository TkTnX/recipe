import { calculatorData } from "@/types";
import { create } from "zustand";

interface CalculatorStore {
  loading: boolean;
  error: boolean;
  data: calculatorData;
  setData: (key: string, value: string) => void;
}

export const calculatorStore = create<CalculatorStore>((set, get) => ({
  loading: false,
  error: false,

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
}));
