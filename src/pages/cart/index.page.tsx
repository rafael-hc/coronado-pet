import { ReactElement } from 'react'
import { LoginLayout } from '../../layouts/LoginLayout'
import { NextPageWithLayout } from '../../pages/_app.page'
import { Test } from './styles'

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
