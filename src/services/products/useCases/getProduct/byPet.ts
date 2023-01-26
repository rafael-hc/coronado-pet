import { prisma } from '../../../../lib/prisma'
import { Product } from '../../../../utils/interfaces/productInterface'

export async function getProductsByPet(pet: string): Promise<Product[]> {
  const productByPet = await prisma.products.findMany({
    where: {
      pet: {
        equals: pet,
        mode: 'insensitive',
      },
    },
  })

  const response = productByPet.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    price: product.price,
    costPrice: product.cost_price,
    brand: product.brand,
    pet: product.pet,
    specie: product.specie,
    imageUrl: product.image_url,
    size: product.size,
    inventory: product.inventory,
    barcode: product.barcode,
    registeredAt: product.registered_at,
    description: product.description,
    line: product.line,
    age: product.age,
    breedSize: product.breed_size,
  }))
  return response
}
