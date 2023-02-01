import { NextApiRequest, NextApiResponse } from 'next'
import { checkoutCart } from '../../../services/cart/checkoutCart'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(405)
  }
  const email = req.body.email
  const id = await checkoutCart(email)

  return res.status(200).json(id)
}
