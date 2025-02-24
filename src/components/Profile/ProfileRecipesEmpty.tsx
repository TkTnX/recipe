import Image from "next/image";
import ButtonLink from "../ui/buttons/buttonLink";

const ProfileRecipesEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 gap-5 text-center">
      <Image
        src="/images/icons/recipesEmpty.webp"
        width={150}
        height={150}
        alt="Нет рецептов"
      />
      <h4 className=" font-semibold text-xl">
        Здесь нет ни одного рецепта
      </h4>
      <p className="font-light">Присылайте свои рецепты чтобы по ним готовила вся страна!</p>
      <ButtonLink isAdd href="/new">
        Отправить рецепт
      </ButtonLink>
    </div>
  );
};

export default ProfileRecipesEmpty;
