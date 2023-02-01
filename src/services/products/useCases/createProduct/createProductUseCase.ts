import { Product } from '../../../../utils/interfaces/productInterface'
import { Category } from '../../../../utils/interfaces/Category'
import { prisma } from '../../../../lib/prisma'

export const createProductUseCase = async (
  product: Product & { categories: Category },
) => {
  const result = await prisma.products.create({
    data: {
      name: product.name,
      price: product.price,
      brand: product.brand,
      description: product.description,
      inventory: product.inventory,
      pet: product.pet,
      barcode: product.barcode,
      size: product.size,
      slug: product.slug,
      specie: product.specie,
      cost_price: product.costPrice,
      sub_category: {
        create: {
          name: product.categories.name,
          category: {
            create: {
              name: '',
            },
          },
        },
      },
    },
  })

  return result
}
