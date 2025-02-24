import { prisma } from "@/prisma/prisma";
import IngredientItem from "./IngredientItem";

const IngredientsList = async () => {
  const ingredients = await prisma.ingredient.findMany();

  return (
    <div className="grid grid-cols-3 gap-6 mt-10">
      {ingredients.map((ingredient) => (
        <IngredientItem key={ingredient.id} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default IngredientsList;
