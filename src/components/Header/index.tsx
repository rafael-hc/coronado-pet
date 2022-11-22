import Image from 'next/image'
import Link from 'next/link'
import { Heart, MagnifyingGlass, ShoppingCart } from 'phosphor-react'

import { HeaderContainer, Icons, Logo, SearchBar } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar>
        <button>
          <MagnifyingGlass size={24} />
        </button>
        <input type="text" placeholder="pesquisar..." />
      </SearchBar>
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
