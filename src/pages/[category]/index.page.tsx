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
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'
import { shoppingCartByUserId } from '../../services/cart/byUserId'
import { fetchProducts, ProductsInCart } from '../../store/reducers/cartSlice'
import { useDispatch } from 'react-redux'

interface ProductsProps {
  category: string
  products: Product[]
  shoppingCart: ProductsInCart[]
}

function Products({ category, products, shoppingCart }: ProductsProps) {
  const { sm } = BreakPoint()
  const dispatch = useDispatch()
  dispatch(fetchProducts(shoppingCart))
  return (
    <>
      <Head>
        <title>{`Coronado Pet - ${products[0].pet}`}</title>
      </Head>
      <PageProductsContainer>
        {sm ? <FilterMobile /> : <Filter />}
        <GridProducts>
          {products.map((product) => (
            <CardProduct key={product.id} product={product} landscape={sm} />
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
  { category: string }
> = async ({ params, req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req as any, res as any),
  )
  const category = params?.category
  const products = await getProductsByPet(category!)
  const userEmail = session?.user?.email
  const shoppingCart =
    typeof userEmail === 'string' && (await shoppingCartByUserId(userEmail))
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      category: JSON.parse(JSON.stringify(category)),
      shoppingCart: JSON.parse(JSON.stringify(shoppingCart)),
    },
  }
}
