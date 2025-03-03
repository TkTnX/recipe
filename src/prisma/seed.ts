import { CONST_CATEGORIES, CONST_INGREDIENTS } from "@/constants";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.category.deleteMany({});
  await prisma.ingredient.deleteMany({});

  await prisma.category.createMany({
    data: CONST_CATEGORIES,
  });

  await prisma.ingredient.createMany({
    data: CONST_INGREDIENTS
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
