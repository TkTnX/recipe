import {
  FilterType,
  getInitialFilters,
  updateFilterValue,
  updateURLWithFilters,
} from "@/utils/filters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const useRecipes = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState<FilterType[]>(
    getInitialFilters(searchParams)
  );

  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams.toString());
  const handleChangeFilter = (query: string, value: string) => {
    setSelectedFilters((prev) => updateFilterValue(prev, query, value));
  };

  const handleSubmit = () => {
    updateURLWithFilters(selectedFilters, pathname, replace);
    setOpen(false);
  };

  const handleReset = () => {
    setSelectedFilters(getInitialFilters(new URLSearchParams()));
    replace(pathname);
    setOpen(false);
  };

  return {
    handleChangeFilter,
    handleSubmit,
    handleReset,
    open,
    setOpen,
    selectedFilters,
  };
};
