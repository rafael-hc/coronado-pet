import { prisma } from '../../../../lib/prisma'

export const getProductBySlug = async (slug: string) => {
  const product = await prisma.products.findUnique({
    where: {
      slug,
    },
    include: {
      sub_category: true,
    },
  })
  return product
}
