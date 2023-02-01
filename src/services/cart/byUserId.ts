import { prisma } from '../../lib/prisma'

export async function shoppingCartByUserId(userEmail: string) {
  const shoppingCartId = await prisma.shoppingCart.findMany({
    where: {
      AND: [
        {
          user: {
            email: userEmail,
          },
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

  const productsInCart = await prisma.productOnShoppingCart.groupBy({
    where: {
      shopping_cart_id: shoppingCartId[0].id,
    },
    by: ['products_id'],
    _sum: {
      quantity: true,
    },
  })

  const productsIdInCart = productsInCart.map((product) => product.products_id)

  const productsDetailInCart = await prisma.products.findMany({
    where: {
      id: {
        in: productsIdInCart,
      },
    },
    select: {
      name: true,
      image_url: true,
      price: true,
    },
  })

  const response = productsInCart.map((product, index) => ({
    productId: product.products_id,
    quantity: product._sum.quantity,
    name: productsDetailInCart[index].name,
    imageUrl: productsDetailInCart[index].image_url[0],
    price: productsDetailInCart[index].price,
  }))
  return response
}
