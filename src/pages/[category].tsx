import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'
import CardProduct from '../components/CardProduct'
import FilterSidebar from '../components/FilterSidebar'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { PageProductsContainer } from '../styles/pages/products'

interface ProductsProps {
  category: string
}

const Products = ({ category }: ProductsProps) => {
  return (
    <PageProductsContainer>
      <FilterSidebar />
      <div style={{ display: 'flex' }}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </PageProductsContainer>
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
