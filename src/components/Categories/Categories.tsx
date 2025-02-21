import { CategoryType } from "@/types";
import CategoryItem from "./CategoryItem";
import { prisma } from "@/prisma/prisma";
import ButtonLink from "../ui/buttons/buttonLink";

const Categories = async () => {
  const categories = await prisma.category.findMany();
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-12 gap-y-6 gap-x-4 ">
        {categories.map((category: CategoryType) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>

      <ButtonLink href="/recipes" className="w-fit mx-auto mt-10">
        Смотреть все рецепты
      </ButtonLink>
    </div>
  );
};

export default Categories;
