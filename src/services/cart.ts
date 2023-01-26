import { prisma } from '../lib/prisma'

export async function shoppingCartByUserId(userId: string) {
  const shoppingCartId = await prisma.shoppingCart.findMany({
    where: {
      AND: [
        {
          user_id: userId,
        },
        {
          is_active: true,
        },
      ],
    },
    select: {
      id: true,
    },
  })

  // await prisma.productOnShoppingCart.create({
  //   data: {
  //     quantity: 4,
  //     products_id: '',
  //     shopping_cart_id: shoppingCartId[0].id,
  //   },
  // })

  const productsInCart = await prisma.productOnShoppingCart.groupBy({
    where: {
      shopping_cart_id: shoppingCartId[0].id,
    },
    by: ['products_id'],
    _sum: {
      quantity: true,
    },
  })
  return productsInCart
}
