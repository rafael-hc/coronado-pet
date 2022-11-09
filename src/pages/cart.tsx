import { ReactElement } from 'react'
import { LoginLayout } from '../layouts/LogintLayout'
import { NextPageWithLayout } from './_app'

const Cart: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Aqui é o carrinho</h1>
    </div>
  )
}

Cart.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>
}

export default Cart
