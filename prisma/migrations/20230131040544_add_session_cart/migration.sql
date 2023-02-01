/*
  Warnings:

  - A unique constraint covering the columns `[session_cart_id]` on the table `shoppin_carts` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "shoppin_carts" ADD COLUMN     "session_cart_id" TEXT;

-- CreateTable
CREATE TABLE "SessionCart" (
    "id" TEXT NOT NULL,
    "expire" INTEGER NOT NULL,
    "shoppingCartId" TEXT NOT NULL,

    CONSTRAINT "SessionCart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "shoppin_carts_session_cart_id_key" ON "shoppin_carts"("session_cart_id");

-- AddForeignKey
ALTER TABLE "shoppin_carts" ADD CONSTRAINT "shoppin_carts_session_cart_id_fkey" FOREIGN KEY ("session_cart_id") REFERENCES "SessionCart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
