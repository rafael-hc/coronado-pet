import Link from 'next/link'
import { MenuBarContainer } from './styles'

export const MenuBar = () => {
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
