import Link from 'next/link'
import { styled } from '..'

export const LoginContainer = styled('main', {
  maxWidth: '55rem',
  margin: '3rem auto',
  padding: '0 3rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',

  '@sm': {
    margin: '2rem auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '3rem 1fr',
    gap: '2rem',
  },
})

const LoginContent = styled('section', {
  display: 'flex',
  flexDirection: 'column',
})

export const SingIn = styled(LoginContent, {
  gridColumnStart: 1,
  gridRowStart: 2,
  padding: '1rem',

  borderRadius: 8,

  backgroundColor: '$gray-50',
})

export const SingUp = styled(LoginContent, {
  gridColumnStart: 2,
  gridRowStart: 2,

  display: 'flex',
  gap: '1.5rem',
  a: {
    height: '2.5rem',
    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '$primary',
    color: '$white',
  },
})

export const FormSingIn = styled('form', {
  display: 'flex',
  flexDirection: 'column',

  marginTop: '1rem',

  button: {
    height: '2.5rem',
    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    cursor: 'pointer',

    backgroundColor: '$primary',
    color: '$white',
  },
})

export const FieldContainer = styled('fieldset', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem',

  border: 'none',
  position: 'relative',

  input: {
    padding: '0.5rem',
    border: 'none',
    margin: '0.25rem 0 1.5rem',

    borderRadius: 8,
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

export const InputError = styled('span', {
  display: 'block',
  position: 'absolute',
  bottom: 0,
  right: 0,
  fontSize: '0.825rem',

  color: '$danger',
})
