import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ChangeEvent, ReactElement, useState } from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { SliderThumb } from '../../components/SliderTumb'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { getProductBySlug } from '../../services/products/useCases/getProduct/bySlug'
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  Buy,
  DescriptionProduct,
  DetailsProduct,
  InfoContent,
  InfoProduct,
  Information,
  Price,
  ProductContainer,
  Stock,
  Title,
} from './styles'
import { Product as IProduct } from '../../utils/interfaces/productInterface'
import { Category } from '../../utils/interfaces/Category'
import Head from 'next/head'
import { prisma } from '../../lib/prisma'
import { ShoppingCart } from 'phosphor-react'
import { NextPageWithLayout } from '../_app.page'
import { QuantityInput } from '../../@designSystem/components/quantity-input'
import { Button } from '../../@designSystem/components/button'
import { api } from '../../lib/axios'
import { useDispatch } from 'react-redux'
import { addProducts } from '../../store/reducers/cartSlice'
import { signIn, useSession } from 'next-auth/react'
import { TextInput } from '../../@designSystem/components/textInput'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputError } from '../signin/styles'
import { FormError } from '../signup/styles'
import { Text } from '../../@designSystem/components/text'

interface ProductProps {
  product: IProduct & {
    categories: Category[]
  }
}

const loginFormSchema = z.object({
  email: z.string().email({ message: 'Digite um e-mail válido' }),
})

type loginFormData = z.infer<typeof loginFormSchema>

const validaEmail = z.string().email()

const Product: NextPageWithLayout<ProductProps> = ({
  product,
}: ProductProps) => {
  const [open, setOpen] = useState(false)
  const [addingToCart, setAddingToCart] = useState(false)
  const [amount, setAmount] = useState(1)
  const [emailExists, setEmailExists] = useState(true)
  const { isFallback } = useRouter()
  const { data: session } = useSession()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginFormData>({ resolver: zodResolver(loginFormSchema) })

  async function verifyEmailExists(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    try {
      validaEmail.parse(event.target.value)
      const res = await api.get(`/user/verify-email/${event.target.value}`)
      setEmailExists(res.data)
    } catch (e) {}
  }

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

  async function handleAddToCart(productId: string, quantity: number) {
    setAddingToCart(true)
    if (session) {
      await api.post('/cart/add-product', { productId, quantity })
      dispatch(
        addProducts({
          productId: product.id,
          quantity: amount,
          name: product.name,
          imageUrl: product.imageUrl[0],
          price: product.price,
        }),
      )
      setAddingToCart(false)
    } else {
      setAddingToCart(false)
      setOpen(true)
    }
  }
  async function handleLogin({ email }: loginFormData) {
    await signIn('email', { email, redirect: false })
  }

  if (isFallback) {
    return <h1 style={{ margin: '0 auto' }}>Loading</h1>
  }

  return (
    <>
      <Head>
        <title>{`Coronado Pet - ${product.name}`}</title>
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
                <QuantityInput
                  decrement={handleDecreaseQuantityOfProducts}
                  increment={handleIncreaseQuantityOfProducts}
                  quantity={amount}
                />
                {/* <InputQnt>
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
                </InputQnt> */}

                <Button
                  type="button"
                  onClick={() => handleAddToCart(product.id, amount)}
                  disabled={addingToCart}
                >
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
      <AlertDialog.Root open={open} onOpenChange={setOpen}>
        <AlertDialog.Portal>
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogTitle>Login</AlertDialogTitle>
            <AlertDialogDescription>
              Faça login para adicionar ao carrinho.
            </AlertDialogDescription>
            <form onSubmit={handleSubmit(handleLogin)}>
              <TextInput.Root>
                <TextInput.Input
                  type="email"
                  placeholder="Digite seu e-mail..."
                  {...register('email')}
                  onChange={verifyEmailExists}
                />
              </TextInput.Root>
              {errors.email?.message && (
                <InputError>{String(errors.email.message)}</InputError>
              )}
              {emailExists ? (
                ''
              ) : (
                <FormError size="sm">E-mail não cadastrado</FormError>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                style={{ marginTop: '1rem' }}
              >
                Entrar
              </Button>
            </form>
            <Text>Entrar com o Google</Text>
            <Button
              type="button"
              onClick={() => {
                signIn('google', { redirect: false })
              }}
            >
              Logar com Google
            </Button>
          </AlertDialogContent>
        </AlertDialog.Portal>
      </AlertDialog.Root>
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
        costPrice: product?.cost_price,
        description: product?.description,
        imageUrl: product?.image_url,
        brand: product?.brand,
        size: product?.size,
        inventory: product?.inventory,
        registeredAt: JSON.parse(JSON.stringify(product?.registered_at)),
      },
    },
    revalidate: 60 * 60 * 4, // 4horas
  }
}
