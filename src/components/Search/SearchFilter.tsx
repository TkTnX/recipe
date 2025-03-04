"use client";
import { CONST_TYPES_OF_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchFilter = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const { replace } = useRouter();
  const pathname = usePathname();
  const [type, setType] = useState(params.get("type") || "");
  const onChange = (type: string) => {
    if (type === "") {
      params.delete("type");
      setType("");
    } else {
      params.set("type", type);
      setType(type);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-4">
      <h4 className="font-semibold text-xl">Тип материала</h4>
      <div className="flex items-center gap-3 mt-4">
        {CONST_TYPES_OF_ITEMS.map((item, index) => (
          <button
            className={cn(
              "text-sm py-2 px-4 rounded-2xl shadow-lg font-light transition",
              {
                "bg-primary": type === item.type,
              }
            )}
            onClick={() => onChange(item.type)}
            key={index}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
