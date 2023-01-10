import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart } from 'phosphor-react'
import * as HoverCard from '@radix-ui/react-hover-card'
import { SearchProductBar } from '../SearchProductBar'

import {
  Flex,
  HeaderContainer,
  HoverCardArrow,
  HoverCardContent,
  Icons,
  ImageTrigger,
  Img,
  Logo,
  Text,
} from './styles'

export function Header() {
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
        </HoverCard.Root>
        {/* <Link href="/cart">
          <ShoppingCart size={24} />
        </Link> */}
      </Icons>
    </HeaderContainer>
  )
}
