import { styled } from '..'

export const Button = styled('button', {
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
        padding: '0.75rem',
        fontSize: '1rem',
        fontWeight: 'bold',
      },
      3: {
        padding: '0.75rem',
        fontSize: '2rem',
        fontWeight: 'bold',
      },
    },
  },
})
