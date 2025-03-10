import {
  Comment,
  Recipe,
  RecipeIngredient,
  RecipeStep,
  User,
} from "@/prisma/generated/client";

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
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
};

export type CommentType = Omit<Comment, "author"> & {
  author: {
    username: string;
    avatarUrl: string | null;
  };
};

export enum TYPE_OF_MEAL {
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  DINNER = "DINNER",
  SNACK = "SNACK",
  DESSERT = "DESSERT",
  HEALTHY = "HEALTHY",
  OTHER = "OTHER",
}

export type CreateStep = {
  id: number;
  imageUrl: File | null;
  description: string;
};

export type quantityObjType = {
  value: string;
  name: string;
  gramms: number | null;
};

export enum Type {
  RECIPE = "RECIPE",
  INGREDIENT = "INGREDIENT",
  ARTICLE = "ARTICLE",
}

export type createArticleInputs = {
  title: string | null;
  text: string | null;
};

export type formActionInitialType = {
  success: boolean;
  error: string;
  id?: null | string;
};

export type calculatorData = {
  gender: "male" | "female";
  activity: "veryLow" | "low" | "medium" | "high" | "veryHigh";
  goal: "lose" | "maintain" | "gain";
  type: "benedict" | "mifflin";
  age: null | string;
  length: null | string;
  weight: null | string;
};
