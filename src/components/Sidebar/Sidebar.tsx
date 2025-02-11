import { CONST_SIDEBAR } from "@/constants";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="hidden lg:block h-full w-64 z-50 ">
      <div className="fixed top-[calc(64px+20px)] flex flex-col gap-4 -tracking-tighter">
        {CONST_SIDEBAR.map((item) => (
          <div key={item.href} className="flex items-center justify-between">
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
              <button>
                <ChevronDown
                  color="#bfbdbd"
                  className="hover:stroke-black transition drop-shadow rounded-full bg-white"
                />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
