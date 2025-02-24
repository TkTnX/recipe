import { deleteRecipe } from "@/actions/recipe-actions";
import { Trash2Icon } from "lucide-react";

const RecipeDeleteButton = ({ recipeId }: { recipeId: string }) => {
  return (
    <form action={deleteRecipe}>
      <input type="hidden" value={recipeId} name="id" />
      <button className="absolute right-3 top-3 z-10 bg-primary p-2 rounded-full">
        <Trash2Icon size={20} />
      </button>
    </form>
  );
};

export default RecipeDeleteButton;
