import { Slider } from "../ui/slider";
import { CalculatorTitle } from "./index";
import { CONST_ACTIVITY_LEVELS } from "@/constants";
import { calculatorStore } from "@/stores/calculatorStore";

const ChooseActivity = () => {
  const { data, setData } = calculatorStore();

  const activityObj = CONST_ACTIVITY_LEVELS.find(
    (item) => item.value === data.activity
  );

  const handleChange = (value: number[]) => {
    const index = value[0];
    setData("activity", CONST_ACTIVITY_LEVELS[index].value);
  };
  return (
    <div>
      <CalculatorTitle title="Дневная активность" />
      <Slider
        min={0}
        max={CONST_ACTIVITY_LEVELS.length - 1}
        step={1}
        defaultValue={[1]}
        onValueChange={handleChange}
        className="mt-4"
      />
      <div className="text-sm font-light mt-4">
        <h4 className="font-normal">{activityObj?.name}</h4>
        <p className="text-[#8d8d8d] mt-2">{activityObj?.desc}</p>
      </div>
    </div>
  );
};

export default ChooseActivity;
