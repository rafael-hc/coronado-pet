import Link from 'next/link'
import { MenuBarContainer } from './styles'

export const MenuBar = () => {
  return (
    <MenuBarContainer>
      <Link href="/cachorros">Cachorro</Link>
      <Link href="gatos">Gato</Link>
      <Link href="passaros">Pássaro</Link>
      <Link href="casa-e-jardim">Casa e Jardim</Link>
      <Link href="servicos-veterinarios">Serviços Veterinários</Link>
    </MenuBarContainer>
  )
}
