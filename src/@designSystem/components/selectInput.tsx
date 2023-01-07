import { styled } from '../../styles'

export const Select = styled('select', {
  fontFamily: '$default',
  fontSize: '$2xl',
  color: '$gray600',
  fontWeight: 'regular',
  backgroundColor: '$gray100',
  border: 0,
  width: '100%',

  appearance: 'none',
  '-webkit-appearance': 'none',
  '-moz-appearance': 'none',

  '&:focus': {
    outline: 0,
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&::placeholder': {
    color: '$gray200',
  },
  '@sm': {
    fontSize: '$sm',
  },
})
