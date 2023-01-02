import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ReactElement, useState } from 'react'
import { SliderThumb } from '../../components/SliderTumb'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { getProductBySlug } from '../../services/products/useCases/getProduct/bySlug'
import {
  Amount,
  ButtonChangeAmount,
  Buy,
  DescriptionProduct,
  DetailsProduct,
  InfoContent,
  InfoProduct,
  Information,
  InputQnt,
  Price,
  ProductContainer,
  Stock,
  Title,
} from './styles'
import { Product as IProduct } from '../../utils/interfaces/productInterface'
import { Category } from '../../utils/interfaces/Category'
import Head from 'next/head'
import { prisma } from '../../utils/prisma'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Button } from '../../styles/components/button'
import { NextPageWithLayout } from '../_app.page'

interface ProductProps {
  product: IProduct & {
    categories: Category[]
  }
}

const Product: NextPageWithLayout<ProductProps> = ({
  product,
}: ProductProps) => {
  const [amount, setAmount] = useState(1)
  const { isFallback } = useRouter()
  // const { imageUrl, name } = product

  function handleIncreaseQuantityOfProducts() {
    if (amount < 10) {
      setAmount((state) => state + 1)
    }
  }

  function handleDecreaseQuantityOfProducts() {
    if (amount >= 2) {
      setAmount((state) => state - 1)
    }
  }

  if (isFallback) {
    return <h1 style={{ margin: '0 auto' }}>Loading</h1>
  }

  return (
    <>
      <Head>
        <title>{`Coronaro Pet - ${product.name}`}</title>
      </Head>
      <ProductContainer>
        <InfoProduct>
          <div>
            <SliderThumb images={product.imageUrl} thumbnailPosition="bottom" />
          </div>
          <DetailsProduct>
            <header>
              <Title>{product.name}</Title>
              <Information>
                <span>***** |</span>
                <span>{product.brand && `${product.brand} |`}</span>
                <Stock isLow={product.inventory <= 10}>
                  {product.inventory > 10 ? 'Em estoque' : 'Últimas unidades'}
                </Stock>
              </Information>
            </header>
            <InfoContent>
              <Price>
                {(product.price / 100).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Price>
              <Buy>
                <InputQnt>
                  <ButtonChangeAmount
                    onClick={handleDecreaseQuantityOfProducts}
                    title="Diminuir quantidade"
                  >
                    <Minus />
                  </ButtonChangeAmount>
                  <Amount
                    type="number"
                    id=""
                    value={amount}
                    min="1"
                    max="10"
                    readOnly
                  />
                  <ButtonChangeAmount
                    onClick={handleIncreaseQuantityOfProducts}
                    title="Aumentar quantidade"
                  >
                    <Plus />
                  </ButtonChangeAmount>
                </InputQnt>

                <Button icon size={2} type="submit" w-full>
                  {' '}
                  <ShoppingCart /> Comprar
                </Button>
              </Buy>
            </InfoContent>
          </DetailsProduct>
        </InfoProduct>
        <DescriptionProduct>
          <h2>Descrições:</h2>
          {product.description.map((desc) => (
            <p key={desc}>{desc}</p>
          ))}
        </DescriptionProduct>
      </ProductContainer>
    </>
  )
}

export default Product

Product.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await prisma.products.findMany({
    take: 10,
    select: {
      slug: true,
    },
  })

  const paths = slugs.map((slug) => ({ params: slug }))
  return {
    paths,
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
        brand: product?.brand,
        size: product?.size,
        inventory: product?.inventory,
        registeredAt: JSON.parse(JSON.stringify(product?.registeredAt)),
        categories: product?.categories,
      },
    },
    revalidate: 60 * 60 * 4, // 4horas
  }
}
