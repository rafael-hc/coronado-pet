import { Products } from '@prisma/client'
import { prisma } from '../utils/prisma'
import { categoryList } from '../utils/productList'

export const filterProductsByPet = async (
  category: string[],
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
          categories: {
            some: {
              name: {
                in: category,
                // contains: category,
                mode: 'insensitive',
              },
            },
          },
        },
      ],
    },
    include: {
      categories: true,
    },
  })

  return productBySize
}

export const getBestSellerProducts = async () => {
  const bestSellet = await prisma.products.findMany()
  return bestSellet
}

export const addCategorias = async () => {
  const response = await prisma.categories.createMany({
    data: categoryList,
  })
  return response
}
