import { prisma } from '../../lib/prisma'

interface IncrementProps {
  productId: string
  shoppingCartId: string
}

export async function decrementQuantity(params: IncrementProps) {
  await prisma.productOnShoppingCart.update({
    where: {
      products_id_shopping_cart_id: {
        products_id: params.productId,
        shopping_cart_id: params.shoppingCartId,
      },
    },
    data: {
      quantity: {
        decrement: 1,
      },
    },
  })
}
