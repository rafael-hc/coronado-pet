import { prisma } from '../../lib/prisma'

export async function createSessionCart() {
  const sessionCart = await prisma.sessionCart.create({
    data: {
      expire: 60 * 60 * 24 * 2, // 2 days
    },
    select: {
      id: true,
      expire: true,
    },
  })
  return sessionCart
}
