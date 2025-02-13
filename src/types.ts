import { User } from "@prisma/client";

export type CategoryType = {
  id: number;
  name: string;
  href: string;
  img: string;
};

export type UserType = Omit<User, "password">;
