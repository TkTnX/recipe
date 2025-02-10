import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  // TODO: Перенести в constants
  return (
    <div className="hidden lg:block h-full w-64 z-50 ">
      <div className="fixed top-[calc(64px+20px)] flex flex-col gap-4 -tracking-tighter">
        <div className="flex items-center justify-between">
          <Link href="/recipes" className="flex items-center gap-2 font-bold ">
            <Image
              src="/images/sidebar/recipes.webp"
              width={40}
              height={40}
              alt="Рецепты"
              className="rounded-md"
            />
            Рецепты
          </Link>
          <button>
            <ChevronDown
              color="#bfbdbd"
              className="hover:stroke-black transition drop-shadow rounded-full bg-white"
            />
          </button>
        </div>
        <Link
          href="/videorecipes"
          className="flex items-center gap-2 font-bold "
        >
          <Image
            src="/images/sidebar/videorecipes.png"
            width={40}
            height={40}
            alt="Видеорецепты"
            className="rounded-md"
          />
          Видеорецепты
        </Link>
        <Link href="/calculator" className="flex items-center gap-2 font-bold ">
          <Image
            src="/images/sidebar/calculator.webp"
            width={40}
            height={40}
            alt="Калькулятор калорий"
            className="rounded-md"
          />
          Калькулятор калорий
        </Link>
        <div className="flex items-center justify-between">
          <Link
            href="/about-food"
            className="flex items-center gap-2 font-bold "
          >
            <Image
              src="/images/sidebar/about-food.webp"
              width={40}
              height={40}
              alt="Главное о еде"
              className="rounded-md"
            />
            Главное о еде
          </Link>
          <button>
            <ChevronDown
              color="#bfbdbd"
              className="hover:stroke-black transition drop-shadow rounded-full bg-white"
            />
          </button>
        </div>
        <Link
          href="https://5ka.ru"
          className="flex items-center gap-2 font-bold "
        >
          <Image
            src="/images/sidebar/shop.webp"
            width={40}
            height={40}
            alt="Магазин"
            className="rounded-md"
          />
          Магазин
        </Link>
        <Link href="/calculator" className="flex items-center gap-2 font-bold ">
          <Image
            src="/images/sidebar/academy.webp"
            width={40}
            height={40}
            alt="Кулинарные мастер-классы"
            className="rounded-md"
          />
          Кулинарные <br /> мастер-классы
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
