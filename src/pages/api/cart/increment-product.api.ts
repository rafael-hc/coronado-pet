import { NextApiRequest, NextApiResponse } from 'next'
import { parseCookies } from 'nookies'
import { incrementQuantity } from '../../../services/cart/incrementQuantity'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'PUT') {
    res.status(405)
    return
  }

  const { '@coronado_pet:cartId': cartId } = parseCookies({ req })

  const { productId } = req.body

  try {
    await incrementQuantity({ productId, shoppingCartId: cartId })

    res.status(204).end()
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      })
    }
  }
}
