import Image from 'next/image'
import { parseCookies } from 'nookies'
import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../../@designSystem/components/button'
import { Heading } from '../../../@designSystem/components/heading'
import { QuantityInput } from '../../../@designSystem/components/quantity-input'
import { Text } from '../../../@designSystem/components/text'
import { api } from '../../../lib/axios'
import { RootState } from '../../../store'
import {
  decrementQuantity,
  deleteProduct,
  incrementQuantity,
} from '../../../store/reducers/cartSlice'
import { BreakPoint } from '../../../utils/breakPoints'
import {
  ButtonDelete,
  CartContainer,
  CartContent,
  CartFooter,
  CartHeader,
  CartItem,
  CartItemDetails,
  CartItemMedia,
  CartItemPrice,
  CartItemQuantity,
  CartItemTotal,
} from './styles'

interface CartComponentProps {
  userId?: string
  isMobile?: boolean
}

export function CartComponent({ userId, isMobile }: CartComponentProps) {
  const { products, address } = useSelector((state: RootState) => state)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const [addressSelected, setAddressSelected] = useState(0)
  const [addressId, setAddressId] = useState(address[0].id)
  const dispatch = useDispatch()
  const breakPoint = BreakPoint()

  async function handleIncrementQuantityOfProduct(productId: string) {
    dispatch(incrementQuantity(productId))
    await api.put('/cart/increment-product', {
      productId,
    })
  }
  async function handleDecrementQuantityOfProduct(productId: string) {
    dispatch(decrementQuantity(productId))
    await api.put('/cart/decrement-product', {
      productId,
    })
  }

  async function handleDeleteProduct(productId: string) {
    dispatch(deleteProduct(productId))
    await api.delete(`/cart/delete-product/${productId}`)
  }

  async function handleCheckout() {
    const { '@coronado_pet:cartId': cartId } = parseCookies()
    const lineItens = products.map((product) => {
      return {
        price_data: {
          product_data: {
            name: product.name,
            images: [`https://coronado-pet.vercel.app/${product.imageUrl}`],
          },
          currency: 'BRL',
          unit_amount: product.price,
        },
        quantity: product.quantity,
      }
    })
    const params = {
      address_id: addressId,
      user_id: userId,
      shopping_cart_id: cartId,
    }
    try {
      setIsCreatingCheckoutSession(true)

      const response = await api.post('/checkout', {
        lineItens,
        params,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
    }
  }

  return (
    <CartContainer>
      <CartHeader>
        <Heading as="h1">Carrinho</Heading>
      </CartHeader>
      <CartContent>
        {products.map((product) => (
          <CartItem key={product.productId}>
            <CartItemMedia>
              <Image
                src={product.imageUrl}
                width={100}
                height={100}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                alt=""
              />
            </CartItemMedia>
            <CartItemDetails>
              <Text>{product.name}</Text>
            </CartItemDetails>
            <CartItemPrice>
              {(product.price / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </CartItemPrice>
            <CartItemQuantity>
              <QuantityInput
                decrement={() => {
                  handleDecrementQuantityOfProduct(product.productId)
                }}
                increment={() => {
                  handleIncrementQuantityOfProduct(product.productId)
                }}
                quantity={product.quantity}
              />
              {breakPoint.lg && (
                <ButtonDelete
                  onClick={() => handleDeleteProduct(product.productId)}
                >
                  <Trash size={20} />
                </ButtonDelete>
              )}
            </CartItemQuantity>
            <CartItemTotal>
              {breakPoint.sm ? (
                <ButtonDelete
                  onClick={() => handleDeleteProduct(product.productId)}
                >
                  <Trash size={20} />
                </ButtonDelete>
              ) : (
                <Text>
                  {((product.price * product.quantity) / 100).toLocaleString(
                    'pt-BR',
                    {
                      style: 'currency',
                      currency: 'BRL',
                    },
                  )}
                </Text>
              )}
            </CartItemTotal>
          </CartItem>
        ))}

        {!isMobile && (
          <CartFooter>
            <div>
              <Heading>Selecione o endereço:</Heading>
              <div style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>
                {address.map((item, index) => (
                  <Button
                    key={item.id}
                    style={{
                      backgroundColor:
                        addressSelected !== index ? '#b1b1b1' : '#32835a',
                    }}
                    onClick={() => {
                      setAddressId(item.id)
                      setAddressSelected(index)
                    }}
                  >
                    {item.street_address}
                  </Button>
                ))}
              </div>
            </div>
            <Button variant="secondary">Continuar comprando</Button>

            <Text>Total</Text>
            <Button
              onClick={handleCheckout}
              disabled={isCreatingCheckoutSession}
            >
              Continuar
            </Button>
          </CartFooter>
        )}
      </CartContent>
    </CartContainer>
  )
}
