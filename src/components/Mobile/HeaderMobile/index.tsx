import * as Popover from '@radix-ui/react-popover'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import {
  List,
  ShoppingCartSimple,
  SignIn,
  SignOut,
  User,
  X,
} from 'phosphor-react'
// import { singOut } from '../../../store/reducers/loginSlice'
import { CartModal } from '../../CartModal'
import { Logo } from '../../Header/styles'
import {
  ButtonAccount,
  Flex,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  StyledArrow,
} from '../../TopBar/styles'
import { MenuBarMobile } from '../MenuBarMobile'
import { ColumnHeader, HeaderMobileContainer } from './styles'

export function HeaderMobile() {
  const { data: session } = useSession()
  const handleLogout = () => {
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
        <Popover.Root>
          <PopoverTrigger asChild>
            <ButtonAccount>
              <User size={24} />
            </ButtonAccount>
          </PopoverTrigger>
          <Popover.Portal>
            <PopoverContent sideOffset={5}>
              <Flex css={{ flexDirection: 'column', gap: 10 }}>
                {session ? (
                  <button onClick={handleLogout} style={{ cursor: 'pointer' }}>
                    {`Logado como: ${session.user?.name}`}
                    <SignOut size={24} />
                  </button>
                ) : (
                  <Link href="/signin">
                    <SignIn size={24} />
                    Entre ou Cadastre-se
                  </Link>
                )}
              </Flex>
              <PopoverClose aria-label="Close">
                <X />
              </PopoverClose>
              <StyledArrow />
            </PopoverContent>
          </Popover.Portal>
        </Popover.Root>
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
