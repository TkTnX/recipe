"use client";
import { useState } from "react";
import Button from "../ui/buttons/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const CalculatorModalNorm = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-[#f8f8f8] p-0 overflow-hidden">
        <div className="bg-white p-4">
          <DialogTitle className=" border-b-[#ff961b] border-b-4 pb-3 w-fit mx-auto text-2xl">
            Суточная норма калорий
          </DialogTitle>
        </div>
        <div className="p-4">
          <p className="text-sm font-light mt-4">
            Суточная норма калорий — это количественное значение энергии,
            необходимой для поддержания обмена веществ и нормального
            функционирования организма в течение суток.
          </p>
          <p className="text-sm font-light mt-4">
            Значение может различаться в зависимости от возраста, пола, роста,
            веса, физической активности и других индивидуальных факторов,
            поэтому для каждого человека необходимо определить свою суточную
            норму калорий, чтобы поддерживать здоровье и достигать нужных целей,
            например, похудения или набора мышечной массы.
          </p>
        </div>
        <DialogFooter className="pb-2 px-3">
          <Button
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-lg"
          >
            ОК
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CalculatorModalNorm;
