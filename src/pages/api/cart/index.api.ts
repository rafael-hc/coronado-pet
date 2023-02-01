import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { parseCookies } from 'nookies'
import { shoppingCartBySessionId } from '../../../services/cart/bySessionCartId'
import { shoppingCartByUserId } from '../../../services/cart/byUserId'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  const { '@coronado_pet:sessionCartId': sessionCartId } = parseCookies({ req })

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )
  const userEmail = session?.user?.email

  const responseSessionCart =
    !!sessionCartId && (await shoppingCartBySessionId(sessionCartId))

  if (!session || !responseSessionCart) {
    res.status(200).end().json(0)
  }

  try {
    if (session) {
      const response =
        typeof userEmail === 'string' && (await shoppingCartByUserId(userEmail))

      res.status(200).end().json(response)
    } else if (responseSessionCart) {
      res.status(200).end().json(responseSessionCart)
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      })
    }
  }
}
