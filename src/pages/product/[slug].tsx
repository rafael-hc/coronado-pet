import { Categories, Products } from '@prisma/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { getProduct } from '../../services/products'
import {
  DescriptionProduct,
  InfoProduct,
  ProductContainer,
} from '../../styles/pages/product'

interface ProductProps {
  product: Products & {
    categories: Categories[]
  }
}

const Product = ({ product }: ProductProps) => {
  const { isFallback } = useRouter()
  const { imageUrl, name } = product

  if (isFallback) {
    return <h1 style={{ margin: '0 auto' }}>Loading</h1>
  }

  return (
    <ProductContainer>
      <InfoProduct>
        <div>
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={400}
            style={{ objectFit: 'contain' }}
          />
          <div>
            <button type="button" style={{ cursor: 'pointer' }}>
              <Image
                src={imageUrl}
                alt={name}
                width={50}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </button>
            <button type="button" style={{ cursor: 'pointer' }}>
              <Image
                src={imageUrl}
                alt={name}
                width={50}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </button>
            <button type="button" style={{ cursor: 'pointer' }}>
              <Image
                src={imageUrl}
                alt={name}
                width={50}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </button>
            <button type="button" style={{ cursor: 'pointer' }}>
              <Image
                src={imageUrl}
                alt={name}
                width={50}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </button>
            <button type="button" style={{ cursor: 'pointer' }}>
              <Image
                src={imageUrl}
                alt={name}
                width={50}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </button>
          </div>
        </div>
        <div>lado b</div>
      </InfoProduct>
      <DescriptionProduct>a</DescriptionProduct>
    </ProductContainer>
  )
}

export default Product

Product.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

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
