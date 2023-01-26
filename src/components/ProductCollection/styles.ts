import { styled } from '../../styles'

export const ProductCollectionContainer = styled('section', {
  width: '100vw',
  margin: '0 auto 2.5rem',

  h1: {
    marginBottom: '2rem',
  },
  '@sm': {
    width: 1200,
  },
})

export const SliderContainer = styled('div', {
  display: 'flex',
})

export const SliderHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem',
})

export const ItemSlider = styled('div', {
  minWidth: '14rem',
})

export const ArrowSlide = styled('button', {
  width: '2rem',
  height: '2rem',
  marginLeft: '0.5rem',
  borderRadius: '100%',
  backgroundColor: '$primary',
  color: '$white',
  cursor: 'pointer',
  visibility: 'hidden',
  '@sm': {
    visibility: 'visible',
  },
})
