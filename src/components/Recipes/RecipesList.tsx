import { prisma } from "@/prisma/prisma";
import RecipeItem from "./RecipeItem";
import { getCaloriesFilter, getOrderBy, getTimeFilter } from "@/utils/recipes";

type Props = {
  params: { [key: string]: string };
};

const RecipesList = async ({ params }: Props) => {
  const sort = params.sort || "default";
  const time = params.time || null;
  const calories = params.calories || null;
  const orderBy = getOrderBy(sort);
  const where = {
    calories: getCaloriesFilter(calories),
    cookingTime: getTimeFilter(time),
  };

  const recipes = await prisma.recipe.findMany({
    where,
    orderBy,
    include: {
      author: {
        select: {
          username: true,
          bio: true,
          avatarUrl: true,
        },
      },
      ingredients: true,
      steps: true,
    },
  });
  
  return (
    <div className="mt-10 flex flex-col gap-8">
      {recipes.length > 0 ? (
        recipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <div className="mt-6">
          <h4 className="text-2xl font-semibold">
            К сожалению, мы ничего не нашли по вашему запросу.
          </h4>
          <p className="mt-3">Попробуйте ввести другой запрос</p>
        </div>
      )}
    </div>
  );
};

export default RecipesList;
