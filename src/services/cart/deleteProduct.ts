import { prisma } from '../../lib/prisma'

export async function deleteProduct(productId: string, cartId: string) {
  await prisma.productOnShoppingCart.delete({
    where: {
      products_id_shopping_cart_id: {
        products_id: productId,
        shopping_cart_id: cartId,
      },
    },
  })
}
