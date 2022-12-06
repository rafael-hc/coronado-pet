/*
  Warnings:

  - A unique constraint covering the columns `[barcode]` on the table `Products` will be added. If there are existing duplicate values, this will fail.
  - Made the column `slug` on table `Products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "barcode" TEXT,
ADD COLUMN     "brand" TEXT,
ADD COLUMN     "pet" TEXT,
ADD COLUMN     "specie" TEXT,
ADD COLUMN     "type" TEXT,
ALTER COLUMN "slug" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Products_barcode_key" ON "Products"("barcode");
