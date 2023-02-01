import Link from 'next/link'
import { styled } from '../../styles'
import { Box } from '../../@designSystem/components/box'
import { Text } from '../../@designSystem/components/text'

export const LoginContainer = styled('main', {
  maxWidth: '75rem',
  margin: '3rem auto',
  padding: '0 $4',

  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',

  '@sm': {
    margin: '2rem auto',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '3rem 1fr',
  },
})

export const SingIn = styled(Box, {
  gridColumnStart: 1,
  gridRowStart: 2,
})

export const SingUp = styled(Box, {
  gridColumnStart: 2,
  gridRowStart: 2,

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const FormSingIn = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  marginTop: '1rem',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const SingUpButton = styled(Link, {
  height: '2.5rem',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$secondary',
  color: '$white',
})

export const InputError = styled(Text, {
  display: 'block',
  bottom: 0,
  right: 0,
  fontSize: '0.825rem',

  color: '$danger',
})
