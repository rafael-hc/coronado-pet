import { prisma } from '../../lib/prisma'

export async function checkoutCart(id: string) {
  await prisma.shoppingCart.updateMany({
    where: {
      id,
    },
    data: {
      is_active: {
        set: false,
      },
    },
  })
}
