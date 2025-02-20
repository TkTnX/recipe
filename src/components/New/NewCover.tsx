import { recipeStore } from "@/stores/recipeStore";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const NewCover = () => {
  const setData = recipeStore((state) => state.setData);
  const imageUrl = recipeStore((state) => state.data.imageUrl);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setData("imageUrl", file);
  };
  return (
    <label className="flex flex-col items-center border border-dashed rounded-lg p-6 mt-6 text-center cursor-pointer">
      {imageUrl.size && (
        <div className="relative w-full h-[360px] rounded-lg overflow-hidden  mb-10">
          <Image
            alt="Cover"
            src={URL.createObjectURL(imageUrl)}
            fill
            className="object-cover"
          />
        </div>
      )}
      <Image
        src={"/images/icons/cover.svg"}
        alt="Загрузить обложку"
        width={63}
        height={52}
      />
      <p className="text-xs text-[#aaa] mt-3">
        Выберите изображение на вашем устройстве
      </p>
      <p className="cursor-pointer flex text-xs vsm:text-base items-center gap-2 mt-3 bg-primary rounded-full px-4 py-2">
        Загрузить обложку рецепта <PlusCircle strokeWidth={1} />
        <input
          onChange={handleChange}
          name="imageUrl"
          type="file"
          className="hidden"
        />
      </p>
      <p className="text-xs text-[#aaa] mt-3">
        Пожалуйста, используйте только свои авторские фотографии. Допустимые
        форматы фотографий для загрузки: JPEG, JPG, PNG.
      </p>
    </label>
  );
};

export default NewCover;
