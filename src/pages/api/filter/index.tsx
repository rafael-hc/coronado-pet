import { NextApiRequest, NextApiResponse } from 'next'
import { filterProductsByPet } from '../../../services/products'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { size, products } = req.body
  const response = await filterProductsByPet(size, products)

  return res.status(200).json(response)
}
