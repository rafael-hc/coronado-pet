import { Products } from '@prisma/client'
import { prisma } from '../lib/prisma'

export const filterProductsByPet = async (
  category: string,
  products: Products[],
) => {
  const productsId = products.map((product) => {
    return product.id
  })
  const productBySize = await prisma.products.findMany({
    where: {
      AND: [
        {
          id: {
            in: productsId,
          },
        },
        {
          sub_category: {
            category: {
              name: category,
            },
          },
        },
      ],
    },
    include: {
      sub_category: true,
    },
  })

  return productBySize
}

export async function getBestSellerProducts() {
  const bestSellet = await prisma.products.findMany()
  return bestSellet
}
