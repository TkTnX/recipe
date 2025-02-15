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

import { useRecipes } from "@/hooks/useRecipes";

// * TODO: Упростить и уменьшить код фильтрации
// * TODO: Как-нибудь облегчить читаемость кода
// * TODO: В фильтрации возможность добавлять продукты

const RecipesFiltersModal = ({ children }: { children: React.ReactNode }) => {
  const {
    open,
    setOpen,
    handleChangeFilter,
    handleSubmit,
    handleReset,
    selectedFilters,
  } = useRecipes();

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
        <DialogFooter className="fixed bottom-0 left-0 right-0 bg-white p-4 flex flex-row items-center gap-4 sm:gap-0">
          <button
            onClick={handleReset}
            className="text-center py-2 px-4 rounded border border-black hover:opacity-80 transition text-sm tracking-wider font-medium"
          >
            СБРОСИТЬ ({selectedFilters.filter((item) => item.value).length})
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
