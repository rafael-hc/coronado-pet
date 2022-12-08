import { styled } from '..'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '0.5rem',
  padding: '0.5rem',

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
    'w-full': {
      true: {
        width: '100%',
      },
    },
    size: {
      1: {
        fontSize: '0.75rem',
        lineHeight: '0.75rem',
      },
      2: {
        fontSize: '1.6rem',
        fontWeight: 'bold',
        lineHeight: '1rem',
        '@sm': {
          fontSize: '1rem',
          padding: '0.75rem',
        },
      },
      3: {
        fontSize: '2rem',
        lineHeight: '2rem',
        fontWeight: 'bold',
      },
    },
  },
  '@sm': {
    marginTop: 0,
  },
})
