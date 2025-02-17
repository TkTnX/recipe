"use client";
import { recipeStore } from "@/stores/recipeStore";
import { NewCover, NewInformation, NewIngredients, NewSteps } from "./index";

const NewRecipeForm = () => {
  const createRecipe = recipeStore((state) => state.createRecipe);
  const data = recipeStore((state) => state.data);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await createRecipe();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col ">
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
    </form>
  );
};

export default NewRecipeForm;
