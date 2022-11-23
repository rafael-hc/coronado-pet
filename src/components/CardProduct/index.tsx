import Image from 'next/image'
import { ShoppingCart } from 'phosphor-react'
import { Button } from '../../styles/components/button'
import { CardContainer, CardImage, Rating, Tilte } from './styles'

const CardProduct = () => {
  return (
    <CardContainer href="#">
      <CardImage>
        <Image
          src="/images/62fd4ba2a1be394a91a84cf3.png"
          alt="Ração"
          fill
          quality={75}
        />
      </CardImage>
      <div>
        <Tilte>Ração Golden especial</Tilte>
        <Rating>*****</Rating>
        <p>R$ 190,00</p>
        <Button type="button" size={2} icon>
          <ShoppingCart />
          Comprar
        </Button>
      </div>
    </CardContainer>
  )
}

export default CardProduct
