import { prisma } from '../../../../lib/prisma'

export async function getAllCategories() {
  const categories = await prisma.categories.findMany()
  return categories
}
