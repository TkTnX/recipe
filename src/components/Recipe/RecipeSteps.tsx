import { prisma } from "@/prisma/prisma";
import Image from "next/image";

const RecipeSteps = async ({ recipeId }: { recipeId: string }) => {
  const steps = await prisma.recipeStep.findMany({
    where: { recipeId },
    orderBy: { stepNumber: "asc" },
  });
  return (
    <div className="">
      <h5 className="text-xl font-semibold mt-4">Для блюда</h5>
      <ul className="mt-4 flex flex-col gap-8">
        {steps.map((step) => (
          <li key={step.id} className="">
            <div className="flex flex-col gap-2">
              <p className="bg-primary p-1 rounded-md text-xs w-fit">
                ШАГ {step.stepNumber}
              </p>
              <div>
                {step.imageUrl && (
                  <div className="relative w-full h-[360px]">
                    <Image
                      src={step.imageUrl}
                      alt={step.description}
                      className="object-cover rounded-lg drop-shadow-lg "
                      fill
                    />
                  </div>
                )}
                <p className=" font-light mt-4">{step.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSteps;
