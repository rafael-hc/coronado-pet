import { styled } from '..'

export const DefaultLayoutContent = styled('div', {
  maxWidth: '100vw',
})

export const HeaderContainer = styled('header', {
  width: '100vw',
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@sm': {
    width: 1200,
  },
})
