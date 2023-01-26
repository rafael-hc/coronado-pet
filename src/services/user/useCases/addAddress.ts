import { prisma } from '../../../lib/prisma'

export async function addAddressInUser(
  userId: string,
  address: any,
): Promise<void> {
  await prisma.address.create({
    data: {
      street_address: address.street,
      district: address.district,
      number: address.number,
      city: address.city,
      state: address.state,
      complement: address.complement,
      zip_code: address.zip_code,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  })
}
