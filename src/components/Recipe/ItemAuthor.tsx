import Image from "next/image";

type Props = {
  author: { username: string; avatarUrl: string | null };
};

const ItemAuthor = ({ author }: Props) => {
  return (
    <div className="flex items-center gap-2 mt-5">
      <Image
        src={author.avatarUrl || "/images/icons/avatar.webp"}
        alt={author.username}
        width={40}
        height={40}
        className="rounded-full object-cover"
      />
      <div className="text-xs font-light">
        <p>
          <span className="text-[#aaa]">Автор:</span> {author.username}
        </p>
        <p>кулинарный редактор Recipe.ru</p>
      </div>
    </div>
  );
};

export default ItemAuthor;
