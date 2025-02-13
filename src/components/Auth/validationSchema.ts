import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string({ message: "Введите почту" }).email(),
  password: z
    .string({ message: "Минимальная длина пароля - 6 символов" })
    .min(6),
});

export const registerValidationSchema = z.object({
  email: z.string({ message: "Введите почту" }).email(),
  password: z
    .string({ message: "Минимальная длина пароля - 6 символов" })
    .min(6),
  name: z.string({ message: "Введите ваше имя" }),
});
