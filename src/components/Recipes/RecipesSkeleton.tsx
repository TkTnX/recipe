import { Skeleton } from "../ui/skeleton";

const RecipesSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      {[...new Array(5)].map((_, i) => (
        <Skeleton key={i} className="w-full h-[360px] bg-gray-300" />
      ))}
    </div>
  );
};

export default RecipesSkeleton;
