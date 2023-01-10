import { ReactElement } from 'react'
import { CartLayout } from '../../layouts/CartLayout'
import { NextPageWithLayout } from '../../pages/_app.page'
import { CartComponent } from './component'

const Cart: NextPageWithLayout = () => {
  return <CartComponent />
}

Cart.getLayout = function getLayout(page: ReactElement) {
  return <CartLayout>{page}</CartLayout>
}

export default Cart
