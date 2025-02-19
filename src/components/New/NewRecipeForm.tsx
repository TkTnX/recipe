"use client";
import { recipeStore } from "@/stores/recipeStore";
import { NewCover, NewInformation, NewIngredients, NewSteps } from "./index";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NewRecipeForm = () => {
  const { loading, createRecipe, data } = recipeStore();
  const isDisabled = Object.values(data).some((value) => value === null);
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await createRecipe();
      if (res.error) {
        return setErrorMsg(res.error);
      }
      return router.push(`/recipes/${res.id}`);
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
        disabled={isDisabled}
        type="submit"
        className="bg-primary px-8 py-4 rounded-full uppercase w-fit mx-auto mt-10 disabled:bg-gray-500 disabled:cursor-not-allowed transition disabled:opacity-50"
      >
        Отправить рецепт
      </button>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
    </form>
  );
};

export default NewRecipeForm;
