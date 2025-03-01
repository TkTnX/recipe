import { ingredientsStore } from "@/stores/ingredientsStore";
import { DotSquareIcon } from "lucide-react";

const NewAddedIngredients = () => {
  const addedIngerdients = ingredientsStore((state) => state.addedIngredients);

  return (
    <div className="flex flex-col gap-2">
      {addedIngerdients.map((ingredient) => (
        <div
          className="flex items-center justify-between gap-2 border-b border-dashed border-[#aaa] pb-2 "
          key={ingredient.id}
        >
          <div className="flex items-center gap-2">
            <DotSquareIcon size={16} strokeWidth={1} />
            <p>{ingredient.name}</p>
          </div>
          <p>{ingredient.unit}</p>
        </div>
      ))}
    </div>
  );
};

export default NewAddedIngredients;
