import { prisma } from '../../../../lib/prisma'

export const getProductsByCategory = async (category: string) => {
  const productByCategory = await prisma.products.findMany({
    where: {
      sub_category: {
        category: {
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
