import Image from "next/image";
import Link from "next/link";
import RecipeFavoritesButton from "../Recipe/RecipeFavoritesButton";

const FavoritesEmpty = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-1 mt-8">
      <Image
        src={"/images/icons/noFavorites.svg"}
        width={150}
        height={150}
        alt="Нет избранных"
      />
      <h3 className="font-semibold text-3xl">Здесь нет ни одного избранного</h3>
      <p className="my-3 text-gray-500">
        Но вы всегда можете добавить их, нажав на кнопку
      </p>
      <Link href={`/recipes`}>
        <RecipeFavoritesButton favorites={0} itemId={""} type="recipe" />
      </Link>
    </div>
  );
}

export default FavoritesEmpty