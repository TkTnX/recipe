import { TYPE_OF_MEAL } from "@/types";
import { getTypeOfMeal } from "@/utils/getTypeOfMeal";
import { Home } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  typeOfMeal: TYPE_OF_MEAL;
};

const RecipeBreadcrumbs = ({ title, typeOfMeal: meal }: Props) => {
  const typeOfMeal = getTypeOfMeal(meal);
  return (
    <div className="text-[#6e6e6e] text-sm font-light flex items-center gap-1 flex-wrap">
      <Link href={"/"}>
        <Home size={16} strokeWidth={2} color="#6e6e6e" />
      </Link>
      <Link href="/recipes" className="underline">
        Рецепты
      </Link>
      <span>/</span>
      <Link href={`/recipes?typeOfMeal=${meal}`} className="underline">
        {typeOfMeal}
      </Link>
      <span>/</span>
      <p className="underline">{title}</p>
    </div>
  );
};

export default RecipeBreadcrumbs;
