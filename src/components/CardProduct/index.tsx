import Image from 'next/image'
import { CardContainer, CardImage } from './styles'

const CardProduct = () => {
  return (
    <CardContainer>
      <CardImage>
        <Image
          src="/images/62fd4ba2a1be394a91a84cf3.png"
          alt="Ração"
          width={200}
          height={141}
          style={{ objectFit: 'cover' }}
        />
      </CardImage>
      <h2>item produto</h2>
    </CardContainer>
  )
}

export default CardProduct
