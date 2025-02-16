import { CONST_TYPE_OF_MEAL } from "@/constants";
import { TYPE_OF_MEAL } from "@/types";

export const getTypeOfMeal = (meal: TYPE_OF_MEAL) => {
  return CONST_TYPE_OF_MEAL.find((item) => item.value === meal)?.name || "";
};
