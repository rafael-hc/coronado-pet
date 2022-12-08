import { styled } from '..'

export const ProductContainer = styled('main', {
  width: '100%',
  maxWidth: 1200,
  margin: '3rem auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const InfoProduct = styled('section', {
  '@sm': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyContent: 'center',
    gap: '1rem',
  },
})

export const DescriptionProduct = styled('section', {
  width: '100%',
  marginTop: '3rem',
  padding: '0 1rem',

  h2: {
    marginBottom: '1rem',
  },

  p: {
    marginBottom: '0.5rem',
    paddingLeft: '0.5rem',
  },
})

export const DetailsProduct = styled('section', {
  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled('h1', {
  color: '$gray-600',
  fontWeight: 'normal',
  fontSize: '$3',
})

export const InfoContent = styled('div', {
  width: '80%',
})

export const Informations = styled('div', {
  display: 'flex',
  gap: '0.25rem',

  marginTop: '1rem',
  paddingBottom: '2rem',

  borderBottom: '1px solid $gray-100',

  color: '$gray-400',
})

export const Stock = styled('span', {
  color: '$primary',
  variants: {
    isLow: {
      true: {
        color: '$danger',
      },
    },
  },
})

export const Price = styled('span', {
  display: 'block',
  marginTop: '1rem',

  fontSize: 'xx-large',
  fontWeight: 'bold',
})

export const InputQnt = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '2.375rem',
  width: '4.5rem',
  borderRadius: 8,

  border: '1px solid $gray-100',
})

export const Buy = styled('div', {
  marginTop: '3rem',

  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const Amount = styled('input', {
  maxWidth: '1.375rem',
  border: 'none',
  textAlign: 'center',

  backgroundColor: '$white',
})

export const ButtonChangeAmount = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 2,
  color: '$primary',
  cursor: 'pointer',

  '&:hover': {
    color: '$secondary',
  },
})
