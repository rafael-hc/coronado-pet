import { styled } from '../../styles'

export const SliderTumbContainer = styled('div', {
  width: '100vw',
  height: 300,

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  '@sm': {
    width: '100%',
    height: 600,
  },
})

export const SlidesContainer = styled('div', {
  flex: '5',
  display: 'flex',

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
          transform: 'translateX(-600px)',
        },
      },
      2: {
        transform: 'translateX(-200vw)',
        transition: 'all 800ms',
        '@sm': {
          transform: 'translateX(-1200px)',
        },
      },
      3: {
        transform: 'translateX(-300vw)',
        transition: 'all 800ms',
        '@sm': {
          transform: 'translateX(-1800px)',
        },
      },
      4: {
        transform: 'translateX(-400vw)',
        transition: 'all 800ms',
        '@sm': {
          transform: 'translateX(-2400px)',
        },
      },
    },
  },
})

export const ThumbnailsContainer = styled('div', {
  flex: '1',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
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

  cursor: 'pointer',

  variants: {
    active: {
      true: {
        border: '1px solid $gray-200',
      },
    },
  },
})
