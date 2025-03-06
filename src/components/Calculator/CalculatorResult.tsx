"use client";
import { calculatorStore } from "@/stores/calculatorStore";
import { CalculatorResultIndex, CalculatorResultNorm } from "./index";
const CalculatorResult = () => {
  const calories = calculatorStore((state) => state.calories);
  if (!calories) return null;
  return (
    <div className="">
      <h3 className="font-medium text-2xl">Ваш результат</h3>
      <CalculatorResultIndex />
      <CalculatorResultNorm />
    </div>
  );
};

export default CalculatorResult;
