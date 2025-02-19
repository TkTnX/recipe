export const CONST_CATEGORIES = [
  {
    id: 1,
    name: "Завтраки",
    href: "/recipes/breakfast",
    img: "/images/categories/breakfast.webp",
  },
  {
    id: 2,
    name: "Обед",
    href: "/recipes/lunch",
    img: "/images/categories/lunch.webp",
  },
  {
    id: 3,
    name: "Ужин",
    href: "/recipes/dinner",
    img: "/images/categories/dinner.webp",
  },
  {
    id: 4,
    name: "Здоровая еда",
    href: "/recipes/healthy",
    img: "/images/categories/healthy.webp",
  },
  {
    id: 5,
    name: "Закуски",
    href: "/recipes/snacks",
    img: "/images/categories/snacks.webp",
  },
  {
    id: 6,
    name: "Десерты",
    href: "/recipes/desserts",
    img: "/images/categories/desserts.webp",
  },
];

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

export const CONST_TYPE_OF_MEAL = [
  {
    value: "BREAKFAST",
    name: "Завтрак",
  },
  {
    value: "LUNCH",
    name: "Обед",
  },
  {
    value: "DINNER",
    name: "Ужин",
  },
  {
    value: "HEALTHY",
    name: "ЗОЖ",
  },
  {
    value: "SNACK",
    name: "Закуски",
  },
  {
    value: "DESSERTS",
    name: "Десерты",
  },
  {
    value: "OTHER",
    name: "Другое",
  },
];

export const CONST_UNITS = [
  {
    value: "g",
    name: "грамм",
  },
  {
    value: "ml",
    name: "мл",
  },
  {
    value: "tsp",
    name: "шт.",
  },
  {
    value: "cup",
    name: "стакан",
  },
  {
    value: "sm-spoon",
    name: "ч. ложка",
  },
  {
    value: "lg-spoon",
    name: "столовая ложка",
  },
];

// INGREDIENTS

export const CONST_INGREDIENTS = [
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/01.webp",
    name: "Яблоко",
    description: "Сочный и сладкий фрукт, богатый витаминами и клетчаткой.",
    calories: 52,
    proteins: 0.3,
    fats: 0.2,
    carbs: 14,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/02.webp",
    name: "Мука пшеничная",
    description: "Основной ингредиент для выпечки и приготовления теста.",
    calories: 364,
    proteins: 10.3,
    fats: 1,
    carbs: 76,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/03.webp",
    name: "Говядина",
    description:
      "Красное мясо, богато белком и железом, подходит для стейков и тушения.",
    calories: 250,
    proteins: 26,
    fats: 15,
    carbs: 0,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/04.webp",
    name: "Куриное филе",
    description: "Диетическое мясо с высоким содержанием белка.",
    calories: 165,
    proteins: 31,
    fats: 3.6,
    carbs: 0,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/05.webp",
    name: "Лосось",
    description: "Жирная рыба, богатая омега-3 жирными кислотами.",
    calories: 208,
    proteins: 20,
    fats: 13,
    carbs: 0,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/06.webp",
    name: "Молоко 3.2%",
    description: "Натуральный источник кальция и белка.",
    calories: 62,
    proteins: 3.2,
    fats: 3.5,
    carbs: 4.8,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/072.webp",
    name: "Сыр",
    description: "Молочный продукт с высоким содержанием белка и жиров.",
    calories: 350,
    proteins: 25,
    fats: 30,
    carbs: 2,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/08.webp",
    name: "Рис белый",
    description: "Основной источник углеводов, идеально подходит для гарниров.",
    calories: 130,
    proteins: 2.7,
    fats: 0.3,
    carbs: 28,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/09.webp",
    name: "Сливочное масло",
    description:
      "Жирный молочный продукт, используется для выпечки и приготовления блюд.",
    calories: 717,
    proteins: 0.9,
    fats: 81,
    carbs: 0.1,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/10.webp",
    name: "Оливковое масло",
    description:
      "Полезное растительное масло, богато мононенасыщенными жирами.",
    calories: 884,
    proteins: 0,
    fats: 100,
    carbs: 0,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/11.webp",
    name: "Помидор",
    description: "Свежий овощ с высоким содержанием витамина C.",
    calories: 18,
    proteins: 0.9,
    fats: 0.2,
    carbs: 3.9,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/12.webp",
    name: "Огурец",
    description: "Освежающий овощ с высоким содержанием воды.",
    calories: 16,
    proteins: 0.7,
    fats: 0.1,
    carbs: 3.6,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/13.webp",
    name: "Картофель",
    description: "Крахмалистый овощ, используется в различных блюдах.",
    calories: 77,
    proteins: 2,
    fats: 0.1,
    carbs: 17,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/14.webp",
    name: "Яйцо куриное",
    description: "Полноценный источник белка и жиров.",
    calories: 155,
    proteins: 13,
    fats: 11,
    carbs: 1.1,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/15.webp",
    name: "Лук репчатый",
    description: "Ароматный овощ, используется в кулинарии по всему миру.",
    calories: 40,
    proteins: 1.1,
    fats: 0.1,
    carbs: 9.3,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/16.webp",
    name: "Банан",
    description: "Сладкий фрукт с высоким содержанием углеводов и калия.",
    calories: 96,
    proteins: 1.3,
    fats: 0.3,
    carbs: 22.8,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/17.webp",
    name: "Клубника",
    description: "Ягода с приятным вкусом и богатым содержанием витамина C.",
    calories: 32,
    proteins: 0.7,
    fats: 0.3,
    carbs: 7.7,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/18.webp",
    name: "Черника",
    description: "Полезная ягода, содержащая антиоксиданты и витамины.",
    calories: 57,
    proteins: 0.7,
    fats: 0.3,
    carbs: 14.5,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/19.webp",
    name: "Мёд",
    description: "Натуральный подсластитель с антибактериальными свойствами.",
    calories: 304,
    proteins: 0.3,
    fats: 0,
    carbs: 82.4,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/20.webp",
    name: "Грецкий орех",
    description: "Орех с высоким содержанием полезных жиров и белка.",
    calories: 654,
    proteins: 15.2,
    fats: 65.2,
    carbs: 13.7,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/21.webp",
    name: "Чёрный шоколад",
    description: "Шоколад с высоким содержанием какао и антиоксидантов.",
    calories: 546,
    proteins: 4.9,
    fats: 31,
    carbs: 61,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/22.webp",
    name: "Фасоль",
    description: "Бобовое растение, богатое белком и клетчаткой.",
    calories: 333,
    proteins: 23,
    fats: 0.8,
    carbs: 60,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/23.webp",
    name: "Чечевица",
    description: "Бобовое растение с высоким содержанием растительного белка.",
    calories: 353,
    proteins: 25,
    fats: 1.1,
    carbs: 60,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/24.webp",
    name: "Нут",
    description: "Бобовое растение, основа хумуса и фалафеля.",
    calories: 364,
    proteins: 19,
    fats: 6,
    carbs: 61,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/25.webp",
    name: "Сахар",
    description: "Быстроусвояемый углевод, используемый в выпечке и напитках.",
    calories: 387,
    proteins: 0,
    fats: 0,
    carbs: 100,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/26.webp",
    name: "Соль",
    description: "Основная приправа, используемая для усиления вкуса.",
    calories: 0,
    proteins: 0,
    fats: 0,
    carbs: 0,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/27.webp",
    name: "Чёрный перец",
    description: "Пряность, придающая блюдам остроту и аромат.",
    calories: 251,
    proteins: 10,
    fats: 3,
    carbs: 64,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/28.webp",
    name: "Корица",
    description: "Пряность с тёплым ароматом, используется в десертах.",
    calories: 247,
    proteins: 4,
    fats: 1.2,
    carbs: 81,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/29.webp",
    name: "Чеснок",
    description: "Овощ с антибактериальными свойствами и ярким вкусом.",
    calories: 149,
    proteins: 6.4,
    fats: 0.5,
    carbs: 33,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/30.webp",
    name: "Имбирь",
    description: "Пряность с острым вкусом, используется в напитках и блюдах.",
    calories: 80,
    proteins: 1.8,
    fats: 0.8,
    carbs: 18,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/31.webp",
    name: "Грибы шампиньоны",
    description: "Грибы с мягким вкусом, используются в супах и соусах.",
    calories: 22,
    proteins: 3.1,
    fats: 0.3,
    carbs: 3.3,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/32.webp",
    name: "Брокколи",
    description: "Овощ с высоким содержанием клетчатки и витаминов.",
    calories: 55,
    proteins: 4,
    fats: 0.5,
    carbs: 11,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/33.webp",
    name: "Шпинат",
    description: "Листовой овощ, богатый железом и антиоксидантами.",
    calories: 23,
    proteins: 2.9,
    fats: 0.4,
    carbs: 3.6,
  },
  {
    imageUrl:
      "https://feicaiychlbqbgvbecmo.supabase.co/storage/v1/object/public/ingredients/34.webp",
    name: "Капуста",
    description: "Овощ, используемый в супах, салатах и тушёных блюдах.",
    calories: 25,
    proteins: 1.3,
    fats: 0.1,
    carbs: 6,
  },
];
