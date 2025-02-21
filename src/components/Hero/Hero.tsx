import Image from "next/image";
import Link from "next/link";
import HeroSearch from "./HeroSearch";

const Hero = () => {
  return (
    <div className="realtive w-full ">
      <div className="relative w-full h-[400px] drop-shadow py-3 px-3 sm:p-6">
        <Image
          src={"/images/hero.webp"}
          alt="Hero"
          fill
          className="object-cover rounded-b-xl -z-10"
        />
        <div className=" flex flex-col h-full  justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug">
              ХОЧЕТСЯ ЗАРЯДИТЬСЯ ВИТАМИНАМИ И ПОДДЕРЖАТЬ НАСТРОЕНИЕ
            </h2>
            <Link
              className="text-[#e2a64a] bg-[#4a494ad2] w-fit px-2 py-1 rounded-full border border-[#e2a64a] hover:opacity-80 transition mt-4 block"
              href="/recipes/drinks"
            >
              Найти напиток по вкусу
            </Link>
          </div>
        <HeroSearch />
        </div>
      </div>
    </div>
  );
};

export default Hero;
