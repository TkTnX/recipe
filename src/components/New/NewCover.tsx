import { PlusCircle } from "lucide-react";
import Image from "next/image";

const NewCover = () => {
  return (
    <div className="flex flex-col items-center border border-dashed rounded-lg p-6 mt-6 text-center cursor-pointer">
      <Image
        src={"/images/icons/cover.svg"}
        alt="Загрузить обложку"
        width={63}
        height={52}
      />
      <p className="text-xs text-[#aaa] mt-3">
        Выберите изображение на вашем устройстве
      </p>
      <button className="flex items-center gap-2 mt-3 bg-primary rounded-full px-4 py-2">
        Загрузить обложку рецепта <PlusCircle strokeWidth={1} />
      </button>
      <p className="text-xs text-[#aaa] mt-3">
        Пожалуйста, используйте только свои авторские фотографии. Допустимые
        форматы фотографий для загрузки: JPEG, JPG, PNG.
      </p>
    </div>
  );
};

export default NewCover;
