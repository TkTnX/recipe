"use client";
import { Calculator } from "lucide-react";
import Button from "../ui/buttons/button";
import ChooseCalculateType from "./ChooseCalculateType";
import { ChooseInfo, ChooseActivity, ChooseGoal } from "./index";
const CalculatorForm = () => {
  return (
    <form className="flex flex-col gap-16">
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
