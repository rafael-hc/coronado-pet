import { prisma } from '../../../../utils/prisma'

export const getLatestProducts = async () => {
  const bestSellet = await prisma.products.findMany({
    take: 6,
    orderBy: {
      registeredAt: 'desc',
    },
  })
  return bestSellet
}
