import AboutFoodList from "@/components/AboutFood/AboutFoodList";

const AboutFoodPage = () => {
  return (
    <div className="max-w-[600px] flex flex-col w-full mx-auto lg:mx-0 h-fit mt-6">
      <h2 className="text-4xl font-semibold">Главное о еде</h2>
      <p className="font-light mt-4 text-sm sm:text-base">
        Собрали самые интересные материалы обо всем, что связано с едой и
        людьми,которые ее любят. Подборки рецептов на все случаи жизни,
        комментарии от специалистов, тренды кулинарии, советы по обустройству
        кухни, принципы правильного питания и многое другое.
      </p>
      <AboutFoodList />
    </div>
  );
};

export default AboutFoodPage;
