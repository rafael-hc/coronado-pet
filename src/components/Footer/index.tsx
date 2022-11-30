import Link from 'next/link'
import {
  FacebookLogo,
  InstagramLogo,
  EnvelopeSimple,
  WhatsappLogo,
  YoutubeLogo,
} from 'phosphor-react'
import {
  QuickLinks,
  FooterContainer,
  FooterContent,
  Services,
  Contact,
  Information,
} from './styles'

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Contact>
          <li>
            <h4>Contatos</h4>
          </li>
          <li>
            <a href="#">
              <EnvelopeSimple size={24} /> example@coronadopet.com.br
            </a>
          </li>
          <li>
            <a href="#">
              <WhatsappLogo size={24} /> (99) 9 9999-9999
            </a>
          </li>

          <div style={{ display: 'flex' }}>
            <a href="#">
              <YoutubeLogo size={24} />
            </a>

            <a href="#">
              <FacebookLogo size={24} />
            </a>

            <a href="#">
              <InstagramLogo size={24} />
            </a>
          </div>
        </Contact>

        <QuickLinks>
          <h4>Links Rápidos</h4>
          <li>
            <Link href="#">Contate-nos</Link>
          </li>
          <li>
            <Link href="#">Envio</Link>
          </li>
          <li>
            <Link href="#">Mapa do site</Link>
          </li>
          <li>
            <Link href="#">Perguntas Frequentes</Link>
          </li>
          <li>
            <Link href="#">Lojas</Link>
          </li>
        </QuickLinks>

        <Information>
          <h4>Informações</h4>
          <li>
            <Link href="#">Sobre nós</Link>
          </li>
          <li>
            <Link href="#">Informação de entrega</Link>
          </li>
          <li>
            <Link href="#">Política de Privacidade</Link>
          </li>
          <li>
            <Link href="#">Termos e Condições</Link>
          </li>
        </Information>

        <Services>
          <h4>Serviços</h4>
          <li>
            <Link href="#">Política para vendedores</Link>
          </li>
          <li>
            <Link href="#">Política para Compradores</Link>
          </li>
          <li>
            <Link href="#">Termos e Condições</Link>
          </li>
          <li>
            <Link href="#">Envio e Reembolso</Link>
          </li>
          <li>
            <Link href="#">Política de Atacado</Link>
          </li>
        </Services>
      </FooterContent>
      <p>
        Copyright© 2022 Coronado Comércio de Rações Todos os direitos reservados
      </p>
    </FooterContainer>
  )
}
