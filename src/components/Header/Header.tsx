import { Heart, Menu, PlusCircle, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";
import HeaderMenu from "./HeaderMenu";
import { getUser } from "@/lib/supabase/get-user";

const Header = async () => {
  const { user } = await getUser();
  return (
    <header className="fixed top-0 left-0 right-0 h-14 md:h-16 bg-white drop-shadow z-50">
      <div className="max-w-[1176px] mx-auto px-3 flex items-center gap-3 lg:gap-6 h-full">
        <HeaderMenu>
          <button className="block lg:hidden">
            <Menu />
          </button>
        </HeaderMenu>

        <Link href={"/"} className="block">
          <Image
            src="/images/icon.svg"
            width={50}
            height={50}
            alt="Logo"
            className="w-10 lg:w-[50px] h-10 lg:h-[50px]"
          />
        </Link>
        <Link
          href="/new"
          className="flex items-center gap-2 px-2 lg:px-4 py-2 rounded-full border border-black text-sm hover:bg-primary hover:border-primary transition"
        >
          <span className="hidden lg:block">Отправить рецепт</span>{" "}
          <PlusCircle strokeWidth={1} size={20} />
        </Link>

        <HeaderSearch />

        <div className="flex items-center gap-2 ml-auto">
          <Link href={"/favorites"}>
            <Heart strokeWidth={1} />
          </Link>
          {/* USER AVATAR */}
          {user ? (
            <Link href={`/profile/${user.supabaseAuthId}`}>
              <Image
                alt={user.id}
                src={"/images/icons/avatar.webp"}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </Link>
          ) : (
            <Link href={"/login"}>
              <User strokeWidth={1} />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
