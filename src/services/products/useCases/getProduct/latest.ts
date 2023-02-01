import { prisma } from '../../../../lib/prisma'
import { LatestProducts } from '../../../../utils/interfaces/productInterface'

export async function getLatestProducts(): Promise<LatestProducts[]> {
  const bestSeller = await prisma.products.findMany({
    take: 6,
    orderBy: {
      registered_at: 'desc',
    },
    select: {
      id: true,
      name: true,
      price: true,
      image_url: true,
      slug: true,
    },
  })
  const response = bestSeller.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    imageUrl: product.image_url,
    slug: product.slug,
  }))

  return response
}
