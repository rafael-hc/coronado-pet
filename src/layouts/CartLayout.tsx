import { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import {
  DefaultLayoutContent,
  HeadContent,
  HeaderContainer,
} from '../styles/layouts/Layouts'

import Logo from '../../public/images/logo-coronado.jpg'
import Image from 'next/image'
import { Lock } from 'phosphor-react'
import { Text } from '../@designSystem/components/text'
import Link from 'next/link'

interface CartLayoutProps {
  children: ReactNode
}

export function CartLayout({ children }: CartLayoutProps) {
  return (
    <div>
      <DefaultLayoutContent>
        <HeaderContainer>
          <HeadContent style={{ padding: '1rem 0' }}>
            <Link href="/">
              <Image src={Logo} width={80} alt="logotipo" />
            </Link>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                borderLeft: '1px solid gray',
                padding: '0 1rem',
                height: '4rem',
              }}
            >
              <Lock size={24} />
              <Text>Ambiente seguro</Text>
            </div>
          </HeadContent>
        </HeaderContainer>
        {children}
        <Footer />
      </DefaultLayoutContent>
    </div>
  )
}
