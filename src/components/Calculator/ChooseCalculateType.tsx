import { useState } from "react";
import ChooseButton from "./ChooseButton";
import CalculatorTitle from "./CalculatorTitle";
import { Info } from "lucide-react";

const ChooseCalculateType = () => {
  const [type, setType] = useState<"benedict" | "mifflin">("benedict");
  return (
    <div>
      <div className="flex items-center gap-2">
        <CalculatorTitle title="Формула расчёта:" />
        {/* TODO: Модалка, с информацией */}
        <button type="button">
          <Info strokeWidth={1} size={16} />
        </button>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <ChooseButton
          state={type}
          onClick={() => setType("benedict")}
          value={"benedict"}
        >
          Харриса-Бенедикта
        </ChooseButton>
        <ChooseButton
          state={type}
          onClick={() => setType("mifflin")}
          value={"mifflin"}
        >
          Миффлина-Сан Жеора
        </ChooseButton>
      </div>
    </div>
  );
};

export default ChooseCalculateType;
