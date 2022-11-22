import { ReactElement } from 'react'
import { LoginLayout } from '../../layouts/LogintLayout'
import { NextPageWithLayout } from '../_app'
import { Test } from '../../styles/pages/cart'

const Cart: NextPageWithLayout = () => {
  return (
    <Test>
      <h1>Aqui é o carrinho</h1>
    </Test>
  )
}

Cart.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>
}

export default Cart
