import Image from 'next/image'
import { ShoppingCart } from 'phosphor-react'
import { Button } from '../../@designSystem/components/button'
import {
  CardContainer,
  CardImage,
  CardInfo,
  Price,
  Rating,
  Title,
} from './styles'

interface CardProductProps {
  name: string
  price: number
  imageUrl: string
  slug: string
  landscape?: boolean
}

export function CardProduct({
  name,
  imageUrl,
  price,
  slug,
  landscape,
}: CardProductProps) {
  return (
    <CardContainer
      href={`/product/${slug}`}
      prefetch={false}
      draggable={false}
      landscape={landscape}
    >
      <CardImage>
        <Image src={imageUrl} alt={name} fill quality={75} draggable={false} />
      </CardImage>
      <CardInfo>
        <Title size="sm">{name}</Title>
        <Rating>*****</Rating>
        <Price>
          {(price / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Price>
        <Button type="button" size="sm">
          <ShoppingCart />
          Comprar
        </Button>
      </CardInfo>
    </CardContainer>
  )
}
