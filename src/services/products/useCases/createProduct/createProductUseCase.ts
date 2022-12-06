import {
  Category,
  // Category,
  Product,
} from '../../../../utils/interfaces/productInterface'
import { prisma } from '../../../../utils/prisma'

export const createProductUseCase = async (
  product: Product & { categories: Category[] },
) => {
  const result = await prisma.products.create({
    data: {
      name: product.name,
      costPrice: product.costPrice,
      price: product.price,
      brand: product.brand,
      description: product.description,
      inventory: product.inventory,
      pet: product.pet,
      barcode: product.barcode,
      size: product.size,
      slug: product.slug,
      specie: product.specie,
      type: product.type,
      imageUrl: product.imageUrl,
      categories: {
        create: product.categories,
      },
    },
  })

  return result
}

// (Products & {
//   categories: Categories[];
// })
