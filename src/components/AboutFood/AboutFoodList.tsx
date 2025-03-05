import { CONST_ABOUT_FOOD } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const AboutFoodList = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-12 mt-10">
      {CONST_ABOUT_FOOD.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="relative w-full h-[250px] vsm:h-[300px] rounded-lg overflow-hidden text-white"
        >
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 z-[1]">
            <h4 className="text-3xl font-semibold  drop-shadow-2xl">
              {item.name}
            </h4>
            <p className="text-xs sm:text-base mt-2">{item.description}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#5f5f5f9c] to-transparent rounded-lg" />
        </Link>
      ))}
    </div>
  );
};

export default AboutFoodList;
