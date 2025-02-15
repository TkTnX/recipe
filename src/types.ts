import { Ingredient, Recipe, RecipeStep, User } from "@prisma/client";

export type CategoryType = {
  id: number;
  name: string;
  href: string;
  img: string;
};

export type UserType = Omit<User, "password">;

export type RecipeType = Omit<Recipe, "author"> & {
  author: {
    username: string;
    bio: string | null;
    avatarUrl: string | null;
  };
  ingredients: Ingredient[];
  steps: RecipeStep[];
};
