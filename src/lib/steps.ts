import { prisma } from "@/prisma/prisma";
import { CreateStep } from "@/types";
import { newImage } from "./newImage";

type Props = {
  steps: CreateStep[];
  recipeId: string;
  formData: FormData;
};

export const createSteps = async ({ steps, recipeId, formData }: Props) => {
  try {
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      let stepImageUrl = null;

      if (formData.has(`steps[${i}][imageUrl]`)) {
        const stepImage = formData.get(`steps[${i}][imageUrl]`) as File;
        stepImageUrl = await newImage("recipe-steps", stepImage);
      }
      await prisma.recipeStep.create({
        data: {
          description: step.description,
          imageUrl: stepImageUrl,
          recipeId,
          stepNumber: i + 1,
        },
      });
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
