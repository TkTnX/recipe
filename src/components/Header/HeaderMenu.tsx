import Sidebar from "../Sidebar/Sidebar";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

const HeaderMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full md:w-full pt-10 " side={"left"}>
        <SheetTitle />
        <Sidebar isSmall />
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMenu;
