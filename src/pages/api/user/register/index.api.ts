import { NextApiRequest, NextApiResponse } from 'next'
import { Address, User } from '@prisma/client'
import { registerUser } from '../../../../services/user/useCases/register'
import { prisma } from '../../../../lib/prisma'
import { setCookie } from 'nookies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(405)
    return
  }

  const { address, ...user }: User & { address: Address } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      cpf: user.cpf,
    },
  })

  if (userExists) {
    return res.status(400).json({
      message: 'User already exists',
    })
  }

  try {
    const response = await registerUser(user, address)

    setCookie({ res }, '@coronado_pet:userId', response.id, {
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    })

    res.status(201).json(response)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      })
    }
  }
}
