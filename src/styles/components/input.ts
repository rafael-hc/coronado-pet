import { styled } from '..'

export const Input = styled('input', {
  width: '100%',
  height: '2rem',

  borde: 'none',
  backgroundColor: '$gray-100',

  '&:focus': {
    boxShadow: '$solidGrayLarge',
  },
  outline: 'transparent',
})
