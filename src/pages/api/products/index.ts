import { NextApiRequest, NextApiResponse } from 'next'
import { getProductsByCategory } from '../../../services/products'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { category } = req.body
  const response = await getProductsByCategory(category)

  return res.status(200).json(response)
}
