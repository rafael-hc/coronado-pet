import { ReactElement } from 'react'
// import { useRouter } from 'next/router'
import { differenceInYears } from 'date-fns'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginLayout } from '../../layouts/LoginLayout'
import {
  ButtonForm,
  StepFormContainer,
  RegisterContainer,
  PersonalDataForm,
} from './styles'
import { NextPageWithLayout } from '../_app.page'
import { Fieldset } from '../../styles/components/fieldset'
import { Text } from '../../@designSystem/components/text'
import { TextInput } from '../../@designSystem/components/textInput'
import { validaCpf } from '../../utils/validaCpf'
import { Button } from '../../@designSystem/components/button'
import { Heading } from '../../@designSystem/components/heading'

const personalDataFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter no mínimo 3 caracteres.' }),
  lastName: z
    .string()
    .min(3, { message: 'O sobrenome precisa ter no mínimo 3 caracteres.' }),
  cpf: z
    .string()
    .refine((data) => validaCpf(data), { message: 'cpf inválido' }),
  phone: z.string().min(8, { message: 'Número inválido' }),
  birthDate: z
    .string()
    .refine((data) => differenceInYears(new Date(), new Date(data)) >= 18, {
      message: 'É preciso ter ao menos 18 anos',
    }),
  zipCode: z.string().min(8, { message: 'Cep inválido' }),
  street: z.string(),
  numberOf: z.number(),
  complement: z.string(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
})

type PersonDataType = z.infer<typeof personalDataFormSchema>

const SignUp: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PersonDataType>({
    resolver: zodResolver(personalDataFormSchema),
  })

  // const router = useRouter()

  async function handleNextStepForm(data: PersonDataType) {
    console.log(data)
    console.log(validaCpf(data.cpf))
    // await router.push('/signup/address')
  }

  return (
    <RegisterContainer>
      <Heading as="h1" size="lg">
        Cadastro
      </Heading>
      <PersonalDataForm as="form" onSubmit={handleSubmit(handleNextStepForm)}>
        <StepFormContainer>
          <Heading>Dados Pessoais</Heading>
          <Fieldset>
            <label>
              <Text>Nome</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  id="nome"
                  placeholder="Digite seu nome"
                  {...register('name')}
                />
              </TextInput.Root>
              {errors.name && <Text>{errors.name.message}</Text>}
            </label>
          </Fieldset>
          <Fieldset>
            <label>
              <Text>Sobrenome</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  id="sobrenome"
                  placeholder="Digite seu sobrenome"
                  {...register('lastName')}
                />
              </TextInput.Root>
              {errors.lastName && <Text>{errors.lastName.message}</Text>}
            </label>
          </Fieldset>
          <Fieldset>
            <label>
              <Text>CPF</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  id="cpf"
                  maxLength={14}
                  placeholder="Digite seu CPF"
                  // value={formatToCPF(cep)}
                  // onChange={(e) => setCep(e.target.value)}
                  {...register('cpf')}
                />
              </TextInput.Root>
              {errors.cpf && <Text>{errors.cpf.message}</Text>}
            </label>
          </Fieldset>
          <Fieldset>
            <label>
              <Text>Celular</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  id="celular"
                  maxLength={16}
                  placeholder="Digite seu DDD + Celular"
                  // value={formatToPhone(tel)}
                  // onChange={(e) => setTel(e.target.value)}
                  {...register('phone')}
                />
              </TextInput.Root>
              {errors.phone && <Text>{errors.phone.message}</Text>}
            </label>
          </Fieldset>
          <Fieldset>
            <label>
              <Text>Data Nascimento</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="date"
                  id="nascimento"
                  {...register('birthDate')}
                />
              </TextInput.Root>
              {errors.birthDate && <Text>{errors.birthDate.message}</Text>}
            </label>
          </Fieldset>
          <Heading>Endereço</Heading>
          <Fieldset>
            <label>
              <Text>CEP</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  placeholder="Digite seu CEP"
                  {...register('zipCode')}
                />
              </TextInput.Root>
            </label>
          </Fieldset>
          <Fieldset>
            <label>
              <Text>Rua</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  placeholder="Digite seu CEP"
                  {...register('street')}
                />
              </TextInput.Root>
            </label>
          </Fieldset>
          <Fieldset>
            <label>
              <Text>Número</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="number"
                  placeholder="Digite o número do endereço."
                  {...register('numberOf')}
                />
              </TextInput.Root>
            </label>
            <label>
              <Text>Complemento</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  placeholder="Digite o número do endereço."
                  {...register('complement')}
                />
              </TextInput.Root>
            </label>
          </Fieldset>
          <Fieldset></Fieldset>
          <Fieldset>
            <label>
              <Text>Bairro</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  placeholder="Digite o número do endereço."
                  {...register('district')}
                />
              </TextInput.Root>
            </label>
          </Fieldset>
          <Fieldset>
            <label>
              <Text>Cidade</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  placeholder="Digite o número do endereço."
                  {...register('city')}
                />
              </TextInput.Root>
            </label>
          </Fieldset>
          <Fieldset>
            <label>
              <Text>Estado</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  placeholder="Digite o número do endereço."
                  {...register('state')}
                />
              </TextInput.Root>
            </label>
          </Fieldset>

          <ButtonForm>
            <Button type="submit" disabled={isSubmitting}>
              Próximo
            </Button>
          </ButtonForm>
        </StepFormContainer>
      </PersonalDataForm>
    </RegisterContainer>
  )
}

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>
}

export default SignUp
