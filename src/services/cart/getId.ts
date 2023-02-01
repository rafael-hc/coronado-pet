import { prisma } from '../../lib/prisma'

export async function getCartId(id: string) {
  const existCart = await prisma.shoppingCart.findFirst({
    where: {
      is_active: true,
      user: {
        id,
      },
    },
    select: {
      id: true,
    },
  })

  if (!existCart) {
    const newCart = await prisma.shoppingCart.create({
      data: {
        is_active: true,
        user: {
          connect: {
            id,
          },
        },
      },
      select: {
        id: true,
      },
    })
    return newCart.id
  }

  return existCart.id
}
