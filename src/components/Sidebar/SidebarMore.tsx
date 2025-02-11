import Link from "next/link";

const SidebarMore = ({ more }: { more: { name: string; href: string }[] }) => {
  return (
    <div className="flex flex-col gap-2 ">
      {more.map((item, index) => (
        <Link
          className="text-sm font-light hover:bg-[#e9f8eb] p-2 pl-12 rounded-md"
          key={index}
          href={item.href}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SidebarMore;
