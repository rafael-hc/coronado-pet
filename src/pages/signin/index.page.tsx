import { zodResolver } from '@hookform/resolvers/zod'
import { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
// import { useRouter } from 'next/router'
import { Envelope } from 'phosphor-react'
import { LoginLayout } from '../../layouts/LoginLayout'
import { NextPageWithLayout } from '../_app.page'
// import { useAppDispatch } from '../../store/hooks'
// import { authenticateUser } from '../../store/reducers/loginSlice'
import {
  FormSingIn,
  InputError,
  LoginContainer,
  SingIn,
  SingUp,
  // SingUpButton,
} from './styles'
import { TextInput } from '../../@designSystem/components/textInput'
import { Heading } from '../../@designSystem/components/heading'
import { Text } from '../../@designSystem/components/text'
import { Button } from '../../@designSystem/components/button'
import { signIn, useSession } from 'next-auth/react'

const loginFormSchema = z.object({
  email: z.string().email({ message: 'Digite um e-mail válido' }),
})

type loginFormData = z.infer<typeof loginFormSchema>

const SignIn: NextPageWithLayout = () => {
  const session = useSession()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginFormData>({ resolver: zodResolver(loginFormSchema) })

  async function handleLogin({ email }: loginFormData) {
    await signIn('email', { email, callbackUrl: 'http://localhost:3000' })
  }

  return (
    <LoginContainer>
      <Heading as="h1" size="2xl">
        Acessar ou criar conta
      </Heading>
      <SingIn>
        <FormSingIn onSubmit={handleSubmit(handleLogin)}>
          <Heading>Acesse sua conta</Heading>
          <label>
            <Text>E-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input
                type="text"
                placeholder="Digite seu e-mail..."
                {...register('email')}
              />
            </TextInput.Root>
          </label>
          {errors.email?.message && (
            <InputError>{String(errors.email.message)}</InputError>
          )}

          <Button type="submit" disabled={isSubmitting}>
            Entrar
          </Button>
        </FormSingIn>

        <Text>Entrar com o Google</Text>
        <Button
          type="button"
          onClick={() => {
            signIn('google', { callbackUrl: 'http://localhost:3000' })
          }}
        >
          Logar com Google
        </Button>
      </SingIn>
      <SingUp>
        <Heading>Crie sua conta é rápido, fácil e gratuito!</Heading>
        <p>
          Com a sua conta da você tem acesso a Ofertas exclusivas, descontos,
          acompanhar os seus pedidos e muito mais!
        </p>
        <Button as="a" href="/signup">
          Criar uma conta
        </Button>
      </SingUp>
      <Text>{`Logado como: ${JSON.stringify(session.data?.user?.name)}`}</Text>
    </LoginContainer>
  )
}

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>
}

export default SignIn
