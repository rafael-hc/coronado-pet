import { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Categories, Products } from '@prisma/client'
import { Bestseller } from '../components/Bestseller'
import { Carrossel } from '../components/Carrossel'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { getAllProducts } from '../services/products/useCases/getProduct/all'
import { getLatestProducts } from '../services/products/useCases/getProduct/latest'
import { Button } from '../styles/components/button'
import { Description, SubBanner, SubBannerContainer } from './home/styles'
import { LatestProducts } from '../utils/interfaces/productInterface'
import { NextPageWithLayout } from './_app.page'

interface HomeProps {
  products: (Products & {
    categories: Categories[]
  })[]
  latestProducts: LatestProducts[]
}

const Home: NextPageWithLayout<HomeProps> = ({ products, latestProducts }) => {
  return (
    <>
      <Head>
        <title>Coronado Pet - Home</title>
      </Head>
      <Carrossel />
      <Bestseller title="Mais vendidos" products={latestProducts} />
      <SubBannerContainer>
        <SubBanner href="/cachorros">
          <Image src="/images/sub-banner-1.webp" alt="" fill />
          <Description>
            <p>Alimentação para Cães e Filhotes</p>
            <Button size={2} type="button">
              Confira
            </Button>
          </Description>
        </SubBanner>
        <SubBanner href="/cachorros">
          <Image src="/images/sub-banner-2.webp" alt="" fill />
          <Description>
            <p>Cuide da beleza do seu Pet!</p>
            <Button size={2} type="button">
              Confira
            </Button>
          </Description>
        </SubBanner>
        <SubBanner href="/gatos">
          <Image src="/images/sub-banner-3.webp" alt="" fill />
          <Description position="right">
            <p>Comida de gato mais saudável?</p>
            <Button size={2} type="button">
              Confira
            </Button>
          </Description>
        </SubBanner>
      </SubBannerContainer>
      <Bestseller title="Lançamentos" products={latestProducts} />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts()
  const latestProducts = await getLatestProducts()
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      latestProducts: JSON.parse(JSON.stringify(latestProducts)),
    },
    revalidate: 60 * 60 * 4, // 4horas
  }
}

export default Home
