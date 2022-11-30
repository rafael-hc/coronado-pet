import { styled } from '../../styles'

export const HeaderContainer = styled('section', {
  width: '100vw',
  padding: '1rem 0',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'center',
  justifyItems: 'center',

  backgroundColor: '$white',
  color: '$gray-400',
  '@sm': {
    width: 1200,
  },
})

export const Logo = styled('div', {
  width: '7.5rem',
  height: '4.75rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',
})

export const Icons = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  gap: 16,

  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 8,

    height: 40,

    borderRadius: 6,

    backgroundColor: '$white',
  },
})

export const SearchBar = styled('div', {
  width: '100%',
  maxWidth: 400,
  height: 40,
  position: 'relative',
  display: 'flex',

  input: {
    width: '100%',
    height: '100%',

    padding: '0 16px',

    border: 'none',
    borderBottom: '1px solid $gray-400',
  },

  button: {
    width: 40,
    height: 40,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: '$gray-400',

    '&:hover': {
      color: '$primary',
      cursor: 'pointer',
    },
  },
})
