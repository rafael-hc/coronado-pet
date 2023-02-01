import { prisma } from '../../../lib/prisma'

export async function getAddressByUser(userId: string) {
  const prismaAddress = await prisma.address.findMany({
    where: {
      user_id: userId,
    },
  })

  return prismaAddress
}
