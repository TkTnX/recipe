import { CalculatorTitle, ChooseButton } from "./index";
import { calculatorStore } from "@/stores/calculatorStore";

const ChooseGoal = () => {
  const { data, setData } = calculatorStore();
  return (
    <div>
      <CalculatorTitle title="Ваша цель:" />
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <ChooseButton
          state={data.goal}
          onClick={() => setData("goal", "lose")}
          value={"lose"}
          className="w-full sm:w-fit"
        >
          Сбросить вес
        </ChooseButton>
        <ChooseButton
          state={data.goal}
          onClick={() => setData("goal", "maintain")}
          value={"maintain"}
          className="w-full sm:w-fit"
        >
          Поддерживать вес
        </ChooseButton>
        <ChooseButton
          state={data.goal}
          onClick={() => setData("goal", "gain")}
          value={"gain"}
          className="w-full sm:w-fit"
        >
          Набрать вес
        </ChooseButton>
      </div>
    </div>
  );
};

export default ChooseGoal;
