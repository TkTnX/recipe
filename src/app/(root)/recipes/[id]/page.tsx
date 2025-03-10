import Image from "next/image";
import {
  ItemAuthor,
  RecipeComments,
  RecipeEnergyValue,
  RecipeFavorites,
  RecipeInformation,
  RecipeIngredients,
  RecipeSteps,
  RecipeBreadcrumbs,
  ItemControls,
} from "@/components/Recipe";
import { getRecipeById } from "@/lib/recipe";
import { TYPE_OF_MEAL } from "@/types";
import ItemFooter from "@/components/Recipe/ItemFooter";

const RecipePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const recipe = await getRecipeById(id);
  if (!recipe) return <div>Рецепт не найден!</div>;
  return (
    <div className="mt-8  max-w-[600px] flex flex-col   w-full  mx-auto lg:mx-0 h-fit">
      <RecipeBreadcrumbs
        title={recipe.title}
        typeOfMeal={recipe.typeOfMeal as TYPE_OF_MEAL}
      />
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
      {/* RECIPE CONTROLS */}
      <ItemControls
        type="RECIPE"
        itemId={recipe.id}
        favorites={recipe._count.favorites}
      />

      {/* TITLE */}
      <div className="mt-5">
        <h2 className="text-3xl font-bold">{recipe.title}</h2>
        <p className="text-sm font-light mt-2">{recipe.description}</p>
      </div>

      {/* AUTHOR */}
      <ItemAuthor author={recipe.author} />

      {/* ENERGY VALUE */}
      <RecipeEnergyValue recipe={recipe} />

      {/* INFORMATION */}
      <RecipeInformation recipe={recipe} />

      {/* INGREDIENTS */}
      <div className="mt-10">
        <h4 className="text-2xl font-semibold tracking-wider">
          ПРОДУКТЫ ДЛЯ РЕЦЕПТА
        </h4>
        <RecipeIngredients recipeId={recipe.id} />
      </div>

      {/* STEPS */}
      <div className="mt-10">
        <h4 className="text-2xl font-semibold tracking-wider">
          ПОШАГОВЫЙ РЕЦЕПТ
        </h4>
        <RecipeSteps recipeId={recipe.id} />
      </div>

      {/* FAVORITES & COMMENTS */}
      <ItemFooter
        type="RECIPE"
        favorites={recipe._count.favorites}
        itemId={recipe.id}
        itemComments={recipe.comments}
      />
    </div>
  );
};

export default RecipePage;
