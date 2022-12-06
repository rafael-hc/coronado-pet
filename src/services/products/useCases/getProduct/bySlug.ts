import { prisma } from '../../../../utils/prisma'

export const getProductBySlug = async (slug: string) => {
  const product = await prisma.products.findUnique({
    where: {
      slug,
    },
    include: {
      categories: true,
    },
  })
  return product
}
