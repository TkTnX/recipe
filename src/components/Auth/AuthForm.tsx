"use client";
import { login, signup } from "@/lib/supabase/actions";
import { Input } from "../ui/input";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const AuthForm = ({ type }: { type: "login" | "signup" }) => {
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError(null);
      setLoading(true);
      const formData = new FormData(e.currentTarget);

      const errorMessage = await (type === "login"
        ? login(formData)
        : signup(formData));

      if (errorMessage) {
        setError(errorMessage);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex flex-col gap-2 mt-10 disabled:opacity-50 transition "
      onSubmit={onSubmit}
    >
      {type === "signup" && (
        <>
          <label htmlFor="name">Имя:</label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ваше имя..."
            disabled={loading}
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
        disabled={loading}
      />
      <label htmlFor="password">Пароль:</label>
      <Input
        id="password"
        name="password"
        type="password"
        required
        placeholder="Ваш пароль..."
        autoComplete="current-password"
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-primary px-2 py-2 rounded-xl disabled:opacity-50 hover:opacity-80 transition flex  justify-center"
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="animate-spin" />
        ) : type === "login" ? (
          "Войти"
        ) : (
          "Зарегистрироваться"
        )}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default AuthForm;
