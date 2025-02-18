"use client";
import { recipeStore } from "@/stores/recipeStore";
import { NewCover, NewInformation, NewIngredients, NewSteps } from "./index";
import { cn } from "@/lib/utils";
import { useState } from "react";

const NewRecipeForm = () => {
  const { loading, createRecipe } = recipeStore();
  const [errorMsg, setErrorMsg] = useState(null);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await createRecipe();
      if (res.error) {
        setErrorMsg(res.error);
      }
      console.log(errorMsg);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      className={cn("flex flex-col ", {
        "opacity-50 pointer-events-none ": loading,
      })}
    >
      <NewCover />
      <NewInformation />
      <NewIngredients />
      <NewSteps />

      <button
        type="submit"
        className="bg-primary px-8 py-4 rounded-full uppercase w-fit mx-auto mt-10"
      >
        Отправить рецепт
      </button>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
    </form>
  );
};

export default NewRecipeForm;
