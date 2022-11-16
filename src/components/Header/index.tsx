import Image from 'next/image'
import Link from 'next/link'
import { Heart, MagnifyingGlass, ShoppingCart } from 'phosphor-react'

import { HeaderContainer, LadoDireito, Logo, SearchBar } from './styles'

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
          <Image
            src="/images/logo-coronado.jpg"
            width={120}
            height={75}
            quality={75}
            style={{ objectFit: 'cover' }}
            alt=""
          />
        </Link>
      </Logo>
      <LadoDireito>
        <Link href="/cart">
          <Heart size={24} />
        </Link>
        <Link href="/cart">
          <ShoppingCart size={24} />
        </Link>
      </LadoDireito>
    </HeaderContainer>
  )
}
