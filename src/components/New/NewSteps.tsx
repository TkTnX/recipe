"use client";
import { Info, PlusCircle } from "lucide-react";
import { useState } from "react";
import NewStep from "./NewStep";
import { recipeStore } from "@/stores/recipeStore";
import { CreateStep } from "@/types";


const NewSteps = () => {
  const { steps, addStep, deleteStep } = recipeStore();


  const onAddStep = () =>
    addStep({ id: steps.length + 1, description: "", imageUrl: null });
  const onDeleteStep = (id: number) => deleteStep(id);

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
        {steps.map((step, index) => (
          <NewStep
            onDeleteStep={onDeleteStep}
            step={index + 1}
            stepId={step.id}
            key={step.id}
          />
        ))}
        <button
          onClick={onAddStep}
          type="button"
          className="flex items-center gap-2 mt-5 bg-primary px-4 py-2 text-sm rounded-full"
        >
          Добавить шаг <PlusCircle strokeWidth={1} />
        </button>
      </div>
    </>
  );
};

export default NewSteps;
