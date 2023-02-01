import { NextApiRequest, NextApiResponse } from 'next'
import { getCartId } from '../../../services/cart/getId'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(405)
  }
  const email = req.body.email
  const id = await getCartId(email)

  return res.status(200).json(id)
}
