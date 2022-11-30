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

    // '&:hover': {
    //   color: '$primary',
    // },
    textDecoration: 'none',
  },
})
