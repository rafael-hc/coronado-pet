import { ChangeEvent, ReactElement, useState } from 'react'
import { subYears } from 'date-fns'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginLayout } from '../../layouts/LoginLayout'
import {
  ButtonForm,
  StepFormContainer,
  RegisterContainer,
  PersonalDataForm,
  FormError,
} from './styles'
import { NextPageWithLayout } from '../_app.page'
import { Fieldset } from '../../styles/components/fieldset'
import { Text } from '../../@designSystem/components/text'
import { TextInput } from '../../@designSystem/components/textInput'
import { validaCpf } from '../../utils/validaCpf'
import { Button } from '../../@designSystem/components/button'
import { Heading } from '../../@designSystem/components/heading'
import { states } from '../../utils/stateList'
import { Select } from '../../@designSystem/components/selectInput'
import { CheckBox } from '../../@designSystem/components/checkBox'
import { formateDateForInput } from '../../utils/dateFormat'
import { AxiosError } from 'axios'
import { api } from '../../lib/axios'

const personalDataFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'O campo precisa ter no mínimo 3 caracteres.' }),
    lastName: z
      .string()
      .min(3, { message: 'O campo precisa ter no mínimo 3 caracteres.' }),
    cpf: z
      .string()
      .refine((data) => validaCpf(data), { message: 'Cpf inválido' }),
    phone: z.string().min(10, { message: 'Número inválido' }),
    birthDate: z.string(),
    zipCode: z.string().min(8, { message: 'Cep inválido' }),
    street: z
      .string()
      .min(3, { message: 'O campo precisa ter no mínimo 3 caracteres.' }),
    numberOf: z
      .string()
      .min(1, { message: 'Informe o número. Informe 0 caso não tenha.' }),
    complement: z.string(),
    district: z
      .string()
      .min(3, { message: 'O campo precisa ter no mínimo 3 caracteres.' }),
    city: z
      .string()
      .min(3, { message: 'O campo precisa ter no mínimo 3 caracteres.' }),
    state: z.string().min(2, { message: 'Informe o estado.' }),
    email: z.string().email({ message: 'E-mail inválido.' }),

    terms: z.boolean().refine((data) => data === true, {
      message: 'Aceite as políticas de privacidade',
    }),
  })
  .transform((formData) => {
    return {
      name: [formData.name, formData.lastName].join(' '),
      cpf: formData.cpf,
      email: formData.email,
      phone: formData.phone,
      date_of_birth: new Date(formData.birthDate),
      address: {
        street_address: formData.street,
        number: formData.numberOf,
        complement: formData.complement,
        district: formData.district,
        city: formData.city,
        state: formData.state,
        zip_code: formData.zipCode,
      },
    }
  })

const validaEmail = z.string().email()

type PersonDataTypeInput = z.input<typeof personalDataFormSchema>
type PersonDataTypeOutput = z.output<typeof personalDataFormSchema>

const SignUp: NextPageWithLayout = () => {
  const [emailExists, setEmailExists] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<PersonDataTypeInput>({
    resolver: zodResolver(personalDataFormSchema),
  })

  async function verifyEmailExists1(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    try {
      validaEmail.parse(event.target.value)
      const res = await api.get(`/user/verify-email/${event.target.value}`)
      setEmailExists(res.data)
    } catch (e) {}
  }

  async function handleNextStepForm(data: any) {
    const formData = data as PersonDataTypeOutput

    try {
      await api.post('/user/register', formData)
    } catch (e) {
      if (e instanceof AxiosError) {
        alert(e.response?.data.message)
      }
    }
  }
  return (
    <RegisterContainer>
      <Heading as="h1" size="lg">
        Cadastro
      </Heading>
      <PersonalDataForm as="form" onSubmit={handleSubmit(handleNextStepForm)}>
        <StepFormContainer>
          <Heading>Informações de login</Heading>
          <Fieldset>
            <label>
              <Text>E-mail</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="email"
                  placeholder="Digite seu email"
                  {...register('email')}
                  // onBlur={verifyEmailExists}
                  onChange={verifyEmailExists1}
                />
              </TextInput.Root>
              {errors.email?.message && (
                <FormError size="sm">{errors.email.message}</FormError>
              )}
              {emailExists && (
                <FormError size="sm">E-mail já cadastrado</FormError>
              )}
            </label>
          </Fieldset>
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
              {errors.name && (
                <FormError size="sm">{errors.name.message}</FormError>
              )}
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
              {errors.lastName && (
                <FormError size="sm">{errors.lastName.message}</FormError>
              )}
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
              {errors.cpf && (
                <FormError size="sm">{errors.cpf.message}</FormError>
              )}
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
              {errors.phone && (
                <FormError size="sm">{errors.phone.message}</FormError>
              )}
            </label>
          </Fieldset>
          <Fieldset>
            <label>
              <Text>Data Nascimento</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="date"
                  id="nascimento"
                  max={formateDateForInput(subYears(new Date(), 18))}
                  min={formateDateForInput(subYears(new Date(), 90))}
                  {...register('birthDate')}
                />
              </TextInput.Root>
              {errors.birthDate && (
                <FormError size="sm">{errors.birthDate.message}</FormError>
              )}
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
              {errors.zipCode?.message && (
                <FormError size="sm">{errors.zipCode.message}</FormError>
              )}
            </label>
          </Fieldset>
          <Fieldset>
            <label>
              <Text>Rua</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  placeholder="Digite o nome da rua"
                  {...register('street')}
                />
              </TextInput.Root>
              {errors.street?.message && (
                <FormError size="sm">{errors.street.message}</FormError>
              )}
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
              {errors.numberOf?.message && (
                <FormError size="sm">{errors.numberOf.message}</FormError>
              )}
            </label>
            <label>
              <Text>Complemento</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  placeholder="Digite o complemento."
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
                  placeholder="Informe o bairro."
                  {...register('district')}
                />
              </TextInput.Root>
              {errors.district?.message && (
                <FormError size="sm">{errors.district.message}</FormError>
              )}
            </label>
          </Fieldset>
          <Fieldset>
            <label style={{ flex: 2 }}>
              <Text>Cidade</Text>
              <TextInput.Root>
                <TextInput.Input
                  type="text"
                  placeholder="Informe a cidade."
                  {...register('city')}
                />
              </TextInput.Root>
              {errors.city?.message && (
                <FormError size="sm">{errors.city.message}</FormError>
              )}
            </label>
            <label style={{ flex: 1 }}>
              <Text>Estado</Text>
              <TextInput.Root>
                <Select {...register('state')}>
                  <option value={''}>Selecione</option>
                  {states.map((state) => (
                    <option value={state} key={state}>
                      {state}
                    </option>
                  ))}
                </Select>
              </TextInput.Root>
              {errors.state?.message && (
                <FormError size="sm">{errors.state.message}</FormError>
              )}
            </label>
          </Fieldset>

          <label style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <CheckBox
                  onCheckedChange={(checked) => {
                    field.onChange(checked === true)
                  }}
                  checked={field.value}
                />
              )}
            />
            <Text as="span">Leia nossa</Text>
            <a href="#">
              <Text>Políticas de privacidade</Text>
            </a>
          </label>
          {errors.terms && (
            <FormError size="sm">{errors.terms.message}</FormError>
          )}
          <ButtonForm>
            <Button type="submit" disabled={isSubmitting || emailExists}>
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
