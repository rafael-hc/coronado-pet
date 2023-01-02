import { styled } from '../../styles'

export const PageProductsContainer = styled('main', {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',

  '@sm': {
    display: 'grid',
    gridTemplateColumns: '13rem 1fr',
    gap: '0.5rem',
  },
})

export const GridProducts = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  rowGap: '1rem',
  columnGap: '1.5rem',
})
