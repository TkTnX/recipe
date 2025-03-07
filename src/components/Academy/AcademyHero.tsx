const AcademyHero = () => {
  return (
    <div className="flex relative flex-col items-center justify-center pt-8 pb-16 text-white bg-[url('/images/academy-hero.webp')]  bg-cover">
      <div className="absolute inset-0 bg-gradient-to-t from-[#4242429c] to-transparent z-[0]" />
      <div className="relative z-1 text-center max-w-[600px] mx-auto">
        <h2 className="text-xl vsm:text-2xl sm:text-4xl font-semibold tracking-widest">
          ГОТОВИМ ВМЕСТЕ С
        </h2>
        <h1 className="text-2xl vsm:text-4xl sm:text-8xl font-semibold mt-2 text-primary">
          RECIPE.RU
        </h1>
        <h3 className="text-lg vsm:text-xl sm:text-2xl font-semibold mt-5">
          Кулинарные курсы и мастер-классы, благодаря которым вы научитесь
          готовить как шеф-повар
        </h3>
      </div>
    </div>
  );
};

export default AcademyHero;
