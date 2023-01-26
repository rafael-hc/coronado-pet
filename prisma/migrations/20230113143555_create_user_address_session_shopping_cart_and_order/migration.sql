/*
  Warnings:

  - You are about to drop the column `breedSize` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `costPrice` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `registeredAt` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `sub-categories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cost_price` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sub-categories" DROP CONSTRAINT "sub-categories_categoryId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "breedSize",
DROP COLUMN "costPrice",
DROP COLUMN "imageUrl",
DROP COLUMN "registeredAt",
ADD COLUMN     "breed_size" TEXT[],
ADD COLUMN     "cost_price" INTEGER NOT NULL,
ADD COLUMN     "image_url" TEXT[],
ADD COLUMN     "registered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "sub-categories";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "street_address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "duration" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shoppin_carts" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finished_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "shoppin_carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "freight_cost" INTEGER NOT NULL,
    "total_amount" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "shopping_cart_id" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_on_shopping_cart" (
    "id" TEXT NOT NULL,
    "products_id" TEXT NOT NULL,
    "shopping_cart_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "product_on_shopping_cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,

    CONSTRAINT "sub_categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "orders_shopping_cart_id_key" ON "orders"("shopping_cart_id");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shoppin_carts" ADD CONSTRAINT "shoppin_carts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_shopping_cart_id_fkey" FOREIGN KEY ("shopping_cart_id") REFERENCES "shoppin_carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_on_shopping_cart" ADD CONSTRAINT "product_on_shopping_cart_products_id_fkey" FOREIGN KEY ("products_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_on_shopping_cart" ADD CONSTRAINT "product_on_shopping_cart_shopping_cart_id_fkey" FOREIGN KEY ("shopping_cart_id") REFERENCES "shoppin_carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sub_categories" ADD CONSTRAINT "sub_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
