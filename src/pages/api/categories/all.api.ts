import { NextApiRequest, NextApiResponse } from 'next'
import { parseCookies } from 'nookies'
import { shoppingCartByUserId } from '../../../services/cart/byUserId'
import { getAllCategories } from '../../../services/products/useCases/getCategories'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { '@coronado_pet:cartId': cartId } = parseCookies({
    req,
  })
  if (req.method === 'GET') {
    const response = await getAllCategories()
    await shoppingCartByUserId(cartId)
    res.status(200).json(response)
  }

  res.status(405)
}
