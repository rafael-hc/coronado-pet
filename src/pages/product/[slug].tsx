import { Categories, Products } from '@prisma/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { getProduct } from '../../services/products'

interface ProductProps {
  product: (Products & {
    categories: Categories[]
  })[]
}

const Product = ({ product }: ProductProps) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <h1 style={{ margin: '0 auto' }}>Loading</h1>
  }

  return (
    <div>
      <p>{JSON.stringify(product)}</p>
    </div>
  )
}

export default Product

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: 'racao-premier-formula-para-caes-adultos-de-racas-grandes-e-gigantes-sabor-carne-15kg',
        },
      },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({
  params,
}) => {
  const slug = params?.slug
  const product = await getProduct(slug!)
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 4, // 4horas
  }
}
