import IngredientsHero from "@/components/Ingredients/IngredientsHero";
import IngredientsList from "@/components/Ingredients/IngredientsList";

const IngredientsPage = () => {
  return (
    <div className="max-w-[600px] flex flex-col w-full mx-auto lg:mx-0 h-fit">
      <IngredientsHero />

      <IngredientsList />
    </div>
  );
};

export default IngredientsPage;
