"use client";
import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import FormInput from "../ui/FormInput";
import { createIngredient } from "../../actions/ingredient-actions";
import { useActionState, useEffect, useState } from "react";
import { formActionInitialState } from "@/constants";


const NewCreateIngredient = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const [state, formAction, pending] = useActionState(
    createIngredient,
    formActionInitialState
  );

  useEffect(() => {
    if (state.success) setOpen(false);
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>
          Добавление продукта / <span className="font-light">ингредиента</span>
        </DialogTitle>
        <DialogDescription></DialogDescription>

        <form
          onSubmit={(e) => e.stopPropagation()}
          action={formAction}
          className="flex flex-col gap-4"
        >
          <FormInput
            disabled={pending}
            name="imageUrl"
            label="Изображение продукта"
            type="file"
          />
          <FormInput
            disabled={pending}
            name="name"
            label="Название продукта"
            type="text"
            placeholder="Например: яблоко"
            required
          />
          <FormInput
            disabled={pending}
            name="description"
            label="Описание продукта"
            type="text"
            placeholder="Например: красное яблоко"
            required
          />
          <div className="grid grid-cols-4 gap-2">
            <FormInput
              disabled={pending}
              name="calories"
              label="Калории"
              type="text"
              required
            />
            <FormInput
              disabled={pending}
              name="proteins"
              label="Белки"
              type="text"
              required
            />
            <FormInput
              disabled={pending}
              name="fats"
              label="Жиры"
              type="text"
              required
            />
            <FormInput
              disabled={pending}
              name="carbs"
              label="Углеводы"
              type="text"
              required
            />
            <FormInput
              disabled={pending}
              labelClassName="col-span-4 "
              className="text-black"
              name="weight"
              label="Вес в одной штуке (необязательно)"
              type="number"
            />
          </div>
          <button
            disabled={pending}
            type="submit"
            className="flex items-center gap-2 justify-center bg-primary  px-4 py-2 rounded-md hover:opacity-80 transition disabled:opacity-50"
          >
            Добавить <PlusCircle strokeWidth={1} />
          </button>
          {state.error && <p className="text-red-500">{state.error}</p>}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewCreateIngredient;
