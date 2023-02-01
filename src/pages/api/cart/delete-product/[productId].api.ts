import { NextApiRequest, NextApiResponse } from 'next'
import { parseCookies } from 'nookies'
import { deleteProduct } from '../../../../services/cart/deleteProduct'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'DELETE') {
    res.status(405)
    return
  }
  const { '@coronado_pet:cartId': cartId } = parseCookies({ req })

  const { productId } = req.query

  if (!productId) {
    return res.status(400).send('product id not received')
  }

  try {
    await deleteProduct(String(productId), cartId)

    return res.status(204).end()
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      })
    }
  }
}
