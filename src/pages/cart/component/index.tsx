import Image from 'next/image'
import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { Button } from '../../../@designSystem/components/button'
import { Heading } from '../../../@designSystem/components/heading'
import { QuantityInput } from '../../../@designSystem/components/quantity-input'
import { Text } from '../../../@designSystem/components/text'
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

export function CartComponent() {
  const [quantity, setQuantity] = useState(1)
  const breakPoint = BreakPoint()
  return (
    <CartContainer>
      <CartHeader>
        <Heading as="h1">Carrinho</Heading>
      </CartHeader>
      <CartContent>
        <CartItem>
          <CartItemMedia>
            <Image
              src="/images/1656341757612.webp"
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
            <Text>Detalhesndsabdfs dsajn asbsamc </Text>
            <Text>Detalhesndsabdfs dsajn asbsamc </Text>
          </CartItemDetails>
          <CartItemPrice>
            {(10000 / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </CartItemPrice>
          <CartItemQuantity>
            <QuantityInput
              decrement={() => {
                if (quantity >= 2) {
                  setQuantity((state) => state - 1)
                }
              }}
              increment={() => {
                setQuantity((state) => state + 1)
              }}
              quantity={quantity}
            />
            {breakPoint.lg && (
              <ButtonDelete>
                <Trash size={20} />
              </ButtonDelete>
            )}
          </CartItemQuantity>
          <CartItemTotal>
            {breakPoint.sm ? (
              <ButtonDelete>
                <Trash size={20} />
              </ButtonDelete>
            ) : (
              <Text>
                {((10000 * quantity) / 100).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>
            )}
          </CartItemTotal>
        </CartItem>
        <CartItem>
          <CartItemMedia>
            <Image
              src="/images/1656341757612.webp"
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
            <Text>Detalhesndsabdfs dsajn asbsamc </Text>
            <Text>Detalhesndsabdfs dsajn asbsamc </Text>
          </CartItemDetails>
          <CartItemPrice>
            {(10000 / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </CartItemPrice>
          <CartItemQuantity>
            <QuantityInput
              decrement={() => {
                if (quantity >= 2) {
                  setQuantity((state) => state - 1)
                }
              }}
              increment={() => {
                setQuantity((state) => state + 1)
              }}
              quantity={quantity}
            />
            {breakPoint.lg && (
              <ButtonDelete>
                <Trash size={20} />
              </ButtonDelete>
            )}
          </CartItemQuantity>
          <CartItemTotal>
            {breakPoint.sm ? (
              <ButtonDelete>
                <Trash size={20} />
              </ButtonDelete>
            ) : (
              <Text>
                {((10000 * quantity) / 100).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>
            )}
          </CartItemTotal>
        </CartItem>
        <CartFooter>
          <Button variant="secondary">Continuar comprando</Button>

          <Text>Total</Text>
          <Button>Continuar</Button>
        </CartFooter>
      </CartContent>
    </CartContainer>
  )
}
