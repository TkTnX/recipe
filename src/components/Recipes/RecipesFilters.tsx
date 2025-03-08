"use client";
import { Settings2Icon } from "lucide-react";
import RecipesFiltersModal from "./RecipesFiltersModal";
import RecipeSort from "./RecipeSort";
import { Suspense } from "react";

const RecipesFilters = () => {
  return (
    <div className="mt-4 flex-col vsm:flex-row flex items-center gap-3">
      <Suspense>
        <RecipeSort />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <RecipesFiltersModal>
          <button className="flex w-full justify-center md:w-fit items-center gap-2 border border-black rounded-full py-2 px-3">
            <Settings2Icon strokeWidth={1} />
            ФИЛЬТРЫ
          </button>
        </RecipesFiltersModal>
      </Suspense>
    </div>
  );
};

export default RecipesFilters;
