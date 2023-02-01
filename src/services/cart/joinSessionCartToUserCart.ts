import { prisma } from '../../lib/prisma'

export async function joinSessionCartToUserCart() {
  const sessionCart = await prisma.shoppingCart.findUnique({
    where: {
      session_cart_id: 'afe218c7-ceb1-4211-b91f-6e387b4cb182',
    },
    select: {
      id: true,
      ProductOnShoppingCart: true,
    },
  })
  const existShoppingCart = await prisma.shoppingCart.findFirst({
    where: {
      AND: [
        {
          user: {
            email: 'mendonca_almeida@hotmail.com',
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

  if (!sessionCart) {
    return false
  }

  const shoppingCart =
    existShoppingCart ||
    (await prisma.shoppingCart.create({
      data: {
        is_active: true,
      },
      select: {
        id: true,
      },
    }))

  await prisma.productOnShoppingCart.upsert({
    where: {
      products_id_shopping_cart_id: {
        products_id: sessionCart.ProductOnShoppingCart[0].products_id,
        shopping_cart_id: shoppingCart.id,
      },
    },
    update: {
      quantity: {
        increment: sessionCart.ProductOnShoppingCart[0].quantity,
      },
    },
    create: {
      products_id: sessionCart.ProductOnShoppingCart[0].products_id,
      shopping_cart_id: shoppingCart.id,
      quantity: sessionCart.ProductOnShoppingCart[0].quantity,
    },
  })

  await Promise.all(
    sessionCart.ProductOnShoppingCart.map(
      (productOnCart) => async () =>
        await prisma.productOnShoppingCart.upsert({
          where: {
            products_id_shopping_cart_id: {
              shopping_cart_id: shoppingCart.id,
              products_id: productOnCart.id,
            },
          },
          create: {
            shopping_cart_id: shoppingCart.id,
            products_id: productOnCart.id,
            quantity: productOnCart.quantity,
          },
          update: {
            quantity: {
              increment: productOnCart.quantity,
            },
          },
        }),
    ),
  )

  const productsFromDelete = sessionCart.ProductOnShoppingCart.map(
    (product) => product.id,
  )

  await prisma.productOnShoppingCart.deleteMany({
    where: {
      id: {
        in: productsFromDelete,
      },
    },
  })

  return true
}
