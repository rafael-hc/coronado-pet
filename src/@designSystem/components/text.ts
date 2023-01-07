import { styled } from '../../styles'

export const Text = styled('p', {
  lineHeight: '$base',
  margin: 0,
  color: '$gray500',

  variants: {
    size: {
      xxs: { '@sm': { fontSize: '$xxs' }, fontSize: '$sm' },
      xs: { '@sm': { fontSize: '$xs' }, fontSize: '$md' },
      sm: { '@sm': { fontSize: '$sm' }, fontSize: '$lg' },
      md: { '@sm': { fontSize: '$md' }, fontSize: '$2xl' },
      lg: { '@sm': { fontSize: '$lg' }, fontSize: '$2xl' },
      xl: { '@sm': { fontSize: '$xl' }, fontSize: '$4xl' },
      '2xl': { '@sm': { fontSize: '$2xl' }, fontSize: '$5xl' },
      '4xl': { '@sm': { fontSize: '$4xl' }, fontSize: '$6xl' },
      '5xl': { '@sm': { fontSize: '$5xl' }, fontSize: '$7xl' },
      '6xl': { '@sm': { fontSize: '$6xl' }, fontSize: '$8xl' },
      '7xl': { '@sm': { fontSize: '$7xl' }, fontSize: '$9xl' },
      '8xl': { '@sm': { fontSize: '$8xl' }, fontSize: '$9xl' },
      '9xl': { '@sm': { fontSize: '$9xl' }, fontSize: '$9xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
