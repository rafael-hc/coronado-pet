import Head from 'next/head'
import { ReactElement } from 'react'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { styled } from '../styles'
import { NextPageWithLayout } from './_app'

const Button = styled('button', {
  border: 'none',
  backgroundColor: '$primary',
  borderRadius: 8,
  padding: '1rem',
  cursor: 'pointer',
})

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Coronado Pet - Home</title>
      </Head>
      <div>
        <h1>Hello World!</h1>
        <Button>Oi</Button>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
