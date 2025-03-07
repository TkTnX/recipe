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

const CalculatorModalIndex = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-[#f8f8f8] p-0 overflow-hidden">
        <div className="bg-white p-4">
          <DialogTitle className=" border-b-[#ff961b] border-b-4 pb-3 w-fit mx-auto text-2xl">
            Индекс массы тела
          </DialogTitle>
        </div>
        <div className="p-4">
          <p className="text-sm font-light mt-4">
            Индекс массы тела (ИМТ) разработал Адольф Кетле более 150 лет назад,
            методом пользуются до сих пор. Позволяет определить является ли
            масса тела нормальной, недостаточной или чрезмерной. Рассчитывается
            по формуле: вес (кг) / рост (см) в квадрате.
          </p>
          <ul className="text-sm font-light mt-4 list-disc list-inside">
            <li>ИМТ менее 18,5 — дефицит массы тела;</li>
            <li>ИМТ от 18,5 до 24,9 — нормальный вес;</li>
            <li>ИМТ от 25 до 30 — избыточный вес;</li>
            <li>ИМТ больше 30 — ожирение.</li>
          </ul>
          <p className="text-sm font-light mt-4">
            ИМТ является приблизительным показателем ожирения, так как он не
            позволяет точно определить, связан ли избыточный вес с увеличением
            мышечной массы или наличием жира, то есть не дает информации о
            составе тела.
          </p>
          <p className="text-sm font-light mt-4">
            Данный метод не будет корректен при оценке ожирения у беременных
            женщин, профессиональных спортсменов и при отечном синдроме. Но это
            достаточно точный способ оценить, является ли вес угрозой для
            здоровья в целом.
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

export default CalculatorModalIndex;
