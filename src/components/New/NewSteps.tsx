"use client";
import { Info, PlusCircle } from "lucide-react";
import { useState } from "react";
import NewStep from "./NewStep";

const initialSteps = [{}, {}, {}];

const NewSteps = () => {
  const [steps, setSteps] = useState(initialSteps);
  return (
    <>
      <h2 className="text-xl tracking-wider font-semibold uppercase mt-10">
        КАК ПРИГОТОВИТЬ /{" "}
        <span className="font-normal">
          ПОШАГОВАЯ <br /> ИНСТРУКЦИЯ
        </span>
      </h2>
      <p className="text-xs font-light flex items-center gap-2 bg-[#e9f8eb] p-2 rounded-md mt-4">
        <Info color="#3cc451" /> Для создания рецепта необходимо заполнить
        минимум 3 шага
      </p>
      {/* СОЗДАНИЕ ШАГОВ */}

      <div>
        {steps.map((_, index) => (
          <NewStep step={index + 1} key={index} />
        ))}
        <button type="button" className="flex items-center gap-2 mt-5 bg-primary px-4 py-2 text-sm rounded-full">
          Добавить шаг <PlusCircle strokeWidth={1} />
        </button>
      </div>
    </>
  );
};

export default NewSteps;
