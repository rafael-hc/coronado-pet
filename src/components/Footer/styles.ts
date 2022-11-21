import { styled } from '../../styles'

export const FooterContainer = styled('footer', {
  backgroundColor: '$footer-backgound',

  maxWidth: '100%',
  height: '12rem',
  padding: '1rem',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '0.5fr 0.5fr',
  gap: '2rem',

  width: '100%',

  p: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '0.7rem',
    gridColumnStart: 2,
    gridRowStart: 3,
  },
})

export const SobreNos = styled('div', {
  gridColumnStart: 1,
  gridRowStart: 1,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  a: {
    display: 'flex',
    '&:hover': {
      color: '$secondary',
    },
  },
})

export const Contato = styled('div', {
  gridColumnStart: 1,
  gridRowStart: 2,

  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  a: {
    display: 'flex',
    '&:hover:': {
      color: '$secondary',
    },
  },

  '.iconesRedeSocial': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const TrabalheConosco = styled('div', {
  gridColumnStart: 2,
  gridRowStart: 1,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  gap: '1rem',

  a: {
    display: 'flex',
    '&:hover': {
      color: '$secondary',
    },
  },
})

export const RedeSocial = styled('div', {
  gridColumnStart: 2,
  gridRowStart: 2,

  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  a: {
    display: 'flex',
    '&:hover': {
      color: '$secondary',
    },
  },

  '.iconesRedeSocial': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
