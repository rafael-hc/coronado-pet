import Link from 'next/link'
import { styled } from '..'

export const SubBannerContainer = styled('section', {
  width: 1200,
  margin: '0 auto 2.5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  gap: '2rem',

  ':first-child': {
    gridRowStart: 1,
    gridRowEnd: 3,
  },
})

export const SubBanner = styled(Link, {
  width: '100%',
  height: 256,
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '10px',

  '&:first-child': {
    height: 544,
  },
  '&:hover': {
    img: {
      transform: 'scale(1.1)',
    },
  },
  img: {
    transition: 'transform .5s ease',
  },
})

export const Description = styled('div', {
  maxWidth: '18rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  fontSize: '32px',
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

  // button: {
  //   marginTop: '1rem',
  //   padding: '0.75rem',

  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',

  //   cursor: 'pointer',
  //   borderRadius: 8,
  //   fontSize: '1rem',

  //   backgroundColor: '$primary',
  //   color: '$white',

  //   '&:hover': {
  //     opacity: '0.8',
  //   },
  // },
})
