import { prisma } from "@/prisma/prisma";
import RecipeItem from "./RecipeItem";

type Props = {
  params: { [key: string]: string };
};

const RecipesList = async ({ params }: Props) => {
  // TODO: Оптимизация кода
  const sort = params.sort || "default";
  const time = params.time || null;
  const calories = params.calories || null;
  let orderBy = {};
  let where = {
    calories: {},
    cookingTime: {},
  };
  switch (sort) {
    case "default":
      orderBy = {};
      break;
    case "new":
      orderBy = {
        createdAt: "desc",
      };
      break;
    case "fast":
      orderBy = {
        cookingTime: "asc",
      };
      break;
    case "easy":
      orderBy = {
        difficulty: "asc",
      };
      break;
    case "hard":
      orderBy = {
        difficulty: "desc",
      };
      break;
    default:
      break;
  }

  switch (time) {
    case "up_to_15":
      where.cookingTime = {
        lte: 15,
      };
      break;
    case "up_to_30":
      where.cookingTime = {
        lte: 30,
      };
      break;
    case "up_to_45":
      where.cookingTime = {
        lte: 45,
      };
      break;
    case "up_to_hour":
      where.cookingTime = {
        lte: 60,
      };
      break;
    case "more_than_hour":
      where.cookingTime = {
        gt: 60,
      };
      break;

    default:
      where.cookingTime = {};
      break;
  }

  switch (calories) {
    case "up_to_200":
      where.calories = {
        lte: 200,
      };
      break;
    case "from_200_to_400":
      where.calories = {
        gte: 200,
        lte: 400,
      };
      break;
    case "from_400_to_600":
      where.calories = {
        gte: 400,
        lte: 600,
      };
      break;
    case "from_600_to_800":
      where.calories = {
        gte: 600,
        lte: 800,
      };
      break;
    case "more_800":
      where.calories = {
        gte: 800,
      };
      break;

    default:
      where.calories = {};
      break;
  }

  const recipes = await prisma.recipe.findMany({
    where,
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
    orderBy,
  });
  return (
    <div className="mt-10 flex flex-col gap-8">
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesList;
