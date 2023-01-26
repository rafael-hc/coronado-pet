import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import { CardProduct } from '../../components/CardProduct'
import { Filter } from '../../components/FilterSidebar'
import { FilterMobile } from '../../components/Mobile/FilterMobile'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { getProductsByPet } from '../../services/products/useCases/getProduct/byPet'
import { GridProducts, PageProductsContainer } from './styles'
import { BreakPoint } from '../../utils/breakPoints'
import { Product } from '../../utils/interfaces/productInterface'

interface ProductsProps {
  category: string
  products: Product[]
}

function Products({ category, products }: ProductsProps) {
  const { sm } = BreakPoint()
  return (
    <>
      <Head>
        <title>{`Coronado Pet - ${products[0].pet}`}</title>
      </Head>
      <PageProductsContainer>
        {sm ? <FilterMobile /> : <Filter />}
        <GridProducts>
          {products.map((product) => (
            <CardProduct
              key={product.id}
              imageUrl={product.imageUrl[0]}
              name={product.name}
              price={product.price}
              slug={product.slug!}
              landscape={sm}
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
