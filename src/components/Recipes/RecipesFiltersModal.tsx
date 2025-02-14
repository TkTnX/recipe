import { CONST_FILTER } from "@/constants";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

// TODO: Вывод рецептов
// TODO: Сортировка рецептов
// TODO: Как-нибудь облегчить читаемость кода

type FilterType = { query: string; value: string | null };

const RecipesFiltersModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();

  const FilterState = [
    {
      query: "time",
      value: searchParams.get("time") ?? null,
    },
    {
      query: "calories",
      value: searchParams.get("calories") ?? null,
    },
  ];

  const [selectedFilters, setSelectedFilters] =
    useState<FilterType[]>(FilterState);
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangeFilter = (query: string, value: string) => {
    setSelectedFilters((prev) =>
      prev.map((item) => {
        if (item.query === query) {
          return { ...item, value: value };
        }
        return item;
      })
    );
  };

  const handleSubmit = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("time", selectedFilters[0].value ?? "");
    params.set("calories", selectedFilters[1].value ?? "");
    replace(`${pathname}?${params.toString()}`);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-[#f8f8f8]">
        <DialogHeader>
          <DialogTitle className="text-center shadow-md pb-2">
            ФИЛЬТРЫ
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-8 pt-5 pb-20 max-h-96 overflow-y-auto scrollbar">
          {CONST_FILTER.map((item, index) => (
            <div key={index}>
              <h4>{item.name}</h4>
              <div className="flex gap-x-2 gap-y-4 flex-wrap mt-2">
                {item.filters.map((filter) => (
                  <button
                    onClick={() => handleChangeFilter(item.query, filter.value)}
                    key={filter.value}
                    className={cn(
                      "rounded-full px-4 py-2 bg-white shadow-lg transition",
                      {
                        "bg-primary":
                          selectedFilters[index].value === filter.value,
                      }
                    )}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <DialogFooter className="fixed bottom-0 left-0 right-0 bg-white p-4 flex items-center">
          <button className="text-center py-2 px-4 rounded border border-black hover:opacity-80 transition text-sm tracking-wider font-medium">
            СБРОСИТЬ
          </button>
          <button
            onClick={handleSubmit}
            className="text-center py-2 px-4 rounded bg-primary hover:opacity-80 transition text-sm tracking-wider font-medium"
          >
            НАЙТИ
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RecipesFiltersModal;
