/*
  Warnings:

  - A unique constraint covering the columns `[products_id,shopping_cart_id]` on the table `product_on_shopping_cart` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "product_on_shopping_cart_products_id_shopping_cart_id_key" ON "product_on_shopping_cart"("products_id", "shopping_cart_id");
