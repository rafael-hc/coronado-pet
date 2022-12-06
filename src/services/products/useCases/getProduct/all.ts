import { prisma } from '../../../../utils/prisma'

export const getAllProducts = async () => {
  const products = await prisma.products.findMany({
    where: {
      AND: [
        {
          brand: {
            in: ['golden', 'premier', 'petz'],
            mode: 'insensitive',
          },
        },
        {
          size: {
            in: ['100g', '15kg'],
            mode: 'insensitive',
          },
        },
      ],
    },
  })
  return products
}
