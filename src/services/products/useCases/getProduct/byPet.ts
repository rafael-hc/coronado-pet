import { prisma } from '../../../../utils/prisma'

export const getProductsByPet = async (pet: string) => {
  const productByPet = await prisma.products.findMany({
    where: {
      pet: {
        equals: pet,
        mode: 'insensitive',
      },
    },
  })
  return productByPet
}
