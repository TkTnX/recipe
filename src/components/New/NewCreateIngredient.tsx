import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import FormInput from "../ui/FormInput";

// TODO: Оранжевую кнопку перенести в отдельный компонент

const NewCreateIngredient = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>
          Добавление продукта / <span className="font-light">ингредиента</span>
        </DialogTitle>
        <DialogDescription></DialogDescription>

        <form className="flex flex-col gap-4">
          <FormInput name="imageUrl" label="Изображение продукта" type="file" />
          <FormInput
            name="name"
            label="Название продукта"
            type="text"
            placeholder="Например: яблоко"
          />
          <FormInput
            name="description"
            label="Описание продукта"
            type="text"
            placeholder="Например: красное яблоко"
          />
          <div className="grid grid-cols-4 gap-2">
            <FormInput name="calories" label="Калории" type="number" />
            <FormInput name="proteins" label="Белки" type="number" />
            <FormInput name="fats" label="Жиры" type="number" />
            <FormInput name="carbs" label="Углеводы" type="number" />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 justify-center bg-primary  px-4 py-2 rounded-md hover:opacity-80 transition"
          >
            Добавить <PlusCircle strokeWidth={1} />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewCreateIngredient;
