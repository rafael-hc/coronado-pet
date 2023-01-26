import { Address, User } from '@prisma/client'
import { prisma } from '../../../lib/prisma'

export async function updateUser(user: User, address?: Address) {
  if (address) {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: {
          update: {
            where: {
              id: address.id,
            },
            data: {
              street_address: address.street_address,
              district: address.district,
              city: address.city,
              number: address.number,
              complement: address.complement,
              state: address.state,
            },
          },
        },
      },
    })
  }
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  })
}
