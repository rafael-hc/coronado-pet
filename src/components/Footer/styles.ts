import { styled } from '../../styles'

export const FooterContainer = styled('footer', {
  width: '100%',
  padding: '2rem 1rem',
  marginBottom: '2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: '$background',
  borderTop: '$gray100 solid 1px',
  $$shadowColor: '$colors$secondary',

  p: {
    paddingBottom: '2rem',
  },
})

export const FooterContent = styled('section', {
  width: '100%',
  maxWidth: '75rem',

  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'space-between',
  marginBottom: '2rem',

  '@sm': {
    flexDirection: 'row',
  },
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
