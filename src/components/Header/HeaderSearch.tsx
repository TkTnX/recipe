"use client";
import { cn } from "@/lib/utils";
import { Search, Settings2Icon } from "lucide-react";
import Link from "next/link";
import Button from "../ui/buttons/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SearchSubmit } from "@/lib/recipe";

type Props = {
  className?: string;
  isRecipes?: boolean;
};

const HeaderSearch = ({ className, isRecipes = false }: Props) => {
  const { replace } = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => SearchSubmit(e, replace)

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex items-center gap-2 flex-1 max-w-lg flex-row-reverse md:flex-row mx-auto ",
        className,
        { "flex-row  w-full max-w-[auto]  ": isRecipes }
      )}
    >
      <div
        className={cn(
          "hidden md:flex items-center gap-2 bg-[#f8f8f8] rounded-md flex-1",
          { "flex ": isRecipes }
        )}
      >
        <input
          className="bg-inherit p-2 outline-none flex-1 placeholder:font-thin"
          type="text"
          placeholder="Поиск по рецептам и материалам "
          name="search"
        />
        {!isRecipes && (
          <Link href={"/search"} className="pr-2">
            <Settings2Icon color="#8e8b8c" />
          </Link>
        )}
      </div>
      <Button
        type="submit"
        className={cn(
          "w-10 h-10 p-0 flex items-center justify-center  rounded-md md:bg-primary bg-inherit",
          { "w-auto hover:opacity-80 px-2": isRecipes }
        )}
      >
        {isRecipes ? "НАЙТИ" : <Search strokeWidth={1} />}
      </Button>
    </form>
  );
};

export default HeaderSearch;
