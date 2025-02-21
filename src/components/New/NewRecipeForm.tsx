"use client";
import { recipeStore } from "@/stores/recipeStore";
import { NewCover, NewInformation, NewIngredients, NewSteps } from "./index";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/buttons/button";

const NewRecipeForm = () => {
  const { loading, createRecipe, data, error } = recipeStore();
  const isDisabled =
    Object.values(data).some((value) => value === null) ||
    data.ingredients.length === 0 ||
    !data.imageUrl.size;
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await createRecipe();
      if (res.error || error) {
        return setErrorMsg(res.error || error);
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

      <Button type="submit" isDisabled={isDisabled} className="mx-auto mt-10">
        Отправить рецепт
      </Button>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
    </form>
  );
};

export default NewRecipeForm;
