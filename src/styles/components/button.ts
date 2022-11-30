import { styled } from '..'

export const Button = styled('button', {
  marginTop: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'centet',

  border: 'none',
  backgroundColor: '$primary',
  color: '$white',

  borderRadius: 8,
  cursor: 'pointer',
  transition: 'all 0.5s',

  '&:hover': {
    backgroundColor: '$secondary',
    transition: 'all 0.5s',
  },

  variants: {
    icon: {
      true: {
        gap: '0.5rem',
      },
    },
    size: {
      1: {
        padding: '0.5rem',
        fontSize: '0.75rem',
      },
      2: {
        padding: '0.6rem',
        fontSize: '1.6rem',
        fontWeight: 'bold',
        lineHeight: '1.6rem',
        '@sm': {
          fontSize: '1rem',
          padding: '0.75rem',
        },
      },
      3: {
        padding: '0.75rem',
        fontSize: '2rem',
        fontWeight: 'bold',
      },
    },
  },
  '@sm': {
    marginTop: 0,
  },
})
