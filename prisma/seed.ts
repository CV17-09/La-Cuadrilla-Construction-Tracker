import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: [
      { name: "Admin" },
      { name: "Manager" },
      { name: "Worker" },
    ],
    skipDuplicates: true,
  });

  await prisma.projectStatus.createMany({
    data: [
      { name: "Planning" },
      { name: "Active" },
      { name: "Completed" },
    ],
    skipDuplicates: true,
  });

  await prisma.requestStatus.createMany({
    data: [
      { name: "Pending" },
      { name: "Approved" },
      { name: "Rejected" },
    ],
    skipDuplicates: true,
  });

  await prisma.requestPriority.createMany({
    data: [
      { name: "Low" },
      { name: "Medium" },
      { name: "High" },
      { name: "Urgent" },
    ],
    skipDuplicates: true,
  });

  await prisma.unit.createMany({
    data: [
      { name: "pieces" },
      { name: "bags" },
      { name: "boxes" },
      { name: "gallons" },
      { name: "feet" },
    ],
    skipDuplicates: true,
  });

  console.log("Seed data created");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });