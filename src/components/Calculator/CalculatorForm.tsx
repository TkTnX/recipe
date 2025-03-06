"use client";
import { Calculator } from "lucide-react";
import Button from "../ui/buttons/button";
import ChooseCalculateType from "./ChooseCalculateType";
import { ChooseInfo, ChooseActivity, ChooseGoal } from "./index";
import { calculatorStore } from "@/stores/calculatorStore";
import {
  calculateCaloriesBenedict,
  calculateCaloriesMifflin,
} from "@/utils/calculateCalories";

// TODO: Выводить результат (Индекс, суточную норму)
// TODO: Упростить код в функциях подсчёта калорий

const CalculatorForm = () => {
  const data = calculatorStore((state) => state.data);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const calories =
        data.type === "benedict"
          ? calculateCaloriesBenedict(data)
          : calculateCaloriesMifflin(data);

      console.log(calories);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-16">
      <ChooseInfo />
      <ChooseActivity />
      <ChooseGoal />
      <ChooseCalculateType />
      <Button className="w-full bg-[#1cd43b] text-white flex items-center justify-center hover:opacity-80">
        <Calculator />
        РАССЧИТАТЬ
      </Button>
    </form>
  );
};

export default CalculatorForm;
