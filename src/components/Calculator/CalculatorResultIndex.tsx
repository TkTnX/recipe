"use client";
import { calculatorStore } from "@/stores/calculatorStore";
import { calculateIndex } from "@/utils/calculateCalories";
import { Info } from "lucide-react";
import CalculatorModalIndex from "./CalculatorModaIndex";

const CalculatorResultIndex = () => {
  const data = calculatorStore((state) => state.data);
  const index = calculateIndex(data);

  const minIndex = 10;
  const maxIndex = 40;

  const indicatorPosition =
    ((Number(index) - minIndex) / (maxIndex - minIndex)) * 100;

  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl mt-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-xl">Ваш индекс массы тела</h4>
        <CalculatorModalIndex>
          <button>
            <Info strokeWidth={1} size={24} />
          </button>
        </CalculatorModalIndex>
      </div>
      <p className="font-bold text-3xl mt-2">{index}</p>
      <div className="relative w-full h-4 mt-4 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(to right, #2196F3, #4CAF50, #FFEB3B, #FF9800, #F44336)",
          }}
        />
        <div
          className={`absolute top-0 h-full w-[4px] bg-black rounded `}
          style={{ left: `calc(${indicatorPosition}% - 2px)` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>Дефицит</span>
        <span>Норма</span>
        <span>Избыток</span>
      </div>
    </div>
  );
};

export default CalculatorResultIndex;
