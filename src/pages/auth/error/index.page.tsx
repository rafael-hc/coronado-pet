import { useRouter } from 'next/router'
import { Heading } from '../../../@designSystem/components/heading'
import { Text } from '../../../@designSystem/components/text'

export default function AuthError() {
  const router = useRouter()

  const errorsIndex = ['Unlinked', 'EmailNotFound']

  const errorsMessage = [
    <>
      <Text>Sua conta do Google não está conectada a nenhum usuário.</Text>
      <Text>
        Caso já tenha se cadastrado, vá até o painel da sua conta e vincule a
        conta do Google.
      </Text>
    </>,
    <>
      <Text>
        O e-mail informado não corresponde a nenhum usuário cadastrado.
      </Text>
    </>,
  ]

  const { error } = router.query
  const err =
    typeof error === 'string' &&
    errorsMessage[errorsIndex.findIndex((item) => item === error)]
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Heading>Página de erro</Heading>
      {err}
    </div>
  )
}
