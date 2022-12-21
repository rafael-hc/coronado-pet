import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart } from 'phosphor-react'
import SearchProductBar from '../SearchProductBar'

import { HeaderContainer, Icons, Logo } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <SearchProductBar />
      <Logo>
        <Link href="/">
          <Image src="/images/logo-coronado.jpg" fill quality={75} alt="" />
        </Link>
      </Logo>
      <Icons>
        <Link href="/cart">
          <Heart size={24} />
        </Link>
        <Link href="/cart">
          <ShoppingCart size={24} />
        </Link>
      </Icons>
    </HeaderContainer>
  )
}
