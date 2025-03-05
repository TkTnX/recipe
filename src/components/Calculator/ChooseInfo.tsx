import { useState } from "react";
import FormInput from "../ui/FormInput";
import { CalculatorTitle, ChooseButton } from "./index";
const ChooseInfo = () => {
  const [gender, setGender] = useState<"male" | "female">("male");
  return (
    <div>
      <CalculatorTitle title="Общая информация" />
      <div className="flex items-center gap-2 mt-4">
        <ChooseButton
          state={gender}
          value={"female"}
          onClick={() => setGender("female")}
        >
          Женщина
        </ChooseButton>
        <ChooseButton
          state={gender}
          value={"male"}
          onClick={() => setGender("male")}
        >
          Мужчина
        </ChooseButton>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <FormInput
          name="age"
          label="Возраст, лет"
          placeholder="0"
          required
          type="number"
        />
        <FormInput
          name="length"
          label="Рост, см"
          placeholder="0"
          required
          type="number"
        />
        <FormInput
          name="weight"
          label="Вес, кг"
          placeholder="0"
          required
          type="number"
        />
      </div>
    </div>
  );
};

export default ChooseInfo;
