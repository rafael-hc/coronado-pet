import { NextApiRequest, NextApiResponse } from 'next'
import { deleteUserById } from '../../../../../services/user/useCases/delete'
import { prisma } from '../../../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'DELETE') {
    return res.status(405)
  }

  const { id } = req.query

  const userExists = await prisma.user.findUnique({
    where: {
      id: String(id),
    },
  })

  if (!userExists) {
    return res.status(404).end()
  }

  try {
    await deleteUserById(String(id))
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    res.status(400).json({ message3: error })
  }
}
