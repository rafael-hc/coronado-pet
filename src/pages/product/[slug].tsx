import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { SliderThumb } from '../../components/SliderTumb'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { getProductBySlug } from '../../services/products/useCases/getProduct/bySlug'
import {
  DescriptionProduct,
  InfoProduct,
  ProductContainer,
} from '../../styles/pages/product'
import { Product as IProduct } from '../../utils/interfaces/productInterface'
import { Category } from '../../utils/interfaces/Category'

interface ProductProps {
  product: IProduct & {
    categories: Category[]
  }
}

const Product = ({ product }: ProductProps) => {
  const { isFallback } = useRouter()
  // const { imageUrl, name } = product

  if (isFallback) {
    return <h1 style={{ margin: '0 auto' }}>Loading</h1>
  }

  return (
    <ProductContainer>
      <InfoProduct>
        <div>
          <SliderThumb images={product.imageUrl} thumbnailPosition="botton" />
        </div>
        <div>Lado Informações</div>
      </InfoProduct>
      <DescriptionProduct>Descrição</DescriptionProduct>
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
  const product = await getProductBySlug(slug!)
  return {
    props: {
      product: {
        id: product?.id,
        name: product?.name,
        slug: product?.slug,
        price: product?.price,
        costPrice: product?.costPrice,
        description: product?.description,
        imageUrl: product?.imageUrl,
        size: product?.size,
        inventory: product?.inventory,
        registeredAt: JSON.parse(JSON.stringify(product?.registeredAt)),
        categories: product?.categories,
      },
    },
    revalidate: 60 * 60 * 4, // 4horas
  }
}
