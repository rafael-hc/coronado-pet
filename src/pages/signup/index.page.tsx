import { CaretRight, Check } from 'phosphor-react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { formatToCPF, formatToPhone } from 'brazilian-values'
import { FormEvent, ReactElement, useState } from 'react'
import { LoginLayout } from '../../layouts/LogintLayout'
import {
  ButtonForm,
  StepFormContainer,
  RegisterContainer,
  TipoPessoa,
  FormRegister,
  LabelStepForm,
} from './styles'
import { NextPageWithLayout } from '../_app.page'
import { Input } from '../../styles/components/input'
import { Fieldset } from '../../styles/components/fieldset'

const SignUp: NextPageWithLayout = () => {
  const [stepForm, setStepForm] = useState(0)
  const [cep, setCep] = useState('')
  const [tel, setTel] = useState('')

  const handleNextStepForm = (event: FormEvent) => {
    event.preventDefault()
    if (stepForm < 2) {
      setStepForm((state) => state + 1)
    }
  }
  const handlePrevStepForm = (event: FormEvent) => {
    event.preventDefault()
    if (stepForm > 0) {
      setStepForm((state) => state - 1)
    }
  }

  return (
    <RegisterContainer>
      <h1>Cadastro</h1>
      <FormRegister>
        <LabelStepForm>
          {stepForm >= 0 && (
            <span onClick={() => setStepForm(0)}>
              Dados Pessoais
              <CaretRight />
            </span>
          )}
          {stepForm >= 1 && (
            <span onClick={() => setStepForm(1)}>
              Endereço
              <CaretRight />
            </span>
          )}
          {stepForm === 2 && (
            <span>
              Login
              <CaretRight />
            </span>
          )}
        </LabelStepForm>
        <StepFormContainer hiddenStep={stepForm !== 0}>
          <TipoPessoa>
            <RadioGroup.Root defaultValue="pf">
              <RadioGroup.Item
                value="pf"
                style={{
                  width: '30px',
                  height: '30px',
                  border: '1px solid black',
                  borderRadius: '100%',
                }}
              >
                <RadioGroup.Indicator asChild aria-checked={true}>
                  <Check />
                </RadioGroup.Indicator>
              </RadioGroup.Item>
              <RadioGroup.Item value="pj">
                <RadioGroup.Indicator />
              </RadioGroup.Item>
            </RadioGroup.Root>
            <Input type="radio" name="pf" id="pf" checked value="pf" />
            <label htmlFor="pf">Pessoa Física</label>
            <Input type="radio" name="pj" id="pj" value="pj" />
            <label htmlFor="pj">Pessoa Jurídica</label>
          </TipoPessoa>
          <h3>Dados Pessoais</h3>
          <Fieldset>
            <label htmlFor="">Nome</label>
            <Input
              type="text"
              name="nome"
              id="nome"
              placeholder="Digite seu nome"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="">Sobrenome</label>
            <Input
              type="text"
              name="sobrenome"
              id="sobrenome"
              placeholder="Digite seu sobrenome"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="">CPF</label>
            <Input
              type="text"
              name="cpf"
              id="cpf"
              maxLength={14}
              placeholder="Digite seu CPF"
              value={formatToCPF(cep)}
              onChange={(e) => setCep(e.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="">Celular</label>
            <Input
              type="text"
              name="celular"
              id="celular"
              maxLength={16}
              placeholder="Digite seu DDD + Celular"
              value={formatToPhone(tel)}
              onChange={(e) => setTel(e.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="">Data Nascimento</label>
            <Input type="date" name="nascimento" id="nascimento" />
          </Fieldset>
          <ButtonForm>
            <button onClick={handleNextStepForm} style={{ width: '80px' }}>
              Próximo
            </button>
          </ButtonForm>
        </StepFormContainer>

        <StepFormContainer hiddenStep={stepForm !== 1}>
          <p>Endereço</p>
          <Fieldset>
            <label htmlFor="">CEP</label>
            <Input
              type="text"
              name="zipCode"
              id="zipCode"
              placeholder="Digite seu CEP"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="">Logradouro</label>
            <Input
              type="text"
              name="logradouro"
              id="logradouro"
              placeholder="Digite seu logradouro"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="">Número</label>
            <Input
              type="number"
              name="numero"
              id="numero"
              placeholder="Número do endereço"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="">Complemento</label>
            <Input
              type="text"
              name="complemento"
              id="complemento"
              placeholder="Apartamento, bloco"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="">Bairro</label>
            <Input
              type="text"
              name="bairro"
              id="bairro"
              placeholder="Digite seu bairro"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="">Cidade</label>
            <Input
              type="text"
              name="cidade"
              id="cidade"
              placeholder="Digite sua cidade"
            />
          </Fieldset>
          <Fieldset>
            <label htmlFor="">Estado</label>
            <Input
              type="text"
              name="estado"
              id="estado"
              placeholder="Digite seu estado"
            />
          </Fieldset>
          <ButtonForm>
            <button onClick={handlePrevStepForm} style={{ width: '80px' }}>
              Voltar
            </button>
            <button onClick={handleNextStepForm} style={{ width: '80px' }}>
              Próximo
            </button>
          </ButtonForm>
        </StepFormContainer>

        <StepFormContainer hiddenStep={stepForm !== 2}>
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
      </FormRegister>
    </RegisterContainer>
  )
}

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>
}

export default SignUp
