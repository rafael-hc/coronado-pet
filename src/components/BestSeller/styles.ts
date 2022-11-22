import { styled } from '../../styles'

export const BestSllerContainer = styled('section', {
  width: 1200,
  margin: '0 auto 2.5rem',

  h1: {
    marginBottom: '2rem',
  },
})

export const SliderContainer = styled('div', {
  // gap: '0.5rem',
})

export const SliderHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem',
})

export const ArrowSlide = styled('button', {
  width: '2rem',
  height: '2rem',
  marginLeft: '0.5rem',
  borderRadius: '100%',
  backgroundColor: '$primary',
  color: '$white',
  cursor: 'pointer',
})
