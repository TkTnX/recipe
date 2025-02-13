"use client";
import { login, signup } from "@/lib/supabase/actions";
import { Input } from "../ui/input";
import { useState } from "react";

const AuthForm = ({ type }: { type: "login" | "signup" }) => {
  const [error, setError] = useState<null | string>(null);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const errorMessage = await (type === "login"
      ? login(formData)
      : signup(formData));

    if (errorMessage) {
      setError(errorMessage);
    }
  };

  return (
    <form className="flex flex-col gap-2 mt-10" onSubmit={onSubmit}>
      {type === "signup" && (
        <>
          <label htmlFor="name">Имя:</label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ваше имя..."
          />
        </>
      )}
      <label htmlFor="email">Почта:</label>
      <Input
        id="email"
        name="email"
        type="email"
        required
        placeholder="Ваша почта..."
      />
      <label htmlFor="password">Пароль:</label>
      <Input
        id="password"
        name="password"
        type="password"
        required
        placeholder="Ваш пароль..."
        autoComplete="current-password"
      />
      <button
        type="submit"
        className="bg-primary px-2 py-2 rounded-xl hover:opacity-80 transition"
      >
        {type === "login" ? "Войти" : "Зарегистрироваться"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default AuthForm;
