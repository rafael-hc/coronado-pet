import { ReactElement } from 'react'
import { LoginLayout } from '../../../layouts/LoginLayout'
import { Fieldset } from '../../../styles/components/fieldset'
import { Input } from '../../../styles/components/input'
import { NextPageWithLayout } from '../../_app.page'
import { ButtonForm, StepFormContainer } from '../styles'

const Login: NextPageWithLayout = () => {
  function handlePrevStepForm() {}
  return (
    <StepFormContainer>
      <Fieldset>
        <label htmlFor="">E-mail</label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
        />
      </Fieldset>
      <Fieldset>
        <label htmlFor="">Senha</label>
        <Input
          type="password"
          name="login"
          id="login"
          placeholder="Digite sua senha"
        />
      </Fieldset>
      <Fieldset>
        <label htmlFor="">Confirmar Senha</label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Confirme sua senha"
        />
      </Fieldset>
      <Fieldset inLine>
        <Input type="checkbox" name="accept" id="accept" />
        <label htmlFor="accept">
          <a href="#" style={{ textDecoration: 'underline' }}>
            Termos e condições
          </a>
        </label>
      </Fieldset>

      <ButtonForm>
        <button type="submit" style={{ width: '250px' }}>
          Cadastrar
        </button>
      </ButtonForm>
      <ButtonForm>
        <button onClick={handlePrevStepForm} style={{ width: '80px' }}>
          Voltar
        </button>
      </ButtonForm>
    </StepFormContainer>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>
}

export default Login
