/*
  Warnings:

  - The `description` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `imageUrl` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `brand` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "age" TEXT[],
ADD COLUMN     "breedSize" TEXT[],
ADD COLUMN     "line" TEXT,
DROP COLUMN "description",
ADD COLUMN     "description" TEXT[],
DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" TEXT[],
ALTER COLUMN "brand" SET NOT NULL;

-- CreateTable
CREATE TABLE "SubCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
