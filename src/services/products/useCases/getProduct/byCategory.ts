import { prisma } from '../../../../utils/prisma'

export const getProductsByCategory = async (category: string) => {
  const productByCategory = await prisma.products.findMany({
    where: {
      categories: {
        some: {
          name: {
            contains: category,
            mode: 'insensitive',
          },
        },
      },
    },
  })
  return productByCategory
}
