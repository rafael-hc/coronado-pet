import Link from 'next/link'
import { TopBarContainer } from './styles'

export function TopBar() {
  return (
    <TopBarContainer>
      <Link href="/product/mots-vendor" prefetch={false}>
        Mais vendidos!
      </Link>
    </TopBarContainer>
  )
}
