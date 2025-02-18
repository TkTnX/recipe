import { recipeStore } from "@/stores/recipeStore";
import NewInformationInput from "./NewInformationInput";

const NewInformation = () => {
  const setData = recipeStore((state) => state.setData);

  return (
    <>
      <h2 className="text-xl tracking-wider font-semibold uppercase mt-10">
        Параметры блюда
      </h2>

      <div className="flex gap-6 flex-col  border rounded-lg p-6 mt-4 ">
        <NewInformationInput
          
          label="Название рецепта"
          required
          placeholder="Например: Торт «Наполеон»"
          name="title"
          onChange={(e) => setData("title", e.target.value)}
        />
        <NewInformationInput
          
          label="Описание рецепта"
          required
          placeholder="Расскажите, почему вы выбрали этот рецепт, каким будет готовое блюдо?"
          name="description"
          onChange={(e) => setData("description", e.target.value)}
        />
        <NewInformationInput
          
          label="Национальная кухня"
          placeholder="Например: русская или итальянская"
          name="kitchen"
          onChange={(e) => setData("kitchen", e.target.value)}
        />
        <NewInformationInput
          label="Время готовки (в минутах)"
          required
          placeholder="Например: 45"
          name="cookingTime"
          onChange={(e) => setData("cookingTime", e.target.value)}
        />
      </div>
    </>
  );
};

export default NewInformation;
