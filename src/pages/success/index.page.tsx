import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { destroyCookie, setCookie } from 'nookies'
import { ReactElement } from 'react'
import Stripe from 'stripe'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { stripe } from '../../lib/stripe'
import { checkoutCart } from '../../services/cart/checkoutCart'
import { createOrder, OrderProps } from '../../services/cart/createOrder'
import { getCartId } from '../../services/cart/getId'
import { NextPageWithLayout } from '../_app.page'
interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
    id: string
  }[]
  newOrder: OrderProps
}

const Success: NextPageWithLayout<SuccessProps> = ({
  customerName,
  products,
}) => {
  return (
    <>
      <Head>
        <title>Compra efetuada! | Coronado Pet</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main>
        <h1>Compra efetuada!</h1>

        <div>
          {products.map((product) => (
            <div key={product.imageUrl}>
              <Image src={product.imageUrl} alt="" width={120} height={110} />
            </div>
          ))}
        </div>
        <p>
          Uhuul <strong>{customerName}</strong>
          {`, sua compra de
          ${products.length}camisetas já está a caminho da sua casa.`}
        </p>

        <a href="/">
          <a href="./">Voltar ao catálogo</a>
        </a>
      </main>
    </>
  )
}

Success.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Success

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const sessionId = String(query.session_id)
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const productsStripe = session.line_items?.data.map<Stripe.Product>(
    (item) => item.price?.product as Stripe.Product,
  )

  const order = {
    freight_cost: session.shipping_cost?.amount_total!,
    total_amount: session.amount_total!,
    user_id: session.metadata?.user_id!,
    shopping_cart_id: session.metadata?.shopping_cart_id!,
    address_id: session.metadata?.address_id!,
  }
  const newOrder = await createOrder(order)
  await checkoutCart(session.metadata?.shopping_cart_id!)

  destroyCookie({ res }, '@coronado_pet:cartId', {
    path: '/',
  })

  const newCartId = await getCartId(session.metadata?.user_id!)
  setCookie({ res }, '@coronado_pet:cartId', newCartId, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 day
  })

  const products = productsStripe?.map((product) => {
    return { name: product.name, imageUrl: product.images[0], id: product.id }
  })

  return {
    props: {
      customerName,
      products,
      newOrder,
    },
  }
}
