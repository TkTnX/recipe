import { Info } from "lucide-react";
import { CalculatorModalInfo, CalculatorTitle, ChooseButton } from "./index";
import { calculatorStore } from "@/stores/calculatorStore";
const ChooseCalculateType = () => {
  const { data, setData } = calculatorStore();
  return (
    <div>
      <div className="flex items-center gap-2">
        <CalculatorTitle title="Формула расчёта:" />
        {/* TODO: Модалка, с информацией */}
        <CalculatorModalInfo>
          <button type="button">
            <Info strokeWidth={1} size={16} />
          </button>
        </CalculatorModalInfo>
      </div>
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <ChooseButton
          state={data.type}
          onClick={() => setData("type", "benedict")}
          value={"benedict"}
          className="w-full sm:w-fit"
        >
          Харриса-Бенедикта
        </ChooseButton>
        <ChooseButton
          state={data.type}
          onClick={() => setData("type", "mifflin")}
          value={"mifflin"}
          className="w-full sm:w-fit"
        >
          Миффлина-Сан Жеора
        </ChooseButton>
      </div>
    </div>
  );
};

export default ChooseCalculateType;
