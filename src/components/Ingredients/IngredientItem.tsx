import { Ingredient } from "@/prisma/generated/client";
import Image from "next/image";
import Link from "next/link";

const IngredientItem = ({ ingredient }: { ingredient: Ingredient }) => {
  return (
    <Link
      href={`/ingredients/${ingredient.id}`}
      className="overflow-hidden bg-white shadow-lg rounded-xl"
    >
      <div className="relative w-full h-[110px]">
        <Image
          src={ingredient.imageUrl}
          alt={ingredient.name}
          className="object-cover"
          fill
        />
      </div>
      <h5 className="text-center p-3">{ingredient.name}</h5>
    </Link>
  );
};

export default IngredientItem;
