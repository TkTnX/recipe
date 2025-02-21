export type FilterType = { query: string; value: string | null };

export const getInitialFilters = (
  searchParams: URLSearchParams
): FilterType[] => [
  { query: "time", value: searchParams.get("time") ?? null },
  { query: "calories", value: searchParams.get("calories") ?? null },
  { query: "typeOfMeal", value: searchParams.get("typeOfMeal") ?? null },
];

export const updateFilterValue = (
  filters: FilterType[],
  query: string,
  value: string
): FilterType[] => {
  return filters.map((filter) =>
    filter.query === query ? { ...filter, value } : filter
  );
};

export const updateURLWithFilters = (
  filters: FilterType[],
  pathname: string,
  replace: (url: string) => void
) => {
  const params = new URLSearchParams();
  filters.forEach((filter) => {
    if (filter.value) params.set(filter.query, filter.value);
  });
  replace(`${pathname}?${params.toString()}`);
};
