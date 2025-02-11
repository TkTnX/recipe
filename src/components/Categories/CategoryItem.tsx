import { CategoryType } from "@/types";
import Image from "next/image";
import Link from "next/link";

const CategoryItem = ({ category }: { category: CategoryType }) => {
  return (
    <Link href={category.href} className="  h-[112px]">
      <div className="relative w-full h-[112px] ">
        <Image
          src={category.img}
          alt={category.name}
          fill
          className="object-cover  -z-10 rounded-lg shadow "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b9c] to-transparent rounded-lg" />
        <h4 className="absolute bottom-2 left-2 text-white font-semibold">
          {category.name}
        </h4>
      </div>
    </Link>
  );
};

export default CategoryItem;
