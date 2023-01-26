import { Address, User } from '@prisma/client'
import { prisma } from '../../../lib/prisma'

interface RegisterUserResponse {
  id: string
}

export async function registerUser(
  user: User,
  address: Address,
): Promise<RegisterUserResponse> {
  const userPrisma = await prisma.user.create({
    data: {
      name: user.name,
      cpf: user.cpf,
      email: user.email,
      date_of_birth: new Date(user.date_of_birth),
      phone: user.phone,
      address: {
        create: address,
      },
    },
  })

  return { id: userPrisma.id }
}
