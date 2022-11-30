import { styled } from '..'

export const PageProductsContainer = styled('main', {
  width: '100%',
  maxWidth: '1200px',
  margin: '3rem auto',
  display: 'grid',
  gridTemplateColumns: '13rem 1fr',
  gap: '0.5rem',
})

export const GridProducts = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  rowGap: '1rem',
  columnGap: '1.5rem',
})
