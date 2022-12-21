import Link from 'next/link'
import { Bird, Cat, Dog, FirstAid, Flower } from 'phosphor-react'
import { ImageItemContainer, LinkItem, MenuBarContainer } from './styles'

interface MenuBarProps {
  isMobile?: boolean
}

export const MenuBar = ({ isMobile }: MenuBarProps) => {
  if (isMobile) {
    return (
      <MenuBarContainer>
        <LinkItem href="/cachorros" prefetch={false}>
          <ImageItemContainer>
            <Dog size="4rem" />
          </ImageItemContainer>
          <p>Cachorro</p>
        </LinkItem>
        <LinkItem href="/gatos" prefetch={false}>
          <ImageItemContainer>
            <Cat size="4rem" />
          </ImageItemContainer>
          <p>Gato</p>
        </LinkItem>
        <LinkItem href="/passaros" prefetch={false}>
          <ImageItemContainer>
            <Bird size="4rem" />
          </ImageItemContainer>
          <p>Pássaro</p>
        </LinkItem>
        <LinkItem href="/casa-e-jardim" prefetch={false}>
          <ImageItemContainer>
            <Flower size="4rem" />
          </ImageItemContainer>
          <p>Casa e Jardim</p>
        </LinkItem>
        <LinkItem href="/servicos-veterinarios" prefetch={false}>
          <ImageItemContainer>
            <FirstAid size="4rem" />
          </ImageItemContainer>
          <p>Serviços Veterinários</p>
        </LinkItem>
      </MenuBarContainer>
    )
  }
  return (
    <MenuBarContainer>
      <Link href="/cachorros" prefetch={false}>
        Cachorro
      </Link>
      <Link href="/gatos" prefetch={false}>
        Gato
      </Link>
      <Link href="/passaros" prefetch={false}>
        Pássaro
      </Link>
      <Link href="/casa-e-jardim" prefetch={false}>
        Casa e Jardim
      </Link>
      <Link href="/servicos-veterinarios" prefetch={false}>
        Serviços Veterinários
      </Link>
    </MenuBarContainer>
  )
}
