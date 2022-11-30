import { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MenuBar } from '../components/MenuBar'
import TopBar from '../components/TopBar'
import { DefaultLayoutContent, HeaderContainer } from '../styles/layouts/Layouts'

interface ProductsLayoutProps {
  children: ReactNode
}

export const ProductsLayout = ({ children }: ProductsLayoutProps) => {
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
