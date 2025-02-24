import { prisma } from "@/prisma/prisma";
import IngredientItem from "./IngredientItem";

const IngredientsList = async () => {
  // TODO: Пагинация (сначала получать 15, потом дополнять)
  const ingredients = await prisma.ingredient.findMany();
  return (
    <div className="grid vsm:grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
      {ingredients.map((ingredient) => (
        <IngredientItem key={ingredient.id} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default IngredientsList;
