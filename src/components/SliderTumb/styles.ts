import { styled } from '../../styles'

export const SliderTumbContainer = styled('div', {
  width: '100vw',
  height: 300,

  display: 'grid',
  gridTemplateColumns: '100px 1fr',
  // flexDirection: 'column',

  '@sm': {
    width: '100vw',
    maxWidth: 600,
    height: 600,
  },
})

export const SlidesContainer = styled('div', {
  flex: '5',
  display: 'flex',
  overflow: 'hidden',

  position: 'relative',

  img: {
    order: 1,
    objectFit: 'contain',
  },
})

export const Slide = styled('div', {
  display: 'flex',
  alignItems: 'stretch',
  position: 'relative',
  width: '100vw',
  height: '100%',

  '&:hover': {
    cursor: 'none',
  },

  '@sm': {
    maxWidth: 500,
  },
})

export const SlideTransition = styled('div', {
  display: 'flex',

  variants: {
    activeSlide: {
      0: {
        transform: 'translateX(0)',
        transition: 'all 800ms',
      },
      1: {
        transform: 'translateX(-100vw)',
        transition: 'all 800ms',
        '@sm': {
          transform: 'translateX(-500px)',
        },
      },
      2: {
        transform: 'translateX(-200vw)',
        transition: 'all 800ms',
        '@sm': {
          transform: 'translateX(-1000px)',
        },
      },
      3: {
        transform: 'translateX(-300vw)',
        transition: 'all 800ms',
        '@sm': {
          transform: 'translateX(-1500px)',
        },
      },
      4: {
        transform: 'translateX(-400vw)',
        transition: 'all 800ms',
        '@sm': {
          transform: 'translateX(-2000px)',
        },
      },
    },
  },
})

export const ThumbnailsContainer = styled('div', {
  flex: '1',
  display: 'grid',
  gridTemplateRows: 'repeat(5, 1fr)',
  gap: '0.5rem',

  img: {
    objectFit: 'contain',
  },

  variants: {
    thumbPosition: {
      left: {
        order: 0,
      },
      botton: {
        order: 2,
      },
    },
  },
})

export const Thumbnail = styled('div', {
  flex: '1',
  position: 'relative',

  borderRadius: 8,
  backgroundColor: '$white',

  cursor: 'pointer',

  opacity: '0.5',

  variants: {
    active: {
      true: {
        opacity: 1,
      },
    },
  },
})

export const Magnfy = styled('div', {
  width: 300,
  height: 300,

  position: 'absolute',
  backgroundRepeat: 'no-repeat',
  border: '2px solid $white',
  backgroundSize: '700%',
  backgroundPosition: 'center',
  borderRadius: '100%',
  pointerEvents: 'none',

  display: 'none',
})
