/*
  Warnings:

  - You are about to drop the column `type` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoriesToProducts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sub_category_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CategoriesToProducts" DROP CONSTRAINT "_CategoriesToProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoriesToProducts" DROP CONSTRAINT "_CategoriesToProducts_B_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "type",
ADD COLUMN     "sub_category_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "VerificationToken";

-- DropTable
DROP TABLE "_CategoriesToProducts";

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_token_key" ON "verification_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "verification_tokens"("identifier", "token");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_sub_category_id_fkey" FOREIGN KEY ("sub_category_id") REFERENCES "sub_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
