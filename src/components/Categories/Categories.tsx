import { CategoryType } from "@/types";
import CategoryItem from "./CategoryItem";
import Link from "next/link";
import { prisma } from "@/prisma/prisma";

// TODO: Картинки для категорий
// TODO: Подключение Prisma + Postgresql + Next.js

const Categories = async () => {
  const categories = await prisma.category.findMany();

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-12 gap-y-6 gap-x-4 ">
        {categories.map((category: CategoryType) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
      <Link
        href={"/recipes"}
        className="block text-center w-full sm:w-fit  items-center gap-2 px-2 lg:px-4 py-2 rounded-full border border-black text-sm hover:bg-primary hover:border-primary transition mt-8 mx-auto"
      >
        Смотреть все рецепты
      </Link>
    </div>
  );
};

export default Categories;
