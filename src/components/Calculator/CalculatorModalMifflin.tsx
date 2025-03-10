const CalculatorModalMifflin = () => {
  return (
    <>
      <h3 className="font-semibold text-2xl mt-10">
        Формула Харриса-Бенедикта
      </h3>

      <p className="text-sm font-light mt-4">
        Одна из последних формул расчета калорий для оптимального похудения или
        сохранения нормального веса. Она была выведена в 2005 году группой
        американских врачей-диетологов под руководством докторов Миффлина и Сан
        Жеора и все чаще стала заменять классическую формулу Харриса-Бенедикта.
      </p>
      <p className="text-sm font-light mt-4">
        Формула существует в двух вариантах — упрощенном и доработанном, и
        выдает необходимое количество килокалорий (ккал) в сутки для каждого
        конкретного человека.
      </p>
      <ol className="list-decimal mt-5 list-inside flex flex-col gap-3">
        <li>
          <b>Упрощенный вариант формулы Миффлина-Сан Жеора:</b>
          <ul className="list-disc list-inside">
            <li className="text-sm font-light mt-4">
              для мужчин: 10 х вес (кг) + 6,25 x рост (см) – 5 х возраст (г) +
              5;
            </li>
            <li className="text-sm font-light mt-4">
              для женщин: 10 x вес (кг) + 6,25 x рост (см) –5 x возраст (г) –
              161.
            </li>
          </ul>
        </li>
        <li>
          <span className="text-sm font-light mt-4">
            <b className="font-bold text-base">
              Доработанный вариант формулы Миффлина-Сан Жеора{" "}
            </b>{" "}
            дает более точную информацию и учитывает степень физической
            активности человека:
          </span>
          <ul className="list-disc list-inside">
            <li className="text-sm font-light mt-4">
              для мужчин: (10 x вес (кг) + 6,25 x рост (см) – 5 x возраст (г) +
              5) x A;
            </li>
            <li className="text-sm font-light mt-4">
              для женщин: (10 x вес (кг) + 6,25 x рост (см) – 5 x возраст (г) –
              161) x A.
            </li>
          </ul>
        </li>
      </ol>
      <p className="text-sm font-light mt-4">
        А — уровень активности человека, его различают по пяти степеням
        физических нагрузок в сутки:
      </p>
      <ul className="text-sm font-light mt-4 list-disc list-inside">
        <li>1,2 — сидячий образ жизни;</li>
        <li>
          1,375 — умеренная активность: легкие физические нагрузки, занятия 1-3
          раза в неделю;
        </li>
        <li>1,55 — средняя активность: занятия 3-5 раз в неделю;</li>
        <li>
          1,725 — активные люди: интенсивные нагрузки, занятия 6-7 раз в неделю;
        </li>
        <li>
          1,9 — спортсмены и люди, выполняющие сходные нагрузки, например, те,
          кто занимается тяжелой атлетикой или другими силовыми видами спорта с
          ежедневными тренироваками, а также те, кто выполняет тяжелую
          физическую работу: 6-7 раз в неделю.
        </li>
      </ul>
    </>
  );
};

export default CalculatorModalMifflin;
