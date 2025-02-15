import { ArrowDownUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { CONST_SORT } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const RecipeSort = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const pathname = usePathname();
  const { replace } = useRouter();
  const onChange = (value: string) => {
    params.set("sort", value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      defaultValue={searchParams.get("sort") || "default"}
      onValueChange={onChange}
    >
      <SelectTrigger className=" justify-center md:w-fit flex items-center gap-2 rounded-full border-black outline-none">
        <ArrowDownUp strokeWidth={1} />
        СОРТИРОВКА
      </SelectTrigger>
      <SelectContent>
        {CONST_SORT.map((item, index) => (
          <SelectItem value={item.value} key={index}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default RecipeSort;
