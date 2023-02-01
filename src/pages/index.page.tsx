/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ProductCollection } from '../components/ProductCollection'
import { Carrossel } from '../components/Carrossel'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { getLatestProducts } from '../services/products/useCases/getProduct/latest'
import { Description, SubBanner, SubBannerContainer } from './styles'
import { LatestProducts } from '../utils/interfaces/productInterface'
import { NextPageWithLayout } from './_app.page'
import { Button } from '../@designSystem/components/button'
import { fetchProducts, ProductsInCart } from '../store/reducers/cartSlice'
import { useDispatch } from 'react-redux'

import { shoppingCartByUserId } from '../services/cart/byUserId'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from './api/auth/[...nextauth].api'

interface HomeProps {
  latestProducts: LatestProducts[]
  shoppingCart: ProductsInCart[]
}

const Home: NextPageWithLayout<HomeProps> = ({
  latestProducts,
  shoppingCart,
}) => {
  const dispatch = useDispatch()
  dispatch(fetchProducts(shoppingCart))

  return (
    <>
      <Head>
        <title>Coronado Pet - Home</title>
      </Head>
      <Carrossel />
      <ProductCollection title="Mais vendidos" products={latestProducts} />
      <SubBannerContainer>
        <SubBanner href="/cachorros">
          <Image src="/images/sub-banner-1.webp" alt="" fill />
          <Description>
            <p>Alimentação para Cães e Filhotes</p>
            <Button size="sm" type="button">
              Confira
            </Button>
          </Description>
        </SubBanner>
        <SubBanner href="/cachorros">
          <Image src="/images/sub-banner-2.webp" alt="" fill />
          <Description>
            <p>Cuide da beleza do seu Pet!</p>
            <Button size="sm" type="button">
              Confira
            </Button>
          </Description>
        </SubBanner>
        <SubBanner href="/gatos">
          <Image src="/images/sub-banner-3.webp" alt="" fill />
          <Description position="right">
            <p>Comida de gato mais saudável?</p>
            <Button size="sm" type="button">
              Confira
            </Button>
          </Description>
        </SubBanner>
      </SubBannerContainer>
      <ProductCollection title="Lançamentos" products={latestProducts} />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req as any, res as any),
  )
  const latestProducts = await getLatestProducts()

  const userEmail = session?.user?.email
  const shoppingCart =
    typeof userEmail === 'string' && (await shoppingCartByUserId(userEmail))
  return {
    props: {
      latestProducts: JSON.parse(JSON.stringify(latestProducts)),
      shoppingCart: JSON.parse(JSON.stringify(shoppingCart)),
    },
  }
}

export default Home
