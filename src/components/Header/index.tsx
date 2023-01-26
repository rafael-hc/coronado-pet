import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart, UserCircle } from 'phosphor-react'
import * as HoverCard from '@radix-ui/react-hover-card'
import { SearchProductBar } from '../SearchProductBar'

import {
  Flex,
  HeaderContainer,
  HoverCardArrow,
  HoverCardContent,
  Icons,
  ImageTrigger,
  Logo,
  Text,
} from './styles'
import { signOut, useSession } from 'next-auth/react'
// import { destroyCookie } from 'nookies'

export function Header() {
  const session = useSession()
  function handleSignOut() {
    // destroyCookie
    signOut()
  }
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
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <ImageTrigger href="/cart">
              <ShoppingCart size={24} />
            </ImageTrigger>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCardContent sideOffset={5}>
              <Flex css={{ flexDirection: 'column', gap: 7 }}>
                <Text>Carrinho</Text>
              </Flex>
              <HoverCardArrow />
            </HoverCardContent>
          </HoverCard.Portal>
        </HoverCard.Root>
        {!session.data ? (
          <ImageTrigger href="/signin">
            <UserCircle size={24} />
            <Text>Entrar</Text>
          </ImageTrigger>
        ) : (
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <ImageTrigger href="/cart">
                <Text>{`Olá ${session.data?.user?.name?.split(' ')[0]}`}</Text>
                <UserCircle size={24} />
              </ImageTrigger>
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCardContent sideOffset={5}>
                <Flex css={{ flexDirection: 'column', gap: 7 }}>
                  <Text>Minha conta</Text>
                  <Text style={{ cursor: 'pointer' }} onClick={handleSignOut}>
                    Sair
                  </Text>
                </Flex>

                <HoverCardArrow />
              </HoverCardContent>
            </HoverCard.Portal>
          </HoverCard.Root>
        )}
        {/* <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <ImageTrigger href="/cart">
              <Person size={24} />
              <Text>Entrar</Text>
            </ImageTrigger>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCardContent sideOffset={5}>
              <Flex css={{ flexDirection: 'column', gap: 7 }}>
                <Img
                  size="large"
                  src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                  alt="Radix UI"
                />
                <Flex css={{ flexDirection: 'column', gap: 15 }}>
                  <div>
                    <Text bold>Radix</Text>
                    <Text faded>@radix_ui</Text>
                  </div>
                  <Text>
                    Components, icons, colors, and templates for building
                    high-quality, accessible UI. Free and open-source.
                  </Text>
                  <Flex css={{ gap: 15 }}>
                    <Flex css={{ gap: 5 }}>
                      <Text bold>0</Text> <Text faded>Following</Text>
                    </Flex>
                    <Flex css={{ gap: 5 }}>
                      <Text bold>2,900</Text> <Text faded>Followers</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>

              <HoverCardArrow />
            </HoverCardContent>
          </HoverCard.Portal>
        </HoverCard.Root> */}
        {/* <Link href="/cart">
          <ShoppingCart size={24} />
        </Link> */}
      </Icons>
    </HeaderContainer>
  )
}
