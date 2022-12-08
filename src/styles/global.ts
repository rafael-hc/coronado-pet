import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    fontSize: 10,

    '@sm': {
      fontSize: 16,
    },
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, iput, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  button: {
    background: 'transparent',
    border: 'none',
    lineHeight: 0,
  },
  li: {
    listStyle: 'none',
  },

  a: {
    color: '$gray-500',
    textDecoration: 'none',
  },

  input: {
    '&[type=number]': {
      '&::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
      },
      '&::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
      },
    },
  },
})
