import { prisma } from '../../lib/prisma'

interface AddProductToCartProps {
  cartId: string
  productId: string
  quantity: number
}
export async function addProductToCart({
  cartId,
  productId,
  quantity,
}: AddProductToCartProps) {
  await prisma.productOnShoppingCart.upsert({
    where: {
      products_id_shopping_cart_id: {
        products_id: productId,
        shopping_cart_id: cartId,
      },
    },
    create: {
      products_id: productId,
      shopping_cart_id: cartId,
      quantity,
    },
    update: {
      quantity: {
        increment: quantity,
      },
    },
  })
}
