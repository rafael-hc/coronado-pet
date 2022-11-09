import { styled } from '..'

export const Input = styled('input', {
  width: '100%',
  height: '2rem',

  borde: 'none',
  backgroundColor: '$gray-100',

  '&:focus': {
    boxShadow: '$solidGrayLarge',
  },
  // '&:focus': {
  outline: 'transparent',
  //   boxShadow: '0 0 0 2px $primary',
  //   // boxShadowColor: '$'
  // },
})
