import { Products as IProduct } from '@prisma/client'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import CardProduct from '../../components/CardProduct'
import FilterSidebar from '../../components/FilterSidebar'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { getProductsByPet } from '../../services/products/useCases/getProduct/byPet'
import {
  GridProducts,
  PageProductsContainer,
} from '../../styles/pages/products'

interface ProductsProps {
  category: string
  products: IProduct[]
}

const Products = ({ category, products }: ProductsProps) => {
  return (
    <>
      <Head>
        <title>{`Coronado Pet - ${
          category[0].toUpperCase() + category.substring(1)
        }`}</title>
      </Head>
      <PageProductsContainer>
        <FilterSidebar />
        <GridProducts>
          {products.map((product) => (
            <CardProduct
              key={product.id}
              imageUrl={product.imageUrl[0]}
              name={product.name}
              price={product.price}
              slug={product.slug!}
            />
          ))}
        </GridProducts>
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
  { categorys: string }
> = async ({ params }) => {
  const category = params?.categorys
  const products = await getProductsByPet(category!)
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      category: JSON.parse(JSON.stringify(category)),
    },
  }
}