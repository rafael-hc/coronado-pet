import { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import HeaderMobile from '../components/Mobile/HeaderMobile'
import TopBar from '../components/TopBar'
import {
  DefaultLayoutContent,
  HeaderContainer,
} from '../styles/layouts/Layouts'
import { BreakPoint } from '../utils/breakPoints'

interface LoginLayoutProps {
  children: ReactNode
}

export const LoginLayout = ({ children }: LoginLayoutProps) => {
  const { sm } = BreakPoint()
  if (sm) {
    return (
      <DefaultLayoutContent>
        <HeaderContainer>
          <TopBar />
          <HeaderMobile />
        </HeaderContainer>
        {children}
        <Footer />
      </DefaultLayoutContent>
    )
  }
  return (
    <DefaultLayoutContent>
      <HeaderContainer>
        <TopBar />
        <Header />
      </HeaderContainer>
      {children}
      <Footer />
    </DefaultLayoutContent>
  )
}
