import { styled } from '..'

export const ProductContainer = styled('main', {
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const InfoProduct = styled('section', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'flex-end',
  justifyContent: 'center',
})

export const DescriptionProduct = styled('section', {})
