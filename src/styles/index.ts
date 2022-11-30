import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  media: {
    sm: '(min-width: 480px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  theme: {
    colors: {
      white: '#fff',
      black: '#000',

      primary: '#7bb831',
      background: '#d5f1b3',
      secondary: '#437a00',
      button: '#D2D2D2',
      text: '#fffff0',
      light: '#F3F3F3',
      dark: '#212121',
      'footer-backgound': '#77a677',

      danger: '#ff3100',
      'gray-50': '#f1f1f1',
      'gray-100': '#E1E1E6',
      'gray-200': '#C4C4CC',
      'gray-400': '#7C7C8A',
      'gray-500': '#7C7C8A',
      'gray-600': '#323238',
      'gray-700': '#29292E',
      'gray-800': '#1F1E1E',
      'green-300': '#46FF27',

      'purple-100': '#F4D5FB',
      'purple-500': '#803F90',
    },
    shadows: {
      solidGrayLarge: `0px 0px 0 2px #7bb831`,
    },
  },
})
