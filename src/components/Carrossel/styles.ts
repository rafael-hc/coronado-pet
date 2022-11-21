import { keyframes, styled } from '../../styles'

export const SliderContainer = styled('div', {
  position: 'relative',
})

export const ItemSlide = styled('div', {
  background: '$gray-500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 50,
  color: '$white',
  fontWeight: 500,
  height: 650,
  maxHeight: '100vh',
  position: 'relative',

  img: {
    objectFit: 'cover',
  },
})

const textAnimation = keyframes({
  from: {
    left: '300px',
    opacity: 0,
  },
  to: {
    left: '0px',
    opacity: 1,
  },
})

export const TextSlide = styled('div', {
  position: 'absolute',
  left: 200,
  top: 200,
  color: 'black',
  width: 400,

  'span, a': {
    display: 'inline-block',
    position: 'relative',
    left: '300px',
    opacity: 0,
  },

  a: {
    width: '10rem',
    marginTop: '1rem',
    padding: '0.5rem 0',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    cursor: 'pointer',
    borderRadius: 8,
    fontSize: '2rem',

    backgroundColor: '$primary',
    color: '$white',
  },

  variants: {
    active: {
      true: {
        ':nth-child(1)': {
          animation: `${textAnimation} 2s 300ms forwards`,
        },
        ':nth-child(2)': {
          animation: `${textAnimation} 2s 500ms forwards`,
        },
        ':nth-child(3)': {
          animation: `${textAnimation} 2s 700ms forwards`,
        },
        ':nth-child(4)': {
          animation: `${textAnimation} 2s 900ms forwards`,
        },
      },
    },
  },
})

export const Dots = styled('div', {
  display: 'flex',
  padding: '10px 0',
  justifyContent: 'center',
})

export const Dot = styled('button', {
  border: 'none',
  width: 10,
  height: 10,
  backgroundColor: '$gray-400',
  borderRadius: '50%',
  margin: '0 5px',
  padding: 5,
  cursor: 'pointer',

  '&:focus': {
    outline: 'none',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$black',
      },
    },
  },
})

export const ArrowSlide = styled('button', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',

  variants: {
    position: {
      left: {
        left: 5,
      },
      right: {
        left: 'auto',
        right: 5,
      },
    },
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})
