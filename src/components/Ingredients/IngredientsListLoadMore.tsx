import Button from "../ui/buttons/button";

const IngredientsListLoadMore = ({onClick}: {onClick: () => void}) => {
  return (
    <Button
      onClick={onClick}
      className="uppercase rounded-sm mx-auto px-2 py-3 mt-10"
    >
      НАЙТИ ЕЩЁ
    </Button>
  );
}

export default IngredientsListLoadMore