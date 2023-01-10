import { styled } from '../../styles'

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
    borderBottom: '1px solid $gray400',
    backgroundColor: 'transparent',
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
