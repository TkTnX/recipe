"use client";
import { useState } from "react";
import Button from "../ui/buttons/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const RecipesListMore = () => {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const params = new URLSearchParams(searchParams.toString());
  const { replace } = useRouter();
  const pathname = usePathname();
  const onClick = () => {
    setPage(String(Number(page) + 1));
    params.set("page", String(Number(page) + 1));
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <Button
      className="uppercase rounded-sm mx-auto px-2 py-3"
      onClick={onClick}
    >
      ПРИГОТОВИТЬ ЕЩЁ
    </Button>
  );
};

export default RecipesListMore;
