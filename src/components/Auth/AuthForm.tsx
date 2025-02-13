"use client";
import { login, signup } from "@/lib/supabase/actions";
import { Input } from "../ui/input";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import FormInput from "../ui/FormInput";

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
          <FormInput
            id="name"
            name="name"
            label="Имя"
            loading={loading}
            placeholder="Ваше имя..."
            required
            type="text"
          />
        </>
      )}
      <FormInput
        id="email"
        name="email"
        label="Почта"
        loading={loading}
        placeholder="Ваша почта..."
        required
        type="email"
      />

      <FormInput
        id="password"
        name="password"
        label="Пароль"
        loading={loading}
        placeholder="Ваш пароль..."
        required
        type="password"
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
