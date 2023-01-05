import { ReactElement } from 'react'
import { LoginLayout } from '../../../layouts/LoginLayout'
import { Fieldset } from '../../../styles/components/fieldset'
import { Input } from '../../../styles/components/input'
import { NextPageWithLayout } from '../../_app.page'
import { ButtonForm, StepFormContainer } from '../styles'

const Address: NextPageWithLayout = () => {
  function handlePrevStepForm() {}
  function handleNextStepForm() {}
  return (
    <StepFormContainer>
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
  )
}

Address.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>
}

export default Address
