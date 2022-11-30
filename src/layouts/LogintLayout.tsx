import { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import TopBar from '../components/TopBar'
import {
  DefaultLayoutContent,
  HeaderContainer,
} from '../styles/layouts/Layouts'

interface LoginLayoutProps {
  children: ReactNode
}

export const LoginLayout = ({ children }: LoginLayoutProps) => {
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
