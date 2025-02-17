import { CirclePlus } from "lucide-react";
import NewInformationInput from "./NewInformationInput";

const NewStep = ({ step }: { step: number }) => {
  return (
    <div className="flex gap-6 flex-col  border rounded-lg p-3 sm:p-6 mt-4 ">
      <p className="text-xl font-semibold tracking-wider">ШАГ №{step}</p>
      <button className="flex items-center gap-2 mt-4 border rounded-full px-4 py-2 w-fit border-black font-light text-sm">
        Загрузить фото <CirclePlus strokeWidth={1} />
      </button>
      <NewInformationInput
        label="Описание шага"
        required
        name={`step${step}Description`}
        className="mt-3"
        placeholder="Например, «Почистите овощи, вскипятите воду»"
      />
    </div>
  );
};

export default NewStep;
