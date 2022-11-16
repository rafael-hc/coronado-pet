import {
  FacebookLogo,
  InstagramLogo,
  EnvelopeSimple,
  WhatsappLogo,
  Phone,
} from 'phosphor-react'
import {
  Contato,
  FooterContainer,
  RedeSocial,
  SobreNos,
  TrabalheConosco,
} from './styles'

export const Footer = () => {
  return (
    <FooterContainer>
      <SobreNos>
        <a href="#">Sobre a Coronado</a>
      </SobreNos>

      <Contato>
        <div>Contato</div>
        <div className="iconesRedeSocial">
          <a href="#">
            <EnvelopeSimple size={24} />
          </a>
          <a href="#">
            <WhatsappLogo size={24} />
          </a>
          <a href="#">
            <Phone size={24} />
          </a>
        </div>
      </Contato>

      <TrabalheConosco>
        <a href="#">Trabalhe Conosco</a>
      </TrabalheConosco>

      <RedeSocial>
        <div>Siga a Coronado</div>
        <div className="iconesRedeSocial">
          <a href="#">
            <FacebookLogo size={24} />
          </a>

          <a href="#">
            <InstagramLogo size={24} />
          </a>
        </div>
      </RedeSocial>
      <p>
        Copyright© 2022 Coronado Comércio de Rações Todos os direitos reservados
      </p>
    </FooterContainer>
  )
}
