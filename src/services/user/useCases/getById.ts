import { Address, User } from '@prisma/client'
import { prisma } from '../../../lib/prisma'

export async function getUserById(id: string): Promise<
  User & {
    address: Address[]
  }
> {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      address: true,
    },
  })
  return user
}
