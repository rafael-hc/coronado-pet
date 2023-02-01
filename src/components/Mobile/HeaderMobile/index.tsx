import * as Popover from '@radix-ui/react-popover'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { List, ShoppingCartSimple, UserCircle } from 'phosphor-react'
import { Button } from '../../../@designSystem/components/button'
import { Text } from '../../../@designSystem/components/text'
import { CartModal } from '../../CartModal'
import { Logo } from '../../Header/styles'
import { MenuBarMobile } from '../MenuBarMobile'
import {
  ColumnHeader,
  HeaderMobileContainer,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from './styles'

export function HeaderMobile() {
  const { data: session } = useSession()

  async function handleSignOut() {
    signOut()
  }

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
        {session ? (
          <Popover.Root>
            <PopoverTrigger asChild>
              <button title="Carrinho de compras">
                <UserCircle size={24} />
                {`Olá ${session.user?.name?.split(' ', 1)}`}
              </button>
            </PopoverTrigger>
            <Popover.Portal>
              <PopoverContent>
                <Link href="/customer/account">
                  <Text>Minha conta</Text>
                </Link>
                <Link href="/customer/orders">
                  <Text>Meus Pedidos</Text>
                </Link>
                <Button size="sm" onClick={handleSignOut}>
                  Sair
                </Button>
                <PopoverArrow />
              </PopoverContent>
            </Popover.Portal>
          </Popover.Root>
        ) : (
          <Link href="/signin" style={{ color: 'black' }}>
            <UserCircle size={24} />
          </Link>
        )}

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
