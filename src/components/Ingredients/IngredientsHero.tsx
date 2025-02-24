import Image from "next/image";

const IngredientsHero = () => {
  return (
    <div className="relative w-full h-[95px] py-6 px-12">
      <Image
        src="/images/ingredients-hero.webp"
        alt="Ingredients hero"
        fill
        className="rounded-b-lg object-cover "
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#4242429c] to-transparent rounded-lg" />
      <h2 className="uppercase text-4xl tracking-widest relative z-10 text-white">
        ПРОДУКТЫ
      </h2>
    </div>
  );
};

export default IngredientsHero;
