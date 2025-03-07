import { CONST_FILTER } from "@/constants";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import { cn } from "@/lib/utils";

import RecipeFiltersIngredients from "./RecipeFiltersIngredients";
import Button from "../ui/buttons/button";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const RecipesFiltersModal = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const pathname = usePathname();
  const { replace } = useRouter();
  const [ingIds, setIngIds] = useState<string[]>(
    searchParams.getAll("ingIds")[0]?.split(",") || []
  );

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    time: searchParams.get("time") || "",
    calories: searchParams.get("calories") || "",
    typeOfMeal: searchParams.get("typeOfMeal") || "",
    ingIds: searchParams.get("ingIds") || "",
  });

  const onSubmit = () => {
    if (data.time) params.set("time", data.time);
    if (data.typeOfMeal) params.set("typeOfMeal", data.typeOfMeal);
    if (data.calories) params.set("calories", data.calories);

    if (ingIds.length > 0) {
      params.set("ingIds", ingIds.join(","));
    }

    replace(`${pathname}?${params.toString()}`);
    setOpen(false);
  };

  const onClear = () => {
    setData({ time: "", typeOfMeal: "", calories: "", ingIds: "" });
    params.delete("time");
    params.delete("typeOfMeal");
    params.delete("calories");
    params.delete("ingIds");
    replace(`${pathname}?${params.toString()}`);
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-[#f8f8f8] h-full vsm:h-auto">
        <DialogHeader>
          <DialogTitle className="text-center shadow-md pb-2">
            ФИЛЬТРЫ
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-8 pt-5 pb-20 sm:max-h-96 overflow-y-auto scrollbar">
          {CONST_FILTER.map((item, index) => (
            <div key={index}>
              <h4>{item.name}</h4>
              <div className="flex gap-x-2 gap-y-4 flex-wrap mt-2">
                {item.filters.map((filter) => (
                  <button
                    onClick={() =>
                      setData({ ...data, [item.query]: filter.value })
                    }
                    key={filter.value}
                    className={cn(
                      "rounded-full px-4 py-2 bg-white shadow-lg transition",
                      {
                        "bg-primary":
                          data[item.query as keyof typeof data] ===
                            filter.value && "bg-[#24bd3c] text-white",
                      }
                    )}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <RecipeFiltersIngredients setIngIds={setIngIds} ingIds={ingIds} />
        </div>

        <DialogFooter className="fixed bottom-0 left-0 right-0 bg-white p-4 flex flex-row items-center gap-4 sm:gap-0">
          <Button
            onClick={onClear}
            className="py-2 px-4 rounded border text-sm border-black bg-inherit"
          >
            СБРОСИТЬ ({params.size})
          </Button>
          <Button onClick={onSubmit} className="text-sm py-2 px-4 rounded">
            НАЙТИ
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RecipesFiltersModal;
