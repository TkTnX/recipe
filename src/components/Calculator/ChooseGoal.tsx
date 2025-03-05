import { useState } from "react";
import { CalculatorTitle, ChooseButton } from "./index";

const ChooseGoal = () => {
  const [goal, setGoal] = useState<"lose" | "maintain" | "gain">("lose");
  return (
    <div>
      <CalculatorTitle title="Ваша цель:" />
      <div className="flex items-center gap-2 mt-4">
        <ChooseButton
          state={goal}
          onClick={() => setGoal("lose")}
          value={"lose"}
        >
          Сбросить вес
        </ChooseButton>
        <ChooseButton
          state={goal}
          onClick={() => setGoal("maintain")}
          value={"maintain"}
        >
          Поддерживать вес
        </ChooseButton>
        <ChooseButton
          state={goal}
          onClick={() => setGoal("gain")}
          value={"gain"}
        >
          Набрать вес
        </ChooseButton>
      </div>
    </div>
  );
};

export default ChooseGoal;
