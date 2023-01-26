import { prisma } from '../../../lib/prisma'

export async function checkIfEmailExists(email: string): Promise<boolean> {
  const countEmail = await prisma.user.count({
    where: {
      email,
    },
  })

  return countEmail > 0
}
