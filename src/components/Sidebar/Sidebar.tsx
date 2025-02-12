"use client";
import { CONST_SIDEBAR } from "@/constants";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SidebarMore from "./SidebarMore";
import { cn } from "@/lib/utils";

// TODO: Сделать auth на NextAuth

const Sidebar = ({ isSmall = false }: { isSmall?: boolean }) => {
  const [openMore, setOpenMore] = useState<number | null>(null);

  return (
    <div
      className={cn("hidden lg:block h-full w-64 z-50 overflow-hidden", {
        "block lg:hidden w-full md:w-64 ": isSmall,
      })}
    >
      <div
        className={cn(
          "fixed top-[calc(64px+20px)] flex flex-col gap-4 -tracking-tighter h-[calc(100vh-80px)] w-full md:w-auto overflow-y-auto scrollbar",
          { "static ": isSmall }
        )}
      >
        {CONST_SIDEBAR.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                className="flex items-center gap-2 font-bold "
              >
                <Image
                  src={item.img}
                  width={40}
                  height={40}
                  alt={item.name}
                  className="rounded-md"
                />
                {item.name}
              </Link>
              {item.more.length > 0 && (
                <button
                  onClick={() => setOpenMore(index === openMore ? null : index)}
                >
                  <ChevronDown
                    color="#bfbdbd"
                    className={`hover:stroke-black transition drop-shadow rounded-full  bg-white ${
                      index === openMore ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
            {openMore === index && <SidebarMore more={item.more} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
