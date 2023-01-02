import { NextApiRequest, NextApiResponse } from 'next'
import { getLatestProducts } from '../../../services/products/useCases/getProduct/latest'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  const response = await getLatestProducts()

  res.status(201).json(response)
}
