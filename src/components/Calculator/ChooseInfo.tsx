import FormInput from "../ui/FormInput";
import { CalculatorTitle, ChooseButton } from "./index";
import { calculatorStore } from "@/stores/calculatorStore";
const ChooseInfo = () => {
  const { data, setData } = calculatorStore();
  return (
    <div>
      <CalculatorTitle title="Общая информация" />
      <div className="flex items-center gap-2 mt-4">
        <ChooseButton
          state={data.gender}
          value={"female"}
          onClick={() => setData("gender", "female")}
        >
          Женщина
        </ChooseButton>
        <ChooseButton
          state={data.gender}
          value={"male"}
          onClick={() => setData("gender", "male")}
        >
          Мужчина
        </ChooseButton>
      </div>
      <div className="mt-4 flex items-center gap-2 flex-wrap sm:flex-nowrap">
        <FormInput
          name="age"
          label="Возраст, лет"
          placeholder="0"
          required
          type="number"
          onChange={(e) => setData("age", e.target.value)}
          max={100}
        />
        <FormInput
          name="length"
          label="Рост, см"
          placeholder="0"
          required
          type="number"
          onChange={(e) => setData("length", e.target.value)}
          max={250}
          min={100}
        />
        <FormInput
          name="weight"
          label="Вес, кг"
          placeholder="0"
          required
          type="number"
          onChange={(e) => setData("weight", e.target.value)}
          min={20}
          max={350}
        />
      </div>
    </div>
  );
};

export default ChooseInfo;
