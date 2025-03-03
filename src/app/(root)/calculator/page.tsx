const CalculatorPage = () => {
  return (
    <div className="max-w-[600px] flex flex-col w-full mx-auto lg:mx-0 h-fit mt-4">
      <h2 className="text-4xl font-semibold">Калькулятор калорий</h2>
      <p className="font-light mt-4 text-sm sm:text-base">
        Рассчитайте сколько калорий, белков, жиров и углеводов вам нужно
        потреблять ежедневно для поддержания веса, похудения или набора массы.
      </p>
      <div className="mt-10 font-semibold">
        <h6>Общая информация: </h6>
        {/* TODO: Доделать */}
      </div>
    </div>
  );
};

export default CalculatorPage;
