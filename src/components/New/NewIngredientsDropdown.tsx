import { Ingredient } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// TODO: Открытие списка ингредиентов
// TODO: Догрузить ингредиенты в seed
// TODO: Поиск по lowerCase, сейчас можно искать только с большой буквы (яблоко !== Яблоко)

// TODO: Возможность добавлять ингредиенты на сайт

const NewIngredientsDropdown = ({
  ingredients,
}: {
  ingredients: Ingredient[];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuContent>
        {ingredients.map((ingredient) => (
          <h1 key={ingredient.id}>{ingredient.name}</h1>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NewIngredientsDropdown;
