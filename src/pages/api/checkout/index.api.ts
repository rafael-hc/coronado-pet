/* eslint-disable camelcase */
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { stripe } from '../../../lib/stripe'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  const line_items = req.body.lineItens
  const params = req.body.params

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancel_url = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url,
    success_url,
    line_items,
    mode: 'payment',
    customer_email: session?.user?.email!,
    metadata: {
      address_id: params.address_id,
      user_id: params.user_id,
      shopping_cart_id: params.shopping_cart_id,
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 2000,
            currency: 'BRL',
          },
          delivery_estimate: {
            maximum: {
              unit: 'business_day',
              value: 15,
            },
            minimum: {
              unit: 'business_day',
              value: 5,
            },
          },
          display_name: 'Prazo estimado de entrega',
        },
      },
    ],
    shipping_address_collection: {
      allowed_countries: ['BR'],
    },
  })
  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
