import { styled } from '..'

export const DefaultLayoutContent = styled('div', {
  maxWidth: '100vw',
  '@sm': {
    padding: 0,
  },
})

export const HeaderContainer = styled('header', {
  padding: '0 1rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  color: '$gray400',
  backgroundColor: '$background',
})

export const HeadContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@sm': {
    width: 1200,
    margin: '0 auto',
  },
})
