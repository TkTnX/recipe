import { cn } from "@/lib/utils";
import { Search, Settings2Icon } from "lucide-react";
import Link from "next/link";

const HeaderSearch = ({
  className,
  isRecipes = false,
}: {
  className?: string;
  isRecipes?: boolean;
}) => {
  return (
    <form
      className={cn(
        "flex items-center gap-2 flex-1 max-w-lg flex-row-reverse md:flex-row mx-auto",
        className
      )}
    >
      <div className="hidden md:flex items-center gap-2 bg-[#f8f8f8] rounded-md flex-1">
        <input
          className="bg-inherit p-2 outline-none flex-1 placeholder:font-thin"
          type="text"
          placeholder="Поиск по рецептам и материалам "
        />
        {!isRecipes && (
          <Link href={"/search"} className="pr-2">
            <Settings2Icon color="#8e8b8c" />
          </Link>
        )}
      </div>
      <button
        className={cn(
          "md:bg-primary w-10 h-10 flex items-center justify-center rounded-md transition",
          {
            "w-auto px-4 hover:opacity-80": isRecipes,
          }
        )}
        type="submit"
      >
        {isRecipes ? "НАЙТИ" : <Search strokeWidth={1} />}
      </button>
    </form>
  );
};

export default HeaderSearch;
