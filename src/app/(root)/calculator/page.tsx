import CalculatorForm from "@/components/Calculator/CalculatorForm";
import CalculatorResult from "@/components/Calculator/CalculatorResult";
import { Home } from "lucide-react";
import Link from "next/link";

const CalculatorPage = () => {
  return (
    <div className="max-w-[500px] flex flex-col w-full mx-auto lg:mx-0 h-fit mt-4">
      <div className="text-[#6e6e6e] text-sm font-light flex items-center gap-1 flex-wrap">
        <Link href={"/"}>
          <Home size={16} strokeWidth={2} color="#6e6e6e" />
        </Link>
        <span>/</span>
        <p className="underline">Калькулятор калорий</p>
      </div>
      <h2 className="text-4xl font-semibold mt-4">Калькулятор калорий</h2>
      <p className="font-light mt-4 text-sm sm:text-base">
        Рассчитайте сколько калорий, белков, жиров и углеводов вам нужно
        потреблять ежедневно для поддержания веса, похудения или набора массы.
      </p>
      <div className="mt-10 font-semibold">
        <CalculatorForm />
      </div>

      <div className="mt-10 ">
        <CalculatorResult />
      </div>
    </div>
  );
};

export default CalculatorPage;
