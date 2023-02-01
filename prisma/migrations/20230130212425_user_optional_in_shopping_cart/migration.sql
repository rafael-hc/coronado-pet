-- DropForeignKey
ALTER TABLE "shoppin_carts" DROP CONSTRAINT "shoppin_carts_user_id_fkey";

-- AlterTable
ALTER TABLE "shoppin_carts" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "shoppin_carts" ADD CONSTRAINT "shoppin_carts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
