"use client";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

const HeaderMenu = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full md:w-full pt-10 " side={"left"}>
        <SheetTitle />
        <Sidebar setOpen={setOpen} isSmall />
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMenu;
