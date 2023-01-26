import { NextApiRequest, NextApiResponse } from 'next'
import { shoppingCartByUserId } from '../../../services/cart'
import { getAllCategories } from '../../../services/products/useCases/getCategories'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const response = await getAllCategories()
    await shoppingCartByUserId('60ab6a74-9c45-440e-b304-182d4943c701')
    res.status(200).json(response)
  }

  res.status(405)
}
