import { prisma } from '../../../../lib/prisma'

export async function getAllProducts() {
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
