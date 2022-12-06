import { NextApiRequest, NextApiResponse } from 'next'
import { getProductBySlug } from '../../../services/products/useCases/getProduct/bySlug'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { slug } = req.query
    const response = await getProductBySlug(slug as string)
    res.status(200).json(response)
  }

  res.status(405).end()
}

export default handler
