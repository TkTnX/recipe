"use client";
import { CONST_TABS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileTabs = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center w-full gap-4  border-b-2 border-[#aaa] overflow-x-auto scrollbar ">
      {CONST_TABS.map((tab, index) => (
        <Link
          className={cn(" pb-2", {
            "font-medium border-b-2 border-primary text-nowrap":
              pathname === tab.href,
          })}
          href={tab.href}
          key={index}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default ProfileTabs;
