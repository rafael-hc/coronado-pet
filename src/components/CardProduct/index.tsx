import Image from 'next/image'
import { ShoppingCart } from 'phosphor-react'
import { Button } from '../../@designSystem/components/button'
import { LatestProducts } from '../../utils/interfaces/productInterface'
import {
  CardContainer,
  CardImage,
  CardInfo,
  Price,
  Rating,
  Title,
} from './styles'

interface CardProductProps {
  landscape?: boolean
  product: LatestProducts
}

export function CardProduct({ product, landscape }: CardProductProps) {
  return (
    <CardContainer
      href={`/product/${product.slug}`}
      prefetch={false}
      draggable={false}
      landscape={landscape}
    >
      <CardImage>
        <Image
          src={product.imageUrl[0]}
          alt={product.name}
          fill
          quality={75}
          draggable={false}
        />
      </CardImage>
      <CardInfo>
        <Title size="sm">{product.name}</Title>
        <Rating>*****</Rating>
        <Price>
          {(product.price / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Price>
        <Button type="button" size="sm" w-full>
          <ShoppingCart />
          Comprar
        </Button>
      </CardInfo>
    </CardContainer>
  )
}
