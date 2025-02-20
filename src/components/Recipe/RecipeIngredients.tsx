import { prisma } from "@/prisma/prisma";
import Image from "next/image";
import Link from "next/link";

const RecipeIngredients = async ({ recipeId }: { recipeId: string }) => {
  const ingredients = await prisma.recipeIngredient.findMany({
    where: {
      recipeId,
    },
    include: {
      ingredient: true,
    },
  });
  return (
    <div className="">
      <h5 className="text-xl font-semibold mt-4">Для блюда</h5>
      <ul className="mt-4 flex flex-col gap-2">
        {ingredients.map((ingredient) => (
          <li
            key={ingredient.id}
            className="flex items-center justify-between border-b border-dashed border-[#aaa] pb-2 "
          >
            <Link href={`/ingredients/${ingredient.ingredient.id}`} className="flex sm:items-center gap-2 flex-col sm:flex-row ">
              <Image
                src={ingredient.ingredient.imageUrl}
                alt={ingredient.ingredient.name}
                width={60}
                height={60}
                className="object-cover rounded-full drop-shadow-lg min-w-[60px] min-h-[60px]"
              />
              <p className="underline font-light">
                {ingredient.ingredient.name}
              </p>
            </Link>
            <p>{ingredient.quantityWithUnit}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
