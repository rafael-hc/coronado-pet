import { Categories, Products } from '@prisma/client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import { BestSller } from '../components/BestSeller'
import { Carrossel } from '../components/Carrossel'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { getAllProducts, getLatestProducts } from '../services/products'
import { Button } from '../styles/components/button'
import {
  Description,
  SubBanner,
  SubBannerContainer,
} from '../styles/pages/home'
import { LatestProducts } from '../utils/interfaces/productInterface'

interface HomeProps {
  products: (Products & {
    categories: Categories[]
  })[]
  latestProducts: LatestProducts[]
}

export default function Home({ products, latestProducts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Coronado Pet - Home</title>
      </Head>
      <Carrossel />
      <BestSller title="Mais vendidos" products={latestProducts} />
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
      <BestSller title="Lançamentos" products={latestProducts} />
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
