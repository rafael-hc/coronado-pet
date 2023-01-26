import { prisma } from '../../../lib/prisma'

export async function deleteUserById(id: string) {
  await prisma.user.delete({
    where: {
      id,
    },
  })
}
