import { calculatorStore } from "@/stores/calculatorStore";
import { Info } from "lucide-react";
import { CalculatorModalNorm, CalculatorResultNormList } from "./index";

const CalculatorResultNorm = () => {
  const { calories, proteins, fats, carbs } = calculatorStore();

  const total = proteins! + fats! + carbs!;
  const proteinsPercent = (proteins! / total) * 100;
  const fatsPercent = (fats! / total) * 100;
  const carbsPercent = (carbs! / total) * 100;

  const ringStyle = {
    background: `conic-gradient(
      #FF3D57 0% ${proteinsPercent}%, 
      #FFD700 ${proteinsPercent}% ${proteinsPercent + fatsPercent}%, 
      #8A2BE2 ${proteinsPercent + fatsPercent}% ${
      proteinsPercent + fatsPercent + carbsPercent
    }%,
      #D3D3D3 ${proteinsPercent + fatsPercent + carbsPercent}% 100%
    )`,
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl mt-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-xl">Ваша суточная норма калорий</h4>
        <CalculatorModalNorm>
          <button>
            <Info strokeWidth={1} size={24} />
          </button>
        </CalculatorModalNorm>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <div className="relative w-20 h-20">
          <div
            className="absolute inset-0 rounded-full"
            style={ringStyle}
          ></div>
          <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center text-center" />
        </div>
        <p className="font-semibold text-2xl">{calories} кКал*</p>
      </div>

      <CalculatorResultNormList />

      <p className="text-xs text-gray-500 mt-4 font-light">
        * Данные результаты являются рекомендацией, для более точных результатов
        обратитесь к специалистам.
      </p>
    </div>
  );
};

export default CalculatorResultNorm;
