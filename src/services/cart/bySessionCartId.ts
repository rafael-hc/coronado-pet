import { prisma } from '../../lib/prisma'

export async function shoppingCartBySessionId(sessionCartId: string) {
  const productsInShoppingCart = await prisma.shoppingCart.findUnique({
    where: {
      session_cart_id: sessionCartId,
    },
    select: {
      ProductOnShoppingCart: {
        select: {
          quantity: true,
          product: {
            select: {
              id: true,
              name: true,
              image_url: true,
              price: true,
            },
          },
        },
      },
    },
  })

  if (!productsInShoppingCart) {
    return null
  }

  const response = productsInShoppingCart.ProductOnShoppingCart.map(
    (product, index) => ({
      productId: product.product.id,
      quantity: product.quantity,
      name: product.product.name,
      imageUrl: product.product.image_url[0],
      price: product.product.price,
    }),
  )
  return response
}
