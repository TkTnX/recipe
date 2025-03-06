import { calculatorStore } from "@/stores/calculatorStore";

const CalculatorResultNormList = () => {
  const { proteins, fats, carbs } = calculatorStore();

  return (
    <div className="mt-4">
      <p className="text-sm text-gray-500 font-light">Из которых</p>
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-start gap-2">
          <div className="bg-primary rounded-full w-3 h-3 mt-1" />
          <div>
            <b>{proteins} г</b>
            <p className="text-sm text-gray-500 font-light">Белки</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="bg-[#ff599e] rounded-full w-3 h-3 mt-1" />
          <div>
            <b>{fats} г</b>
            <p className="text-sm text-gray-500 font-light">Жиры</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="bg-[#bf4df5] rounded-full w-3 h-3 mt-1" />
          <div>
            <b>{carbs} г</b>
            <p className="text-sm text-gray-500 font-light">Углеводов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorResultNormList;
