import { NextApiRequest, NextApiResponse } from 'next'
import { Address, User } from '@prisma/client'
import { updateUser } from '../../../../services/user/useCases/update'
import { prisma } from '../../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'PATCH') {
    res.status(405)
    return
  }

  const { address, ...user }: User & { address: Address } = req.body

  const emailAlreadyUsed = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  })

  if (emailAlreadyUsed) {
    return res.status(400).json({
      message1: 'Email já utilizado',
    })
  }

  try {
    await updateUser(user, address)
    res.status(200).json({ message: 'User updated successfully' })
  } catch (error) {
    res.status(400).json({ message3: error })
  }
}
