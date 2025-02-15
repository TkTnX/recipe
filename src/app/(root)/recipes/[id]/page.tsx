import RecipeIngredients from "@/components/Recipe/RecipeIngredients";
import { prisma } from "@/prisma/prisma";
import { ChefHat, CookingPotIcon } from "lucide-react";
import Image from "next/image";

const RecipePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const recipe = await prisma.recipe.findUnique({
    where: { id },
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

  if (!recipe) return <div>Рецепт не найден!</div>;

  return (
    <div className="mt-8  max-w-[600px] flex flex-col   w-full  mx-auto lg:mx-0 h-fit">
      {/* TODO: Breadcrumbs */}
      <p className="text-sm text-gray-500 mt-4">
        {new Date(recipe.createdAt).toLocaleDateString("ru-RU")}
      </p>
      <div className="relative w-full h-[300px] rounded-lg overflow-hidden mt-5">
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          fill
          className="object-cover"
        />
      </div>
      {/* TODO: Recipe controls */}

      {/* TITLE */}
      <div className="mt-5">
        <h2 className="text-3xl font-bold">{recipe.title}</h2>
        <p className="text-sm font-light mt-2">{recipe.description}</p>
      </div>

      {/* AUTHOR */}

      <div className="flex items-center gap-2 mt-5">
        <Image
          src={recipe.author.avatarUrl || "/images/icons/avatar.webp"}
          alt={recipe.author.username}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="text-xs font-light">
          <p>
            <span className="text-[#aaa]">Автор:</span> {recipe.author.username}
          </p>
          <p>кулинарный редактор Recipe.ru</p>
        </div>
      </div>

      {/* ENERGY VALUE */}
      <div>
        <div className="flex items-center gap-4 text-center mt-5 justify-center">
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

      {/* INFORMATION */}
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

      {/* INGREDIENTS */}
      <div className="mt-10">
        <h4 className="text-2xl font-semibold tracking-wider">
          ПРОДУКТЫ ДЛЯ РЕЦЕПТА
        </h4>
        <RecipeIngredients recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipePage;
