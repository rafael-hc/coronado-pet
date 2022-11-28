import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import FilterSidebar from '../components/FilterSidebar'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { PageProductsContainer } from '../styles/pages/products'

interface ProductsProps {
  category: string
}

const Products = ({ category }: ProductsProps) => {
  return (
    <>
      <Head>
        <title>{`Coronado Pet - ${
          category[0].toUpperCase() + category.substring(1)
        }`}</title>
      </Head>
      <PageProductsContainer>
        <FilterSidebar />
        <div style={{ display: 'flex' }}></div>
      </PageProductsContainer>
    </>
  )
}

export default Products

Products.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export const getServerSideProps: GetServerSideProps<
  any,
  { category: string }
> = async ({ params }) => {
  const category = params?.category
  console.log(category)
  return {
    props: {
      category,
    },
  }
}
