import * as Popover from '@radix-ui/react-popover'
import Image from 'next/image'
import Link from 'next/link'
import { List, ShoppingCartSimple } from 'phosphor-react'
import CartModal from '../../CartModal'
import { Logo } from '../../Header/styles'
import MenuBarMobile from '../MenuBarMobile'
import { ColumnHeader, HeaderMobileContainer } from './styles'

const HeaderMobile = () => {
  return (
    <HeaderMobileContainer>
      <ColumnHeader side="left">
        <Popover.Root>
          <Popover.Trigger asChild>
            <button title="Menu">
              <List size={24} />
            </button>
          </Popover.Trigger>
          <MenuBarMobile />
        </Popover.Root>
      </ColumnHeader>
      <Logo>
        <Link href="/">
          <Image src="/images/logo-coronado.jpg" fill quality={75} alt="" />
        </Link>
      </Logo>
      <ColumnHeader side="right">
        <Popover.Root>
          <Popover.Trigger asChild>
            <button title="Carrinho de compras">
              <ShoppingCartSimple size={24} />
            </button>
          </Popover.Trigger>
          <CartModal />
        </Popover.Root>
      </ColumnHeader>
    </HeaderMobileContainer>
  )
}

export default HeaderMobile
