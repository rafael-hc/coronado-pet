import { createStitches, defaultThemeMap } from '@stitches/react'

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
      background: '#f3ffe6',
      secondary: '#437a00',
      button: '#D2D2D2',
      text: '#fffff0',
      light: '#F3F3F3',
      dark: '#212121',
      'footer-background': '#77a677',

      danger: '#ff3100',
      gray50: '#f1f1f1',
      gray100: '#E1E1E6',
      gray200: '#A9A9B2',
      gray400: '#7C7C8A',
      gray500: '#505059',
      gray600: '#323238',
      gray700: '#202024',
      gray800: '#202024',
      gray900: '#121214',

      green300: '#46FF27',

      purple100: '#F4D5FB',
      purple500: '#803F90',
    },
    shadows: {
      solidGrayLarge: `0px 0px 0 2px #7bb831`,
    },
    fontSizes: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '6rem',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '10rem',
      64: '16rem',
      80: '20rem',
    },
    radii: {
      px: '1px',
      xs: '4px',
      sm: '6px',
      md: '8px',
      lg: '16px',
      full: '99999px',
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },
  },
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },
})
