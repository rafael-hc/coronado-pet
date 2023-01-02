import { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MenuBar } from '../components/MenuBar'
import { HeaderMobile } from '../components/Mobile/HeaderMobile'
import { SearchProductBar } from '../components/SearchProductBar'
import { TopBar } from '../components/TopBar'
import {
  DefaultLayoutContent,
  HeaderContainer,
} from '../styles/layouts/Layouts'
import { BreakPoint } from '../utils/breakPoints'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const { sm } = BreakPoint()

  return (
    <div>
      <DefaultLayoutContent>
        <HeaderContainer>
          <TopBar />
          {sm ? (
            <>
              <HeaderMobile />
              <SearchProductBar />
              <MenuBar isMobile />
            </>
          ) : (
            <>
              <Header />
              <MenuBar />
            </>
          )}
        </HeaderContainer>
        {children}
        <Footer />
      </DefaultLayoutContent>
    </div>
  )
}
