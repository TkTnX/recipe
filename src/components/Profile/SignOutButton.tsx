"use client";
import { signout } from "@/lib/supabase/actions";
import { LogOut, X } from "lucide-react";

const SignOutButton = () => {
  return (
    <button
      onClick={signout}
      className="flex items-center gap-2 text-[#aaa] hover:text-black transition font-light"
    >
      <LogOut strokeWidth={1} />
      Выйти
    </button>
  );
};

export default SignOutButton;
