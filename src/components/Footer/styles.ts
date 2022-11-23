import { styled } from '../../styles'

export const FooterContainer = styled('footer', {
  width: '100%',
  height: '12rem',
  padding: '2rem 0',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: '$white',
  borderTop: '$gray-200 solid 1px',
  $$shadowColor: '$colors$secondary',
  boxShadow: '0px -8px 12px -9px $$shadowColor',

  // p: {
  //   textAlign: 'center',
  //   justifyContent: 'center',
  //   fontSize: '0.7rem',
  //   gridColumnStart: 2,
  //   gridRowStart: 3,
  // },
})

export const FooterContent = styled('section', {
  width: '100%',
  maxWidth: '75rem',

  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',
})

const BaseList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const Contact = styled(BaseList, {
  a: {
    display: 'flex',
    '&:hover': {
      color: '$secondary',
    },
  },
})

export const QuickLinks = styled(BaseList, {
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

export const Information = styled(BaseList, {
  a: {
    display: 'flex',
    '&:hover': {
      color: '$secondary',
    },
  },
})

export const Services = styled(BaseList, {
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
