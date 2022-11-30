import { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MenuBar } from '../components/MenuBar'
import TopBar from '../components/TopBar'
import { DefaultLayoutContent, HeaderContainer } from '../styles/layouts/Layouts'

interface DefaultLayoutProps {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <DefaultLayoutContent>
        <HeaderContainer>
          <TopBar />
          <Header />
          <MenuBar />
        </HeaderContainer>
        {children}
      </DefaultLayoutContent>
      <Footer />
    </div>
  )
}
