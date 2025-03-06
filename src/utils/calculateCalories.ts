import { CONST_ACTIVITY_LEVELS } from "@/constants";
import { calculatorData } from "@/types";

export const calculateCaloriesBenedict = (data: calculatorData) => {
  let BMR = 0;
  const activityLevel = CONST_ACTIVITY_LEVELS.find(
    (activity) => activity.value === data.activity
  );

  if (!activityLevel) return null;

  if (data.gender === "male") {
    BMR =
      88.36 +
      13.4 * Number(data.weight) +
      4.8 * Number(data.length) -
      5.7 * Number(data.age);
  } else {
    BMR =
      447.6 +
      9.2 * Number(data.weight) +
      3.1 * Number(data.length) -
      4.3 * Number(data.age);
  }
  return BMR * activityLevel.num;
};
export const calculateCaloriesMifflin = (data: calculatorData) => {
  let BMR = 0;
  const activityLevel = CONST_ACTIVITY_LEVELS.find(
    (activity) => activity.value === data.activity
  );

  if (!activityLevel) return null;

  if (data.gender === "male") {
    BMR =
      10 * Number(data.weight) +
      6.25 * Number(data.length) -
      5 * Number(data.age) +
      5;
  } else {
    BMR =
      10 * Number(data.weight) +
      6.25 * Number(data.length) -
      5 * Number(data.age) -
      161;
  }

  return BMR * activityLevel.num;
};
