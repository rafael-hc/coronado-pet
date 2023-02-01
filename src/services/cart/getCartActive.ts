import { prisma } from '../../lib/prisma'

export async function getCartActive(email: string) {
  const cartActive = await prisma.shoppingCart.findFirst({
    where: {
      AND: [
        {
          is_active: true,
        },
        {
          user: {
            email,
          },
        },
      ],
    },
    select: {
      id: true,
    },
  })
  if (!cartActive) {
    return null
  }
  return cartActive.id
}
