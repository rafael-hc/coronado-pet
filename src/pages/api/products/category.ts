import { NextApiRequest, NextApiResponse } from 'next'
import { getProductsByCategory } from '../../../services/products/useCases/getProduct/byCategory'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { category } = req.body
  if (req.method === 'GET') {
    const response = await getProductsByCategory(category)

    return res.status(200).json(response)
  }

  return res.status(405).end()
}
