/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Products_slug_key" ON "Products"("slug");
