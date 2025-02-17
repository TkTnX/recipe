import { ChefHat } from "lucide-react";

export const getDifficultyHats = (item: string) => {
  const greyHats = [...new Array(5 - Number(item))].map((_, i) => (
    <ChefHat key={i} color="#aaa" size={18} />
  ));

  const yellowHats = [...new Array(Number(item))].map((_, i) => (
    <ChefHat key={i} color="#ffde00" size={18} />
  ));

  return {
    greyHats,
    yellowHats,
  };
};
