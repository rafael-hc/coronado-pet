import { NextApiRequest, NextApiResponse } from 'next'
import { createProductUseCase } from '../../../services/products/useCases/createProduct/createProductUseCase'
import { getProductBySlug } from '../../../services/products/useCases/getProduct/bySlug'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { product } = req.body
    const response = await createProductUseCase(product)

    res.status(201).json(response)
  }

  if (req.method === 'GET') {
    const { slug } = req.query
    const response = await getProductBySlug(slug as string)
    res.status(200).json(response)
  }

  res.status(405).end()
}
