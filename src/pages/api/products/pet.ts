import { NextApiRequest, NextApiResponse } from 'next'
import { getProductsByPet } from '../../../services/products/useCases/getProduct/byPet'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { pet } = req.body
  const response = await getProductsByPet(pet)

  return res.status(200).json(response)
}
