"use client";
import { SearchSubmit } from "@/lib/recipe";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "../ui/buttons/button";

const HeroSearch = () => {
  const { replace } = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    SearchSubmit(e, replace);
  return (
    <form
      onSubmit={onSubmit}
      className="  flex items-center gap-2 bg-white overflow-hidden   pl-4 pr-2 rounded-full w-full "
    >
      <Search className="hidden sm:block" strokeWidth={1} />
      <input
        name="search"
        placeholder="Что вы хотите приготовить сегодня?"
        className="py-4 sm:px-4 flex-1 outline-none"
      />

      <Button className="px-2 py-2 text-base rounded-2xl font-light normal-case">
        Найти
      </Button>
    </form>
  );
};

export default HeroSearch;
