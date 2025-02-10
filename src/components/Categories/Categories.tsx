import { CategoryType } from "@/types";
import CategoryItem from "./CategoryItem";
import Link from "next/link";

// ! TEMP

const categories = [
  {
    id: 1,
    name: "Завтраки",
    href: "/recipes/breakfast",
    img: "/images/categories/breakfast.webp",
  },

  {
    id: 2,
    name: "Обед",
    href: "/recipes/lunch",
    img: "/images/categories/breakfast.webp",
  },
  {
    id: 3,
    name: "Ужин",
    href: "/recipes/dinner",
    img: "/images/categories/breakfast.webp",
  },
  {
    id: 4,
    name: "Здоровая еда",
    href: "/recipes/healthy",
    img: "/images/categories/breakfast.webp",
  },
  {
    id: 5,
    name: "Закуски",
    href: "/recipes/snacks",
    img: "/images/categories/breakfast.webp",
  },
  {
    id: 6,
    name: "Десерты",
    href: "/recipes/desserts",
    img: "/images/categories/breakfast.webp",
  },
];

const Categories = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-12 gap-y-6 gap-x-4 ">
        {categories.map((category: CategoryType) => (
          <CategoryItem category={category} />
        ))}
      </div>
      <Link
        href={"/recipes"}
        className="block text-center w-full sm:w-fit  items-center gap-2 px-2 lg:px-4 py-2 rounded-full border border-black text-sm hover:bg-primary hover:border-primary transition mt-4 mx-auto"
      >
        Смотреть все рецепты
      </Link>
    </div>
  );
};

export default Categories;
