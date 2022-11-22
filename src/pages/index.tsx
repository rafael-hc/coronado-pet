import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import { BestSller } from '../components/BestSeller'
import { Carrossel } from '../components/Carrossel'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Button } from '../styles/components/button'
import { NextPageWithLayout } from './_app'
import { Description, SubBanner, SubBannerContainer } from './_homeStyle'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Coronado Pet - Home</title>
      </Head>
      <Carrossel />
      <BestSller title="Mais vendidos" />
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
      <BestSller title="Lançamentos" />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
