import { useState } from "react";
import Button from "../ui/buttons/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CalculatorModalBenedict, CalculatorModalMifflin } from "./index";

const CalculatorModalInfo = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-[#f8f8f8] p-0 overflow-hidden">
        <div className="bg-white p-4">
          <DialogTitle className=" border-b-[#ff961b] border-b-4 pb-3 w-fit mx-auto text-2xl">
            Формулы расчёта калорий
          </DialogTitle>
        </div>
        <div className="p-4 max-h-[480px] overflow-y-auto scrollbar">
          <CalculatorModalBenedict />
          <CalculatorModalMifflin />
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

export default CalculatorModalInfo;
