import { Address } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { parseCookies } from 'nookies'
import { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { CartLayout } from '../../layouts/CartLayout'
import { NextPageWithLayout } from '../../pages/_app.page'
import { shoppingCartByUserId } from '../../services/cart/byUserId'
import { getAddressByUser } from '../../services/user/useCases/getAddress'
import { fetchAddress } from '../../store/reducers/addressSlice'
import { fetchProducts, ProductsInCart } from '../../store/reducers/cartSlice'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'
import { CartComponent } from './component'

interface CartProps {
  productsInCart: ProductsInCart[]
  isEmpty?: boolean
  address: Address[]
  userId: string
}

const Cart: NextPageWithLayout<CartProps> = ({
  productsInCart,
  isEmpty,
  address,
  userId,
}) => {
  const dispatch = useDispatch()
  dispatch(fetchProducts(productsInCart))
  dispatch(fetchAddress(address))
  return (
    <>
      <CartComponent userId={userId} />
    </>
  )
}

Cart.getLayout = function getLayout(page: ReactElement) {
  return <CartLayout>{page}</CartLayout>
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req as any, res as any),
  )
  if (!session) {
    return {
      props: {
        isEmpty: true,
      },
    }
  }

  const userEmail = session?.user?.email
  const products =
    typeof userEmail === 'string' && (await shoppingCartByUserId(userEmail))

  const { '@coronado_pet:userId': userIdInCookies } = parseCookies({ req })

  const address = await getAddressByUser(userIdInCookies)

  return {
    props: {
      productsInCart: JSON.parse(JSON.stringify(products)),
      address: JSON.parse(JSON.stringify(address)),
      userId: userIdInCookies,
    },
  }
}

export default Cart
