import { prisma } from '../../../../lib/prisma'

export const getAllCategories = async () => {
  const categories = await prisma.categories.findMany()
  return categories
}
