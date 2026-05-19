-- DropForeignKey
ALTER TABLE "Material" DROP CONSTRAINT "Material_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Material" DROP CONSTRAINT "Material_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "Material" DROP CONSTRAINT "Material_unitId_fkey";

-- AlterTable
ALTER TABLE "Material" ALTER COLUMN "categoryId" DROP NOT NULL,
ALTER COLUMN "supplierId" DROP NOT NULL,
ALTER COLUMN "unitId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Material" ADD CONSTRAINT "Material_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MaterialCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material" ADD CONSTRAINT "Material_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material" ADD CONSTRAINT "Material_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
