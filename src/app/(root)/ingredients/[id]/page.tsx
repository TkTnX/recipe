import { RecipeEnergyValue } from "@/components/Recipe";
import RecipeFavoritesButton from "@/components/Recipe/RecipeFavoritesButton";
import ListItem from "@/components/Recipes/ListItem";
import ButtonLink from "@/components/ui/buttons/buttonLink";
import { prisma } from "@/prisma/prisma";
import { RecipeType } from "@/types";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};


const IngredientPage = async ({ params }: Props) => {
  const id = (await params).id;

  const ingredient = await prisma.ingredient.findUnique({
    where: { id },
    include: {
      recipeIngredient: { include: { recipe: true }, take: 5 },
      _count: { select: { favorites: true } },
    },
  });


  if (!ingredient) return <p>Ингредиент не найден!</p>;
  return (
    <div className="mt-8 max-w-[600px] flex flex-col w-full mx-auto lg:mx-0 h-fit">
      <h2 className="font-semibold text-3xl">{ingredient.name}</h2>
      <RecipeFavoritesButton
        type="ingredient"
        itemId={ingredient.id}
        favorites={ingredient._count.favorites}
        className="mt-4"
      />
      <p className="mt-4 font-light">
        {ingredient.name} - {ingredient.description}
      </p>
      <div className="relative w-full h-[270px] mt-4">
        <Image
          src={ingredient.imageUrl}
          alt={ingredient.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <RecipeEnergyValue
        recipe={ingredient as unknown as RecipeType}
        className="mt-4"
      />

      <div className="mt-20">
        <h3 className="font-medium text-2xl tracking-wider">
          Рецепты с этим продуктом
        </h3>
        <div className="mt-10 flex flex-col gap-5">
          {ingredient.recipeIngredient.length > 0 ? (
            ingredient.recipeIngredient.map((recipe) => (
              <ListItem
                key={recipe.id}
                item={recipe.recipe as RecipeType}
              />
            ))
          ) : (
            <div className="text-center">
              <p className="font-semibold text-xl">
                Рецептов с этим продуктом нет!
              </p>
              <ButtonLink isAdd href="/new" className="w-fit mx-auto mt-4">
                Создайте первый!
              </ButtonLink>
            </div>
          )}
        </div>
        {/* TODO: Поиск рецептов с этим ингредиентом (доработать, когда сделаю фильтрацию по ингредиентам) */}
        {ingredient.recipeIngredient.length > 0 && (
          <ButtonLink
            href={`/recipes?ingredient=${id}`}
            className="w-fit mx-auto mt-10 bg-primary rounded-lg border-primary"
          >
            НАЙТИ ЕЩЁ
          </ButtonLink>
        )}
      </div>
    </div>
  );
};

export default IngredientPage;
