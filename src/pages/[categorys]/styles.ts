import { styled } from '../../styles'

export const PageProductsContainer = styled('main', {
  width: '100%',
  maxWidth: '1200px',
  margin: '2rem auto',
  padding: '0 1rem',

  '@sm': {
    display: 'grid',
    gridTemplateColumns: '13rem 1fr',
    gap: '0.5rem',
    padding: 0,
  },
})

export const GridProducts = styled('section', {
  display: 'flex',
  flexDirection: 'column', // flexWrap: 'wrap',
  justifyContent: 'flex-start',
  rowGap: '1rem',
  columnGap: '1.5rem',

  '@sm': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
})
