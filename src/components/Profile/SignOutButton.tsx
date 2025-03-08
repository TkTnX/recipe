"use client";
import { signout } from "@/lib/supabase/actions";
import { userStore } from "@/stores/userStore";
import { LogOut} from "lucide-react";

const SignOutButton = () => {
  const fetchUser = userStore((state) => state.fetchUser);

  const onClick = async () => {
    signout();
    await fetchUser();
  };
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-[#aaa] hover:text-black transition font-light"
    >
      <LogOut strokeWidth={1} />
      Выйти
    </button>
  );
};

export default SignOutButton;
