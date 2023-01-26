/*
  Warnings:

  - You are about to drop the `SubCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SubCategory" DROP CONSTRAINT "SubCategory_categoryId_fkey";

-- DropTable
DROP TABLE "SubCategory";

-- CreateTable
CREATE TABLE "sub-categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "sub-categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sub-categories" ADD CONSTRAINT "sub-categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
