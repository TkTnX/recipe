// Получение сортировки
export const getOrderBy = (sort: string) => {
  const sortOptions: Record<string, object> = {
    default: {},
    new: { createdAt: "desc" },
    fast: { cookingTime: "asc" },
    easy: { difficulty: "asc" },
    hard: { difficulty: "desc" },
  };

  return sortOptions[sort] || {};
};

// Получение фильтров по времени
export const getTimeFilter = (time: string | null) => {
  if (!time) return {};

  const timeFilters: Record<string, object> = {
    up_to_15: { lte: 15 },
    up_to_30: { lte: 30 },
    up_to_45: { lte: 45 },
    up_to_hour: { lte: 60 },
    more_than_hour: { gt: 60 },
  };

  return timeFilters[time] || {};
};

// Получение фильтров по калорийности
export const getCaloriesFilter = (calories: string | null) => {
  if (!calories) return {};

  const caloriesFilters: Record<string, object> = {
    up_to_200: { lte: 200 },
    from_200_to_400: { gte: 200, lte: 400 },
    from_400_to_600: { gte: 400, lte: 600 },
    from_600_to_800: { gte: 600, lte: 800 },
    more_800: { gte: 800 },
  };

  return caloriesFilters[calories] || {};
};
