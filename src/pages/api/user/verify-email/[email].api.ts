import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { checkIfEmailExists } from '../../../../services/user/useCases/checkIfEmailExists'

const requestParam = z.string().email()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405)
  }

  try {
    const { email } = req.query

    requestParam.parse(email)

    const response = await checkIfEmailExists(String(email))

    return res.status(200).json(response)
  } catch (e) {
    res.status(204).end()
  }
}
