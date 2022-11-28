import Image from 'next/image'
import { ShoppingCart } from 'phosphor-react'
import { Button } from '../../styles/components/button'
import { CardContainer, CardImage, Rating, Tilte } from './styles'

interface CardProductProps {
  name: string
  price: number
  imageUrl: string
  slug: string
}

const CardProduct = ({ name, imageUrl, price, slug }: CardProductProps) => {
  return (
    <CardContainer href={`/product/${slug}`}>
      <CardImage>
        <Image src={imageUrl} alt={name} fill quality={75} />
      </CardImage>
      <div>
        <Tilte>{name}</Tilte>
        <Rating>*****</Rating>
        <p>
          {(price / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <Button type="button" size={2} icon>
          <ShoppingCart />
          Comprar
        </Button>
      </div>
    </CardContainer>
  )
}

export default CardProduct
