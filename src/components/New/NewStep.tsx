import { CirclePlus, Trash2 } from "lucide-react";
import NewInformationInput from "./NewInformationInput";
import { useState } from "react";
import { recipeStore } from "@/stores/recipeStore";

type Props = {
  stepId: number;
  onDeleteStep: (step: number) => void;
  step: number;
};

const NewStep = ({ stepId, onDeleteStep, step }: Props) => {
  const setData = recipeStore((state) => state.setData);
  const editStep = recipeStore((state) => state.editStep);
  const steps = recipeStore((state) => state.steps);

  const [value, setValue] = useState("");
  const [imageFile, setImageFile] = useState<null | File>(null);
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    editStep(stepId, {
      id: stepId,
      description: newValue,
      imageUrl: imageFile,
    });

    setData("steps", steps);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);

    editStep(stepId, {
      id: stepId,
      description: value, 
      imageUrl: file,
    });

    setData("steps", steps);
  };

  return (
    <div className="flex gap-6 flex-col  border rounded-lg p-3 sm:p-6 mt-4 ">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold tracking-wider">ШАГ №{step}</p>
        {stepId >= 4 && (
          <button
            onClick={() => onDeleteStep(stepId)}
            className="flex items-center gap-2 mt-4 border rounded-full px-4 py-2 w-fit border-black font-light text-sm"
            type="button"
          >
            Удалить шаг <Trash2 strokeWidth={1} size={16} />
          </button>
        )}
      </div>
      <div>
        <label className="flex items-center gap-2 mt-4 border rounded-full px-4 py-2 w-fit border-black font-light text-sm">
          Загрузить фото <CirclePlus strokeWidth={1} />
          <input
            name={`step${step}Image`}
            type="file"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
        <NewInformationInput
          value={value}
          onChange={handleTextChange}
          label="Описание шага"
          required
          name={`step${step}Description`}
          className="mt-3"
          placeholder="Например, «Почистите овощи, вскипятите воду»"
        />
      </div>
    </div>
  );
};

export default NewStep;
