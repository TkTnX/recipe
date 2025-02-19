import { Ingredient } from "@prisma/client";
import Image from "next/image";

// * TODO: Открытие списка ингредиентов
// * TODO: Догрузить ингредиенты в seed
// * TODO: Поиск по lowerCase, сейчас можно искать только с большой буквы (яблоко !== Яблоко)

// * TODO: Возможность добавлять ингредиенты на сайт

type Props = {
  ingredients: Ingredient[];
};

const NewIngredientsDropdown = ({ ingredients }: Props) => {
  return (
    <div className="absolute top-12 left-0 right-0 bg-white border rounded-lg border-primary flex flex-col items-start overflow-y-auto max-h-72 z-10">
      {ingredients.length > 0 ? (
        ingredients.map((ingredient) => (
          <button
            type="button"
            key={ingredient.id}
            className="p-3 hover:bg-[#f5f5f5] w-full text-left flex items-center gap-2"
          >
            {ingredient.name}
          </button>
        ))
      ) : (
        <p className="text-center p-3 w-full text-gray-500">
          Ничего не найдено
        </p>
      )}
    </div>
  );
};

export default NewIngredientsDropdown;
