import Link from 'next/link'
import { styled } from '../styles'

export const SubBannerContainer = styled('section', {
  width: '100vw',
  margin: '0 auto 2.5rem',
  display: 'grid',

  gridTemplateRows: 'repeat(2, 1fr)',
  gap: '2rem',

  ':first-child': {},

  img: {
    objectFit: 'cover',
  },
  '@sm': {
    width: 1200,
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

export const SubBanner = styled(Link, {
  width: '100%',
  height: 200,
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '10px',

  '&:hover': {
    img: {
      transform: 'scale(1.1)',
    },
  },
  img: {
    transition: 'transform .5s ease',
  },

  '@sm': {
    height: 256,
    '&:first-child': {
      height: 544,
      gridRowStart: 1,
      gridRowEnd: 3,
    },
  },
})

export const Description = styled('div', {
  maxWidth: '18rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  fontSize: '2rem',
  textAlign: 'start',

  color: '$gray-800',

  position: 'absolute',
  top: '40%',
  left: 24,

  variants: {
    position: {
      right: {
        left: 'auto',
        right: 24,
        textAlign: 'end',
        alignItems: 'flex-end',
      },
    },
  },
})
