import { Recipe } from "@prisma/client";

type Props = {
  recipe: Recipe;
  className?: string;
};

const RecipeEnergyValue = ({ recipe, className }: Props) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-4 text-center mt-5 justify-center flex-wrap">
        <div className="bg-primary rounded-xl shadow-x p-2 w-20">
          <p className="text-xs">Калории</p>
          <div className="bg-white rounded-xl p-2 mt-2">
            <h6 className="font-bold ">{recipe.calories}</h6>
            <p className="text-xs">кКал</p>
          </div>
        </div>
        <div className="bg-primary rounded-xl shadow-x p-2 w-20">
          <p className="text-xs">Белки</p>
          <div className="bg-white rounded-xl p-2 mt-2">
            <h6 className="font-bold ">{recipe.proteins}</h6>
            <p className="text-xs">грамм</p>
          </div>
        </div>
        <div className="bg-primary rounded-xl shadow-x p-2 w-20">
          <p className="text-xs">Жиры</p>
          <div className="bg-white rounded-xl p-2 mt-2">
            <h6 className="font-bold ">{recipe.fats}</h6>
            <p className="text-xs">грамм</p>
          </div>
        </div>
        <div className="bg-primary rounded-xl shadow-x p-2 w-20">
          <p className="text-xs">Углеводы</p>
          <div className="bg-white rounded-xl p-2 mt-2">
            <h6 className="font-bold ">{recipe.carbs}</h6>
            <p className="text-xs">грамм</p>
          </div>
        </div>
      </div>
      <p className="text-center text-[10px] text-[#aaa] mt-2">
        Пищевая ценность на 100г. Калорийность рассчитана для сырых продуктов.
      </p>
    </div>
  );
};

export default RecipeEnergyValue;
