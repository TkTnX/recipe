import NewInformationInput from "./NewInformationInput";

const NewInformation = () => {
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
          />
          <NewInformationInput
            label="Описание рецепта"
            required
            placeholder="Расскажите, почему вы выбрали этот рецепт, каким будет готовое блюдо?"
          />
          <NewInformationInput
            label="Национальная кухня"
            placeholder="Например: русская или итальянская"
          />
          <NewInformationInput
            label="Время готовки (в минутах)"
            required
            placeholder="Например: 45"
          />
        </div>
      </>
    );
};

export default NewInformation;
