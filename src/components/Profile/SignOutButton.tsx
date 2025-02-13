"use client";
import { signout } from "@/lib/supabase/actions";
import { X } from "lucide-react";

const SignOutButton = () => {
  return (
    <button
      onClick={signout}
      className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:opacity-80 transition"
    >
      <X />
      Выйти из аккаунта
    </button>
  );
};

export default SignOutButton;
