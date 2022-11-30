import Link from 'next/link'
import { MenuBarContainer } from './styles'

export const MenuBar = () => {
  return (
    <MenuBarContainer>
      <Link href="/product/filter/cachorros" prefetch={false}>
        Cachorro
      </Link>
      <Link href="/product/filter/gatos" prefetch={false}>
        Gato
      </Link>
      <Link href="/product/filter/passaros" prefetch={false}>
        Pássaro
      </Link>
      <Link href="/product/filter/casa-e-jardim" prefetch={false}>
        Casa e Jardim
      </Link>
      <Link href="/product/filter/servicos-veterinarios" prefetch={false}>
        Serviços Veterinários
      </Link>
    </MenuBarContainer>
  )
}
