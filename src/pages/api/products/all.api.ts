import { NextApiRequest, NextApiResponse } from 'next'
import { getAllProducts } from '../../../services/products/useCases/getProduct/all'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const response = await getAllProducts()
    res.status(200).json(response)
  }

  res.status(405)
}
