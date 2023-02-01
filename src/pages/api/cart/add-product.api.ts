import { NextApiRequest, NextApiResponse } from 'next'
import { parseCookies } from 'nookies'
import { addProductToCart } from '../../../services/cart/addProduct'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(405)
    return
  }

  const { '@coronado_pet:cartId': cartId } = parseCookies({ req })

  const { productId, quantity } = req.body

  try {
    await addProductToCart({ productId, cartId, quantity })

    res.status(201).end()
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      })
    }
  }
}
