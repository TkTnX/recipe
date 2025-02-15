export const CONST_SIDEBAR = [
  {
    name: "Рецепты",
    href: "/recipes",
    img: "/images/sidebar/recipes.webp",
    more: [
      {
        name: "Доступный ЗОЖ",
        href: "/recipes/zozh",
      },
      {
        name: "Закуски",
        href: "/recipes/snacks",
      },
      {
        name: "Салаты",
        href: "/recipes/salads",
      },
      {
        name: "Первые блюда",
        href: "/recipes/starter",
      },
      {
        name: "Вторые блюда",
        href: "/recipes/main",
      },
      {
        name: "Гарниры",
        href: "/recipes/garnish",
      },
      {
        name: "Десерты",
        href: "/recipes/desserts",
      },
    ],
  },
  {
    name: "Видеорецепты",
    href: "/videorecipes",
    img: "/images/sidebar/videorecipes.png",
    more: [],
  },
  {
    name: "Калькулятор калорий",
    href: "/calculator",
    img: "/images/sidebar/calculator.webp",
    more: [],
  },
  {
    name: "Главное о еде",
    href: "/about-food",
    img: "/images/sidebar/about-food.webp",
    more: [
      {
        name: "Всё о еде",
        href: "/about-food",
      },
      {
        name: "ЗОЖ",
        href: "/about-food/zozh",
      },
      {
        name: "Готовим детям",
        href: "/about-food/for-children",
      },
      {
        name: "Мужская кухня",
        href: "/about-food/men",
      },
      {
        name: "Про заготовки",
        href: "/about-food/recipes",
      },
    ],
  },
  {
    name: "Магазин",
    href: "https://5ka.ru",
    img: "/images/sidebar/shop.webp",
    more: [],
  },
  {
    name: "Кулинарные мастер-классы",
    href: "/academy",
    img: "/images/sidebar/academy.webp",
    more: [],
  },
];

export const CONST_TABS = [
  {
    name: "Профиль",
    href: "/profile",
  },
  {
    name: "Избранное",
    href: "/favorites",
  },
  {
    name: "Мои рецепты",
    href: "/recipes",
  },
];

export const CONST_SORT = [
  {
    value: "default",
    name: "По умолчанию",
  },
  {
    value: "new",
    name: "Новые материалы",
  },
  {
    value: "fast",
    name: "Быстрые рецепты",
  },
  {
    value: "easy",
    name: "Простые рецепты",
  },
  {
    value: "hard",
    name: "Сложные рецепты",
  },
];

export const CONST_FILTER = [
  {
    name: "Время приготовления",
    query: "time",
    filters: [
      {
        name: "До 15 минут",
        value: "up_to_15",
      },
      {
        name: "До 30 минут",
        value: "up_to_30",
      },
      {
        name: "До 45 минут",
        value: "up_to_45",
      },
      {
        name: "До часа",
        value: "up_to_hour",
      },
      {
        name: "Более часа",
        value: "more_than_hour",
      },
    ],
  },
  {
    name: "Калорийность на 100г.",
    query: "calories",
    filters: [
      {
        name: "До 200 ккал",
        value: "up_to_200",
      },
      {
        name: "200 - 400 ккал",
        value: "from_200_to_400",
      },
      {
        name: "400 - 600 ккал",
        value: "from_400_to_600",
      },
      {
        name: "600 - 800 ккал",
        value: "from_600_to_800",
      },
      {
        name: "Более 800 ккал",
        value: "more_800",
      },
    ],
  },
];
