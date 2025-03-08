import { Recipe } from "@/prisma/generated/client";
import { ChefHat, CookingPotIcon } from "lucide-react";

const RecipeInformation = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="p-4 flex items-center justify-between flex-wrap bg-white drop-shadow-xl mt-10">
      <div>
        <h5 className="font-semibold">Будет готово через</h5>
        <p className="flex items-center gap-2 mt-2 text-sm font-light">
          <CookingPotIcon color="#ffde00" size={18} />
          {recipe.cookingTime} минут
        </p>
      </div>

      <div>
        <h5 className="font-semibold">Сложность</h5>
        <div className="flex items-center gap-1">
          {[...new Array(recipe.difficulty)].map((_, i) => (
            <ChefHat key={i} color="#ffde00" size={18} />
          ))}
          {[...new Array(5 - recipe.difficulty)].map((_, i) => (
            <ChefHat key={i} color="#aaa" size={18} />
          ))}
        </div>
      </div>
      <p className="font-light text-[#aaa] text-xs mt-2">
        Учитывайте, что время готовки может меняться из-за особенностей вашей
        техники
      </p>
    </div>
  );
}

export default RecipeInformation